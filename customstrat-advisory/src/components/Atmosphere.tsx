'use client';

import { usePathname } from 'next/navigation';
import { pageThemes, getThemeForRoute, type PageTheme } from '@/theme/pageThemes';
import { useMemo } from 'react';

interface AtmosphereProps {
  themeKey?: string;
  intensity?: 'low' | 'medium';
  className?: string;
}

/* Ambient flotsam: deterministic configs (SSR-safe), spread along the full
   page height so motion is present at every scroll depth.
   - sparks: small brand diamonds that rise while slowly rotating
   - bokeh: large soft light orbs drifting behind them for depth */
const SPARKS: Array<{
  top: string; left: string; size: number; variant: '' | 'gold' | 'accent';
  dur: number; delay: number; sway: number; op: number;
}> = [
  { top: '4%', left: '26%', size: 10, variant: 'accent', dur: 15, delay: 2, sway: 22, op: 0.42 },
  { top: '10%', left: '9%', size: 18, variant: 'gold', dur: 21, delay: 0, sway: 30, op: 0.5 },
  { top: '16%', left: '68%', size: 12, variant: '', dur: 18, delay: 10, sway: -22, op: 0.3 },
  { top: '22%', left: '88%', size: 13, variant: 'accent', dur: 17, delay: 6, sway: -26, op: 0.45 },
  { top: '30%', left: '40%', size: 9, variant: 'gold', dur: 14, delay: 4, sway: 24, op: 0.4 },
  { top: '36%', left: '16%', size: 24, variant: '', dur: 26, delay: 3, sway: 24, op: 0.32 },
  { top: '42%', left: '76%', size: 16, variant: 'gold', dur: 20, delay: 11, sway: 28, op: 0.44 },
  { top: '48%', left: '93%', size: 15, variant: 'gold', dur: 19, delay: 9, sway: -32, op: 0.45 },
  { top: '54%', left: '32%', size: 11, variant: 'accent', dur: 16, delay: 1, sway: -24, op: 0.4 },
  { top: '62%', left: '7%', size: 12, variant: 'accent', dur: 16, delay: 12, sway: 26, op: 0.48 },
  { top: '68%', left: '58%', size: 10, variant: '', dur: 15, delay: 7, sway: 22, op: 0.3 },
  { top: '76%', left: '84%', size: 20, variant: '', dur: 23, delay: 5, sway: -24, op: 0.34 },
  { top: '82%', left: '44%', size: 13, variant: 'gold', dur: 17, delay: 13, sway: -26, op: 0.42 },
  { top: '90%', left: '20%', size: 14, variant: 'gold', dur: 18, delay: 14, sway: 28, op: 0.46 },
  { top: '96%', left: '72%', size: 11, variant: 'accent', dur: 16, delay: 8, sway: 24, op: 0.44 },
];

const BOKEH: Array<{
  top: string; left: string; size: number; variant: '' | 'gold' | 'accent';
  dur: number; delay: number; sway: number; op: number;
}> = [
  { top: '6%', left: '48%', size: 52, variant: 'gold', dur: 26, delay: 11, sway: 28, op: 0.12 },
  { top: '14%', left: '72%', size: 70, variant: 'accent', dur: 30, delay: 0, sway: 36, op: 0.14 },
  { top: '24%', left: '18%', size: 40, variant: '', dur: 22, delay: 16, sway: -26, op: 0.11 },
  { top: '30%', left: '4%', size: 46, variant: 'gold', dur: 24, delay: 8, sway: -28, op: 0.16 },
  { top: '40%', left: '86%', size: 58, variant: 'accent', dur: 28, delay: 5, sway: 32, op: 0.13 },
  { top: '52%', left: '64%', size: 88, variant: '', dur: 34, delay: 4, sway: 30, op: 0.10 },
  { top: '62%', left: '28%', size: 44, variant: 'gold', dur: 25, delay: 18, sway: -30, op: 0.13 },
  { top: '70%', left: '12%', size: 56, variant: 'accent', dur: 27, delay: 13, sway: 34, op: 0.13 },
  { top: '80%', left: '52%', size: 48, variant: '', dur: 23, delay: 9, sway: 26, op: 0.1 },
  { top: '86%', left: '78%', size: 64, variant: 'gold', dur: 31, delay: 7, sway: -30, op: 0.12 },
  { top: '94%', left: '34%', size: 50, variant: 'accent', dur: 26, delay: 15, sway: -28, op: 0.12 },
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

      {/* Constant ambient motion: bokeh light behind rising brand diamonds */}
      <div className="fx-particles">
        {BOKEH.map((m, i) => (
          <span
            key={`b${i}`}
            className={`fx-bokeh ${m.variant ? `fx-bokeh--${m.variant}` : ''}`}
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
        {SPARKS.map((m, i) => (
          <span
            key={`s${i}`}
            className={`fx-spark ${m.variant ? `fx-spark--${m.variant}` : ''}`}
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
