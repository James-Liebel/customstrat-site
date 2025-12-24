import Link from "next/link";

type Category = {
  title: string;
  slug?: string;
  href?: string;
};

type Props = {
  categories?: Category[];
  subtitle?: string;
};

export default function CaseStudyCards({ categories = [], subtitle }: Props) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {subtitle && (
          <p className="text-center text-gray-600 mb-10">{subtitle}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((c, idx) => {
            const href = c.href ?? (c.slug ? `/services/${c.slug}` : "/services");

            return (
              <Link
                key={`${href}-${idx}`}
                href={href}
                className="
                  group relative block rounded-2xl overflow-hidden
                  cs-glow-card
                  shadow-soft hover:shadow-soft-lg
                  transition-[transform,box-shadow] duration-300
                  focus:outline-none focus:ring-2 focus:ring-primary/40
                "
              >
                {/* Outline tracer that runs the box perimeter */}
                <span className="cs-outline-tracer" aria-hidden="true">
                  <svg className="cs-outline-svg" preserveAspectRatio="none">
                    <defs>
                      <linearGradient
                        id="beamGradient"
                        gradientUnits="userSpaceOnUse"
                        x1="0" y1="0" x2="2000" y2="0"
                      >
                      
                        <stop offset="0%"   stopColor="rgba(201,169,97,1)" />
    
                        <stop offset="25%"  stopColor="rgba(201,169,97,0.6)" />
                        <stop offset="55%"  stopColor="rgba(201,169,97,0.25)" />
    
                        <stop offset="100%" stopColor="rgba(201,169,97,0)" />
                      </linearGradient>
                    </defs>



                    <rect className="cs-outline-rect" />
                  </svg>
                </span>


                {/* Background gradient (rounded to prevent “square” look) */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-[#3B5AA9] to-[#0B2E57]" />

                {/* Subtle texture (also rounded) */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-25"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)",
                    backgroundSize: "18px 18px",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 p-10 min-h-[260px] flex items-center justify-center text-center">
                  <h3 className="text-3xl font-semibold leading-tight text-white whitespace-pre-line">
                    {c.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
