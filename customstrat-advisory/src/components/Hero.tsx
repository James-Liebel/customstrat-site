'use client';

import Image from "next/image";
import { usePathname } from "next/navigation";
import { getThemeForRoute, pageThemes } from "@/theme/pageThemes";

interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  centered?: boolean;
  themeKey?: string; // Optional override, otherwise uses route-based theme
  showScrollIndicator?: boolean;
}

/**
 * Hero with:
 * - Background image + theme-based hero overlay (darker than body)
 * - Subtle diamond grid outlines
 * - A left-to-right "glow wave" that lights up diamond outlines and fades out as it passes
 *
 * No global animated layers, no click blocking (pointer-events-none everywhere).
 * Hero overlay is always darker than page body for clear visual separation.
 */
export default function Hero({
  title,
  subtitle,
  image = "/images/hero-home.jpg",
  centered = false,
  themeKey,
  showScrollIndicator = false,
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
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          className="absolute inset-0 hero-overlay"
          style={heroOverlayStyle}
        />
      </div>

      {/* Animated diamond-outline glow wave (hero-only) */}
      <div className="absolute inset-0 pointer-events-none z-[2] opacity-[0.85]" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Diamond grid pattern */}
            <pattern id="cs-diamondGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path
                d="M40 0 L80 40 L40 80 L0 40 Z"
                fill="none"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="1"
              />
            </pattern>

            {/* POP-OUT “scales” effect (keeps same diamond color; uses only light/shadow) */}
            <filter id="cs-popOut" x="-45%" y="-45%" width="190%" height="190%">
              {/* Create an expanded stroke silhouette to fake thickness */}
              <feMorphology in="SourceAlpha" operator="dilate" radius="1.6" result="thick" />

              {/* Shadow rim (down-right) */}
              <feOffset in="thick" dx="5" dy="6" result="shadowOff" />
              <feGaussianBlur in="shadowOff" stdDeviation="3.0" result="shadowBlur" />
              <feColorMatrix
                in="shadowBlur"
                type="matrix"
                values="0 0 0 0 0
                        0 0 0 0 0
                        0 0 0 0 0
                        0 0 0 0.55 0"
                result="shadow"
              />

              {/* Highlight rim (up-left) */}
              <feOffset in="thick" dx="-4" dy="-4" result="hiOff" />
              <feGaussianBlur in="hiOff" stdDeviation="2.6" result="hiBlur" />
              <feColorMatrix
                in="hiBlur"
                type="matrix"
                values="0 0 0 0 1
                        0 0 0 0 1
                        0 0 0 0 1
                        0 0 0 0.38 0"
                result="highlight"
              />

              {/* Combine: shadow + original + highlight */}
              <feMerge>
                <feMergeNode in="shadow" />
                <feMergeNode in="SourceGraphic" />
                <feMergeNode in="highlight" />
              </feMerge>
            </filter>

            {/* Band gradient (logo blues) */}
            <linearGradient id="cs-waveBand" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(93,130,195,0.0)" />
              <stop offset="40%" stopColor="rgba(93,130,195,0.0)" />
              <stop offset="50%" stopColor="rgba(93,130,195,0.95)" />
              <stop offset="60%" stopColor="rgba(93,130,195,0.0)" />
              <stop offset="100%" stopColor="rgba(93,130,195,0.0)" />
            </linearGradient>

            {/* Soft glow */}
            <filter id="cs-softGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Moving mask band */}
            <mask id="cs-waveMask">
              <rect width="1200" height="600" fill="black" />
              <g>
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  dur="16s"
                  repeatCount="indefinite"
                  values="-500 0; 1700 0; -500 0"
                  keyTimes="0; 0.85; 1"
                />
                <rect x="-500" y="0" width="800" height="600" fill="url(#cs-waveBand)" />
              </g>
            </mask>
          </defs>

          {/* Static faint diamond outlines */}
          <rect width="1200" height="600" fill="url(#cs-diamondGrid)" opacity="0.30" />

          {/* Glowing outlines only where the wave passes */}
          <rect
            width="1200"
            height="600"
            fill="url(#cs-diamondGrid)"
            mask="url(#cs-waveMask)"
            filter="url(#cs-softGlow)"
            opacity="0.95"
          />

          {/* POP-OUT pass: same diamonds, under the wave, with 3D rims (no color change) */}
          <rect
            width="1200"
            height="600"
            fill="url(#cs-diamondGrid)"
            mask="url(#cs-waveMask)"
            filter="url(#cs-popOut)"
            opacity="1"
          /></svg>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-white py-8">
        <div className={centered ? "text-center max-w-4xl mx-auto" : "max-w-4xl"}>
          <h1 className="font-semibold mb-0 leading-tight text-balance animate-[fadeInUp_800ms_ease-out_200ms] opacity-0 [animation-fill-mode:forwards] brand-name !text-[#FFFFFF]">
            {title}
          </h1>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce transition-opacity duration-1000 opacity-60 hover:opacity-100">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/70">Scroll</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </div>
      )}

      {/* Bottom fade - removed, now handled by hero-overlay::after for better transition */}
    </section>
  );
}
