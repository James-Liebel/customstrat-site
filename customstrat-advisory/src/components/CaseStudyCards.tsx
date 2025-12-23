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
          <p className="text-center text-gray-600 mb-10">
            {subtitle}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((c, idx) => {
            const href =
              c.href ?? (c.slug ? `/services/${c.slug}` : "/services");

            return (
              <Link
                key={`${href}-${idx}`}
                href={href}
                className="
                  group relative block overflow-hidden rounded-2xl
                  cs-glow-card
                  shadow-soft
                  transition-[transform,box-shadow] duration-300
                  focus:outline-none focus:ring-2 focus:ring-primary/40
                "
              >
                {/* Background gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#3B5AA9] to-[#0B2E57]" />

                {/* Subtle texture */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)",
                    backgroundSize: "18px 18px",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 p-10 min-h-[260px] flex items-center justify-center text-center">
                  <h3 className="text-3xl font-semibold leading-tight text-white">
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
