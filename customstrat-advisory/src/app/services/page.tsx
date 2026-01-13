import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Atmosphere from "@/components/Atmosphere";
import TrackedServiceLink from "@/components/TrackedServiceLink";
import { siteContent } from "@/content/siteContent";
import { ArrowRight } from "lucide-react";


export const metadata: Metadata = {
  title: "Our Strategic Impact: Real-World Case Studies",
  description: "Strategy, transformation, and execution support for midsize institutions.",
};

export default function ServicesPage() {
  return (
    <main className="cs-shell--proof cs-services-page relative">
      {/* Atmosphere: gilded-diamond theme */}
      <Atmosphere themeKey="gilded-diamond" />

      {/* Hero stays as-is, but we visually stitch content below into it */}
      <Hero title={siteContent.services.hero.title} image="/images/hero-case-studies.jpg" themeKey="gilded-diamond" />

      {/* Continuous canvas starts immediately under the hero */}
      <section className="cs-services-stage !pt-20 !pb-16">
        <div className="container-custom">
          {/* Title Box */}
          <div className="cs-services-titlebox mb-16">
            <span className="cs-services-orb cs-services-orb--a" aria-hidden="true" />
            <span className="cs-services-orb cs-services-orb--b" aria-hidden="true" />
            <span className="cs-services-orb cs-services-orb--c" aria-hidden="true" />

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Explore our past client engagements
              </h1>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="cs-services-navband !mb-0">
            <div className="cs-services-navband__inner">
              <div className="cs-services-navgrid">
                <TrackedServiceLink
                  href="/services/strategy-development"
                  serviceName="Strategy Development"
                  className="cs-card cs-card--hover group"
                  ariaLabel="View Strategy Development services"
                >
                  <div className="cs-card-inner flex flex-col h-full">
                    <div className="flex-1">
                      <div className="mb-4">
                        <div className="h-1 w-12 bg-gradient-to-r from-gold to-gold/40 rounded-full mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-3">Strategy Development</h3>
                      </div>
                      <p className="text-white/70 text-base leading-relaxed">
                        Defining strategies that clarify where to compete and how to strengthen advantage.
                      </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/10 w-full flex justify-between items-center text-gold font-bold text-sm">
                      <span className="group-hover:text-gold-light transition-colors">See examples</span>
                      <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                  <div className="cs-cardGlow" aria-hidden="true" />
                </TrackedServiceLink>

                <TrackedServiceLink
                  href="/services/strategy-execution"
                  serviceName="Strategy Execution & Transformation"
                  className="cs-card cs-card--hover group"
                  ariaLabel="View Strategy Execution & Transformation services"
                >
                  <div className="cs-card-inner flex flex-col h-full">
                    <div className="flex-1">
                      <div className="mb-4">
                        <div className="h-1 w-12 bg-gradient-to-r from-gold to-gold/40 rounded-full mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-3">Strategy Execution &amp; Transformation</h3>
                      </div>
                      <p className="text-white/70 text-base leading-relaxed">
                        Accelerating change with focused workstreams, governance, and disciplined execution.
                      </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/10 w-full flex justify-between items-center text-gold font-bold text-sm">
                      <span className="group-hover:text-gold-light transition-colors">See examples</span>
                      <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                  <div className="cs-cardGlow" aria-hidden="true" />
                </TrackedServiceLink>

                <TrackedServiceLink
                  href="/services/operational-improvements"
                  serviceName="Customer Experience & Performance Improvement"
                  className="cs-card cs-card--hover group"
                  ariaLabel="View Customer Experience & Performance Improvement services"
                >
                  <div className="cs-card-inner flex flex-col h-full">
                    <div className="flex-1">
                      <div className="mb-4">
                        <div className="h-1 w-12 bg-gradient-to-r from-gold to-gold/40 rounded-full mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-3">Customer Experience &amp; Performance Improvement</h3>
                      </div>
                      <p className="text-white/70 text-base leading-relaxed">
                        Improving profitability and client impact through analytics that surface inefficiencies and VOC insights.
                      </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/10 w-full flex justify-between items-center text-gold font-bold text-sm">
                      <span className="group-hover:text-gold-light transition-colors">See examples</span>
                      <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                  <div className="cs-cardGlow" aria-hidden="true" />
                </TrackedServiceLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
