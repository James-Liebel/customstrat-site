/**
 * Atmosphere Component
 * 
 * Provides unified background atmosphere across all non-home pages.
 * Uses theme system from pageThemes.ts for per-page customization.
 * 
 * All layers are pointer-events-none and positioned behind content.
 * 
 * Z-index layering:
 * - Atmosphere: z-0 (base layer)
 * - Content wrapper: z-10 (above atmosphere)
 * - Hero: z-10 (above atmosphere, darker overlay)
 */

'use client';

import { usePathname } from 'next/navigation';
import { pageThemes, getThemeForRoute, type PageTheme } from '@/theme/pageThemes';

interface AtmosphereProps {
  themeKey?: string; // Optional override, otherwise uses route-based theme
  intensity?: 'low' | 'medium'; // Optional intensity override
  className?: string;
}

export default function Atmosphere({ 
  themeKey,
  intensity: intensityOverride,
  className = '' 
}: AtmosphereProps) {
  const pathname = usePathname();
  const theme = themeKey 
    ? pageThemes[themeKey] || pageThemes['default-clean']
    : getThemeForRoute(pathname);

  // Use override if provided, otherwise use theme's intensity
  const effectiveIntensity = intensityOverride || theme.intensity;

  // Intensity multipliers for opacity
  const intensityMap = {
    low: 0.35,
    medium: 0.55,
    high: 0.75,
  };
  
  const opacity = intensityMap[effectiveIntensity];
  const motionSpeed = theme.motionSpeed || { primary: 24, secondary: 30 };

  // Generate glow positions based on accent colors
  const glowPositions = [
    { x: '18%', y: '12%', color: theme.accent },
    { x: '82%', y: '25%', color: theme.accentSecondary || theme.accent },
    ...(theme.pattern === 'diamond' || theme.pattern === 'rings' ? [
      { x: '50%', y: '70%', color: theme.accentSecondary || theme.accent }
    ] : [])
  ].slice(0, theme.pattern === 'diamond' || theme.pattern === 'rings' ? 3 : 2);

  return (
    <>
      {/* Base gradient wash (lighter than hero) */}
      <div 
        className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
        aria-hidden="true"
        style={{
          background: `linear-gradient(${theme.backgroundGradient.angle}, ${theme.backgroundGradient.stops.join(', ')})`,
        }}
      >
        {/* Pattern layer */}
        <PatternLayer pattern={theme.pattern} opacity={opacity * 0.4} />

        {/* Motion-based animated elements */}
        <MotionLayer 
          motion={theme.motion} 
          accent={theme.accent}
          accentSecondary={theme.accentSecondary || theme.accent}
          glowPositions={glowPositions}
          opacity={opacity}
          speed={motionSpeed}
        />
      </div>
    </>
  );
}

/**
 * Pattern Layer Component
 */
function PatternLayer({ 
  pattern, 
  opacity 
}: { 
  pattern: PageTheme['pattern']; 
  opacity: number;
}) {
  const baseOpacity = Math.min(opacity, 0.04); // Cap at 4% for cleanliness

  if (pattern === 'dots') {
    return (
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
          backgroundSize: '48px 48px',
          opacity: baseOpacity,
        }}
      />
    );
  }

  if (pattern === 'grid') {
    return (
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          opacity: baseOpacity,
        }}
      />
    );
  }

  if (pattern === 'diamond') {
    return (
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 L80 40 L40 80 L0 40 Z' fill='none' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
          opacity: baseOpacity * 1.2,
        }}
      />
    );
  }

  if (pattern === 'rings') {
    return (
      <>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, transparent 40%, rgba(255,255,255,0.03) 40%, rgba(255,255,255,0.03) 42%, transparent 42%)`,
            backgroundSize: '120px 120px',
            backgroundPosition: '20% 20%',
            opacity: baseOpacity,
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, transparent 38%, rgba(255,255,255,0.025) 38%, rgba(255,255,255,0.025) 40%, transparent 40%)`,
            backgroundSize: '140px 140px',
            backgroundPosition: '80% 60%',
            opacity: baseOpacity * 0.8,
          }}
        />
      </>
    );
  }

  if (pattern === 'strata') {
    return (
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.02) 2px,
              rgba(255,255,255,0.02) 4px
            ),
            repeating-linear-gradient(
              12deg,
              transparent,
              transparent 3px,
              rgba(255,255,255,0.015) 3px,
              rgba(255,255,255,0.015) 6px
            )
          `,
          opacity: baseOpacity * 0.6,
        }}
      />
    );
  }

  return null;
}

/**
 * Motion Layer Component
 */
function MotionLayer({
  motion,
  accent,
  accentSecondary,
  glowPositions,
  opacity,
  speed
}: {
  motion: PageTheme['motion'];
  accent: string;
  accentSecondary: string;
  glowPositions: Array<{ x: string; y: string; color: string }>;
  opacity: number;
  speed: { primary: number; secondary?: number };
}) {
  const glowOpacity = opacity * 0.6; // Further reduce for cleanliness

  if (motion === 'drift') {
    return (
      <>
        {glowPositions.map((glow, index) => (
          <div
            key={index}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${280 + index * 80}px`,
              height: `${280 + index * 80}px`,
              left: glow.x,
              top: glow.y,
              background: `radial-gradient(circle, ${glow.color}, transparent 72%)`,
              opacity: glowOpacity,
              animation: `atmosphere-drift-${index % 2 === 0 ? 'a' : 'b'} ${speed[index % 2 === 0 ? 'primary' : (speed.secondary || speed.primary * 1.2)]}s ease-in-out infinite`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </>
    );
  }

  if (motion === 'orbit') {
    return (
      <>
        {glowPositions.map((glow, index) => (
          <div
            key={index}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${300 + index * 100}px`,
              height: `${300 + index * 100}px`,
              left: glow.x,
              top: glow.y,
              background: `radial-gradient(circle, ${glow.color}, transparent 70%)`,
              opacity: glowOpacity,
              animation: `atmosphere-orbit-${index % 2 === 0 ? 'a' : 'b'} ${speed[index % 2 === 0 ? 'primary' : (speed.secondary || speed.primary * 1.25)]}s ease-in-out infinite`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </>
    );
  }

  if (motion === 'scanline') {
    return (
      <>
        {glowPositions.map((glow, index) => (
          <div
            key={index}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${320 + index * 60}px`,
              height: `${180 + index * 40}px`,
              left: glow.x,
              top: glow.y,
              background: `radial-gradient(ellipse, ${glow.color}, transparent 65%)`,
              opacity: glowOpacity * 0.8,
              animation: `atmosphere-scanline-${index % 2 === 0 ? 'a' : 'b'} ${speed[index % 2 === 0 ? 'primary' : (speed.secondary || speed.primary * 1.15)]}s linear infinite`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
        {/* Horizontal scanline effect */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${accent} 50%, transparent 100%)`,
            backgroundSize: '200% 100%',
            opacity: glowOpacity * 0.3,
            animation: `atmosphere-scanline-sweep ${speed.primary * 1.5}s linear infinite`,
          }}
        />
      </>
    );
  }

  if (motion === 'float') {
    return (
      <>
        {glowPositions.map((glow, index) => (
          <div
            key={index}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${260 + index * 90}px`,
              height: `${260 + index * 90}px`,
              left: glow.x,
              top: glow.y,
              background: `radial-gradient(circle, ${glow.color}, transparent 68%)`,
              opacity: glowOpacity,
              animation: `atmosphere-float-${index % 2 === 0 ? 'a' : 'b'} ${speed[index % 2 === 0 ? 'primary' : (speed.secondary || speed.primary * 1.3)]}s ease-in-out infinite`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </>
    );
  }

  return null;
}
