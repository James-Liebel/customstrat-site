import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Atmosphere from "@/components/Atmosphere";
import TrackedServiceLink from "@/components/TrackedServiceLink";
import { siteContent } from "@/content/siteContent";
import { ArrowRight } from "lucide-react";


export const metadata: Metadata = {
  title: "Our Strategic Impact: Real-World Case Studies",
  description: "Strategy, transformation, and execution support for midsize institutions.",
};

const caseStudies = [
  {
    href: "/services/strategy-development",
    serviceName: "Strategy Development",
    title: "Strategy Development",
    description:
      "Defining strategies that clarify where to compete and how to strengthen advantage.",
    ariaLabel: "View Strategy Development services",
  },
  {
    href: "/services/strategy-execution",
    serviceName: "Strategy Execution & Transformation",
    title: "Strategy Execution & Transformation",
    description:
      "Accelerating change with focused workstreams, governance, and disciplined execution.",
    ariaLabel: "View Strategy Execution & Transformation services",
  },
  {
    href: "/services/operational-improvements",
    serviceName: "Customer Experience & Performance Improvement",
    title: "Customer Experience & Performance Improvement",
    description:
      "Improving profitability and client impact through analytics that surface inefficiencies and VOC insights.",
    ariaLabel: "View Customer Experience & Performance Improvement services",
  },
];

export default function ServicesPage() {
  return (
    <main className="cs-shell--proof cs-services-page relative">
      {/* Atmosphere: gilded-diamond theme */}
      <Atmosphere themeKey="gilded-diamond" />

      {/* Hero stays as-is, but we visually stitch content below into it */}
      <Hero title={siteContent.services.hero.title} themeKey="gilded-diamond" />

      {/* Continuous canvas starts immediately under the hero */}
      <section className="cs-services-stage pt-20 pb-16">
        <div className="container-custom">
          {/* Title Box */}
          <div className="cs-services-titlebox mb-16">
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Explore our past client engagements
              </h2>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="cs-services-navband">
            <div className="cs-services-navband__inner">
              <div className="cs-services-navgrid">
                {caseStudies.map((card, i) => {
                  return (
                    <TrackedServiceLink
                      key={card.href}
                      href={card.href}
                      serviceName={card.serviceName}
                      className="cs-card cs-card--hover group"
                      ariaLabel={card.ariaLabel}
                    >
                      <div className="cs-card-inner flex flex-col h-full">
                        {/* Number + title on one row; reserved height keeps the
                            descriptions aligned across cards */}
                        <div className="flex items-baseline gap-3 mb-4 min-h-[3.75rem]">
                          <span
                            className="font-display text-4xl font-bold text-white/25 leading-none select-none shrink-0"
                            aria-hidden="true"
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-[1.35rem] leading-snug font-bold text-white">
                            {card.title}
                          </h3>
                        </div>
                        <p className="text-white/75 text-lg leading-relaxed">
                          {card.description}
                        </p>

                        {/* Footer pinned to the bottom of every card */}
                        <div className="mt-auto pt-6 border-t border-white/10 w-full flex justify-between items-center text-gold font-bold text-sm">
                          <span className="group-hover:text-gold-light transition-colors">
                            See examples
                          </span>
                          <ArrowRight
                            size={20}
                            className="transition-transform group-hover:translate-x-2"
                          />
                        </div>
                      </div>
                    </TrackedServiceLink>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA band — anchors the canvas below the case study cards */}
          <div className="mt-20 max-w-3xl mx-auto text-center">
            <div className="cs-card">
              <div className="cs-card-inner py-10 sm:py-12 px-6 sm:px-12">
                <div className="h-1 w-12 bg-gradient-to-r from-gold to-gold/40 rounded-full mx-auto mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Ready to discuss a project?
                </h2>
                <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
                  Tell us about your strategic priorities and we&apos;ll share how
                  we&apos;ve helped similar institutions move forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                    Get in touch
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/insights"
                    className="text-white/80 hover:text-white font-semibold underline underline-offset-4 decoration-white/30 transition-colors"
                  >
                    Read our latest articles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
