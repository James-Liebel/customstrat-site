'use client';

import { usePathname } from "next/navigation";
import { getThemeForRoute, pageThemes } from "@/theme/pageThemes";

interface HeroProps {
  title: string;
  centered?: boolean;
  themeKey?: string; // Optional override, otherwise uses route-based theme
}

/**
 * Hero with:
 * - Theme-based gradient background (darker than body)
 * - Subtle static diamond grid texture
 *
 * No animated layers, no click blocking (pointer-events-none everywhere).
 * Hero overlay is always darker than page body for clear visual separation.
 */
export default function Hero({
  title,
  centered = false,
  themeKey,
}: HeroProps) {
  // Get theme for hero overlay (darker than body)
  const pathname = usePathname();
  const theme = themeKey
    ? (pageThemes[themeKey] || pageThemes['default-clean'])
    : getThemeForRoute(pathname);

  // Hero overlay must be darker than body
  // Combine linear gradient with optional radial accents
  const heroOverlayStyle = {
    background: [
      `linear-gradient(${theme.heroOverlay.angle}, ${theme.heroOverlay.linearStops.join(', ')})`,
      ...(theme.heroOverlay.radialAccents || [])
    ].join(', '),
  };
  return (
    <section className="relative min-h-[140px] lg:min-h-[180px] flex items-center justify-center overflow-hidden">
      {/* Theme gradient background */}
      <div className="absolute inset-0 hero-overlay" style={heroOverlayStyle} />

      {/* Static diamond grid texture + slow shimmer sweep */}
      <div className="absolute inset-0 pointer-events-none z-[2]" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="cs-diamondGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path
                d="M40 0 L80 40 L40 80 L0 40 Z"
                fill="none"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#cs-diamondGrid)" opacity="0.30" />
        </svg>
        <div className="cs-hero-shimmer" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-white py-8">
        <div className={centered ? "text-center max-w-4xl mx-auto" : "max-w-4xl"}>
          <h1 className="font-semibold mb-0 leading-tight text-balance animate-[fadeInUp_800ms_ease-out_200ms] opacity-0 [animation-fill-mode:forwards] brand-name [text-shadow:0_2px_24px_rgba(10,26,47,0.45)]">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
