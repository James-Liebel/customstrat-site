'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Deterministic scroll-to-top on route change.
 *
 * Next's built-in reset relies on the browser, and on mobile Safari the
 * dynamic URL bar plus CSS smooth-scrolling can leave a new page parked
 * partway down. This forces an instant jump to the top on every pathname
 * change — except when navigating to a hash target (e.g. /about#services),
 * where the anchor should win.
 */
export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}
