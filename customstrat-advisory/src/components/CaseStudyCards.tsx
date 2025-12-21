import Link from "next/link";

type Category = {
  title: string;
  slug?: string;
  href?: string;
  description?: string; // exists in content, but we ignore it
};

type Props = {
  categories?: Category[];
  subtitle?: string;
};

export default function CaseStudyCards({ categories = [], subtitle }: Props) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {subtitle ? <p className="text-center text-gray-600 mb-10">{subtitle}</p> : null}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((c, idx) => {
            const href = c.href ?? (c.slug ? `/services/${c.slug}` : "/services");

            return (
              <Link
                key={`${href}-${idx}`}
                href={href}
                className="
                  group relative block rounded-2xl overflow-hidden
                  shadow-soft hover:shadow-soft-lg transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-primary/40
                "
              >
                {/* Background — must not block clicks */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#3B5AA9] to-[#0B2E57]" />

                {/* Optional texture — must not block clicks */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)",
                    backgroundSize: "18px 18px",
                  }}
                />

                {/* Title only (no description) */}
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
