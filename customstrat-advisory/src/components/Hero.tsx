import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  centered?: boolean;
}

/**
 * Hero with:
 * - Background image + existing .hero-overlay (from globals.css)
 * - Subtle diamond grid outlines
 * - A left-to-right “glow wave” that lights up diamond outlines and fades out as it passes
 *
 * No global animated layers, no click blocking (pointer-events-none everywhere).
 */
export default function Hero({
  title,
  subtitle,
  image = "/images/hero-home.jpg",
  centered = false,
}: HeroProps) {
  return (
    <section className="relative min-h-[450px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 hero-overlay" />
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
        </svg>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-white py-20">
        <div className={centered ? "text-center max-w-4xl mx-auto" : "max-w-4xl"}>
          {subtitle && (
            <div className="flex items-center gap-4 mb-8 animate-[fadeInUp_800ms_ease-out]">
              <div className="relative group">
                <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative w-32 h-32 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Image
                    src="/images/logo.png"
                    alt="CustomStrat Advisory"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          )}

          <h1 className="font-semibold mb-6 leading-tight text-balance animate-[fadeInUp_800ms_ease-out_200ms] opacity-0 [animation-fill-mode:forwards] brand-name">
            {title}
          </h1>

          {subtitle && (
            <p className="text-xl lg:text-2xl text-white/95 font-light max-w-3xl leading-relaxed animate-[fadeInUp_800ms_ease-out_400ms] opacity-0 [animation-fill-mode:forwards]">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
