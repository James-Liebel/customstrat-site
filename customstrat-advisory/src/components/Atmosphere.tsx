'use client';

import { usePathname } from 'next/navigation';
import { pageThemes, getThemeForRoute, type PageTheme } from '@/theme/pageThemes';
import { useMemo } from 'react';

interface AtmosphereProps {
  themeKey?: string;
  intensity?: 'low' | 'medium';
  className?: string;
}

/* Rising light motes: deterministic configs (SSR-safe), spread along the
   full page height so motion is present at every scroll depth. */
const MOTES: Array<{
  top: string; left: string; size: number; variant: '' | 'gold' | 'accent';
  dur: number; delay: number; sway: number; op: number;
}> = [
  { top: '6%', left: '8%', size: 4, variant: '', dur: 13, delay: 0, sway: 26, op: 0.32 },
  { top: '12%', left: '78%', size: 3, variant: 'gold', dur: 16, delay: 4, sway: -20, op: 0.3 },
  { top: '20%', left: '30%', size: 5, variant: 'accent', dur: 18, delay: 2, sway: 32, op: 0.26 },
  { top: '26%', left: '92%', size: 3, variant: '', dur: 12, delay: 7, sway: -24, op: 0.3 },
  { top: '34%', left: '14%', size: 4, variant: 'accent', dur: 15, delay: 5, sway: 22, op: 0.3 },
  { top: '40%', left: '60%', size: 3, variant: 'gold', dur: 19, delay: 1, sway: -30, op: 0.24 },
  { top: '48%', left: '85%', size: 5, variant: '', dur: 14, delay: 8, sway: 26, op: 0.28 },
  { top: '54%', left: '6%', size: 3, variant: 'gold', dur: 17, delay: 3, sway: 20, op: 0.3 },
  { top: '62%', left: '42%', size: 4, variant: 'accent', dur: 13, delay: 9, sway: -26, op: 0.26 },
  { top: '68%', left: '70%', size: 3, variant: '', dur: 16, delay: 6, sway: 24, op: 0.3 },
  { top: '76%', left: '22%', size: 5, variant: 'gold', dur: 18, delay: 2, sway: -22, op: 0.26 },
  { top: '82%', left: '94%', size: 3, variant: 'accent', dur: 12, delay: 10, sway: 28, op: 0.3 },
  { top: '88%', left: '52%', size: 4, variant: '', dur: 15, delay: 4, sway: -28, op: 0.28 },
  { top: '94%', left: '12%', size: 3, variant: 'accent', dur: 17, delay: 7, sway: 24, op: 0.3 },
];

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
      <div className="fx-aurora" />

      <PatternLayer pattern={theme.pattern} opacity={opacity * 0.4} />

      {/* Outer-gutter diamond field with scroll parallax (--sy is written by
          VisualEffects; static without JS or with reduced motion). Hidden
          below xl so it never crowds the content column. */}
      <div className="fx-ambient hidden xl:block">
        <div className="fx-diamond" style={{ top: '16%', left: '3%', width: 110, height: 110, '--pf': 0.05 } as React.CSSProperties} />
        <div className="fx-diamond fx-diamond--gold" style={{ top: '34%', left: '90%', width: 150, height: 150, '--pf': 0.09 } as React.CSSProperties} />
        <div className="fx-diamond fx-diamond--accent" style={{ top: '52%', left: '5%', width: 64, height: 64, '--pf': 0.13 } as React.CSSProperties} />
        <div className="fx-diamond" style={{ top: '68%', left: '92%', width: 84, height: 84, '--pf': 0.07 } as React.CSSProperties} />
        <div className="fx-diamond fx-diamond--accent" style={{ top: '86%', left: '2%', width: 130, height: 130, '--pf': 0.10 } as React.CSSProperties} />
        <div className="fx-diamond fx-diamond--gold" style={{ top: '94%', left: '88%', width: 60, height: 60, '--pf': 0.15 } as React.CSSProperties} />
      </div>

      {glowPositions.map((glow, index) => (
        <div
          key={index}
          className={`absolute rounded-full blur-3xl ${index % 2 ? 'fx-glow-drift-b' : 'fx-glow-drift-a'}`}
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

      {/* Constant ambient motion: soft motes rising at varied depths */}
      <div className="fx-particles">
        {MOTES.map((m, i) => (
          <span
            key={i}
            className={`fx-mote ${m.variant ? `fx-mote--${m.variant}` : ''}`}
            style={{
              top: m.top,
              left: m.left,
              width: m.size,
              height: m.size,
              '--dur': `${m.dur}s`,
              '--delay': `${m.delay * -1}s`,
              '--sway': `${m.sway}px`,
              '--op': m.op,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="fx-grain" />
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
