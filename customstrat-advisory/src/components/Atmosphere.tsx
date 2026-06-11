'use client';

import { usePathname } from 'next/navigation';
import { pageThemes, getThemeForRoute, type PageTheme } from '@/theme/pageThemes';
import { useMemo } from 'react';

interface AtmosphereProps {
  themeKey?: string;
  intensity?: 'low' | 'medium';
  className?: string;
}

/**
 * Page background: theme gradient + subtle texture + static color washes.
 * Purely decorative — no animation, no pointer interaction.
 */
export default function Atmosphere({
  themeKey,
  intensity: intensityOverride,
  className = ''
}: AtmosphereProps) {
  const pathname = usePathname();

  const theme = useMemo(() => {
    return themeKey
      ? pageThemes[themeKey] || pageThemes['default-clean']
      : getThemeForRoute(pathname);
  }, [themeKey, pathname]);

  const effectiveIntensity = intensityOverride || theme.intensity;

  const intensityMap = {
    low: 0.30,
    medium: 0.45,
  };

  const opacity = intensityMap[effectiveIntensity as keyof typeof intensityMap] || 0.45;

  const glowPositions = useMemo(() => [
    { x: '18%', y: '12%', color: theme.accent },
    { x: '82%', y: '25%', color: theme.accentSecondary || theme.accent },
    ...(theme.pattern === 'diamond' || theme.pattern === 'rings' ? [
      { x: '50%', y: '70%', color: theme.accentSecondary || theme.accent }
    ] : [])
  ], [theme]);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
      style={{
        background: `linear-gradient(${theme.backgroundGradient.angle}, ${theme.backgroundGradient.stops.join(', ')})`,
        contain: 'strict', // isolates this div from layout calcs
      }}
    >
      <PatternLayer pattern={theme.pattern} opacity={opacity * 0.4} />

      {glowPositions.map((glow, index) => (
        <div
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${260 + index * 60}px`,
            height: `${260 + index * 60}px`,
            left: glow.x,
            top: glow.y,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, ${glow.color}, transparent 75%)`,
            opacity: opacity * 0.5,
          }}
        />
      ))}
    </div>
  );
}

function PatternLayer({ pattern, opacity }: { pattern: PageTheme['pattern']; opacity: number; }) {
  const baseOpacity = Math.min(opacity, 0.04);

  // CSS background patterns are very cheap on GPU compared to blurs
  const patterns: Record<string, React.CSSProperties> = {
    dots: {
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
      backgroundSize: '48px 48px',
    },
    grid: {
      backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
      backgroundSize: '64px 64px',
    },
    diamond: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 L80 40 L40 80 L0 40 Z' fill='none' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3C/svg%3E")`,
      backgroundSize: '80px 80px',
    }
  };

  if (!patterns[pattern as string] && pattern !== 'rings' && pattern !== 'strata') return null;

  return (
    <div
      className="absolute inset-0"
      style={{
        ...patterns[pattern as string],
        opacity: baseOpacity,
      }}
    />
  );
}
