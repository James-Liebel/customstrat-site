'use client';

import { usePathname } from "next/navigation";
import { getThemeForRoute, pageThemes } from "@/theme/pageThemes";

interface HeroProps {
  title: string;
  themeKey?: string; // Optional override, otherwise uses route-based theme
}

/**
 * Page header band:
 * - Theme gradient (darker than the page body) with an aligned diamond
 *   lattice and slow shimmer sweep (identical 80px tile geometry)
 * - Display title with gradient sheen and a gold rule beneath
 * - Defined bottom edge: deepening base + brand hairline, so the band
 *   reads as a distinct header rather than dissolving into the page
 */
export default function Hero({ title, themeKey }: HeroProps) {
  // Get theme for hero overlay (darker than body)
  const pathname = usePathname();
  const theme = themeKey
    ? (pageThemes[themeKey] || pageThemes['default-clean'])
    : getThemeForRoute(pathname);

  const heroOverlayStyle = {
    background: [
      `linear-gradient(${theme.heroOverlay.angle}, ${theme.heroOverlay.linearStops.join(', ')})`,
      ...(theme.heroOverlay.radialAccents || [])
    ].join(', '),
  };

  return (
    <section className="relative min-h-[210px] lg:min-h-[260px] flex items-center justify-center overflow-hidden">
      {/* Background stack */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 hero-overlay" style={heroOverlayStyle} />
        <div className="cs-hero-grid" />
        <div className="cs-hero-shimmer" />
        {/* Deepening base edge anchors the band */}
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-ink/45 to-transparent" />
        {/* Brand hairline closes the band */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(107,160,212,0.55)_30%,rgba(201,169,97,0.55)_70%,transparent)]" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-white py-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="cs-hero-title font-semibold mb-0 leading-tight text-balance animate-[fadeInUp_800ms_ease-out_200ms] opacity-0 [animation-fill-mode:forwards] brand-name">
            {title}
          </h1>
          <div className="cs-hero-rule animate-[fadeInUp_800ms_ease-out_350ms] opacity-0 [animation-fill-mode:forwards]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
