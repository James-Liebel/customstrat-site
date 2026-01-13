/**
 * Microsoft Clarity Event Tracking Utilities
 * 
 * Provides functions to track custom events with semantic labels
 * for filtering heatmaps and analyzing user behavior.
 */

// Extend Window interface for TypeScript
declare global {
  interface Window {
    clarity?: (command: string, ...args: any[]) => void;
  }
}

/**
 * Track a service click event with semantic labeling
 * 
 * @param serviceName - The name of the service clicked (e.g., "Strategy Development")
 * @param servicePath - Optional: The URL path of the service (e.g., "/services/strategy-development")
 */
export function trackServiceClick(serviceName: string, servicePath?: string) {
  if (typeof window === 'undefined') return;
  
  // Check if Clarity is loaded
  if (typeof window.clarity !== 'function') {
    console.warn('Microsoft Clarity is not loaded. Event not tracked:', serviceName);
    return;
  }

  try {
    // Track the main event with service name included for filtering
    // Format: service_click_[service_name] allows filtering by service in Clarity dashboard
    const eventName = `service_click_${serviceName.toLowerCase().replace(/\s+/g, '_').replace(/&/g, 'and')}`;
    window.clarity('event', eventName);
    
    // Also track the generic event for overall service interest
    window.clarity('event', 'service_click');
    
    // Log for debugging (remove in production if desired)
    if (process.env.NODE_ENV === 'development') {
      console.log('Clarity event tracked:', {
        event: 'service_click',
        specificEvent: eventName,
        serviceName,
        servicePath,
      });
    }
  } catch (error) {
    console.error('Error tracking Clarity event:', error);
  }
}

/**
 * Extract service name from URL path
 * Helper function to derive service name from route
 */
export function getServiceNameFromPath(path: string): string {
  const pathMap: Record<string, string> = {
    '/services/strategy-development': 'Strategy Development',
    '/services/strategy-execution': 'Strategy Execution & Transformation',
    '/services/operational-improvements': 'Customer Experience & Performance Improvement',
    '/services': 'Services Overview',
  };
  
  return pathMap[path] || path.split('/').pop()?.replace(/-/g, ' ') || 'Unknown Service';
}
