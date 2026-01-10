import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Atmosphere from "@/components/Atmosphere";
import { siteContent } from "@/content/siteContent";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


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
      <section className="cs-services-stage !pt-18 !pb-12">
        <div className="container-custom">
          {/* Title Box */}
          <div className="cs-services-titlebox">
            <span className="cs-services-orb cs-services-orb--a" aria-hidden="true" />
            <span className="cs-services-orb cs-services-orb--b" aria-hidden="true" />
            <span className="cs-services-orb cs-services-orb--c" aria-hidden="true" />

            <div className="relative z-10 text-center">

              <h1 className="cs-services-title !text-3xl md:!text-4xl max-w-4xl mx-auto leading-tight">
                <span>Explore our past client engagements</span>
              </h1>

            </div>
          </div>

          {/* Buttons band (separate from title) */}
          <div className="cs-services-navband !mb-8">
            <div className="cs-services-navband__inner">
              <div className="cs-services-navgrid">
                <Link
                  href="/services/strategy-development"
                  className="cs-service-btn group"
                  aria-label="View Strategy Development services"
                >
                  <div className="cs-service-btn__content">
                    <span className="cs-service-btn__title text-white">Strategy Development</span>
                    <p className="mt-3 text-white/70 text-sm leading-relaxed font-medium">
                      Defining strategies that clarify where to compete and how to strengthen advantage.
                    </p>
                  </div>
                  <div className="mt-auto pt-4 w-full flex justify-between items-center text-white/90 font-bold text-[14px]">
                    <span className="underline underline-offset-8 decoration-[2.5px] decoration-white/60 group-hover:decoration-white transition-all">See examples</span>
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                  </div>
                </Link>

                <Link
                  href="/services/strategy-execution"
                  className="cs-service-btn group"
                  aria-label="View Strategy Execution & Transformation services"
                >
                  <div className="cs-service-btn__content">
                    <span className="cs-service-btn__title text-white">Strategy Execution &amp; Transformation</span>
                    <p className="mt-3 text-white/70 text-sm leading-relaxed font-medium">
                      Accelerating change with focused workstreams, governance, and disciplined execution.
                    </p>
                  </div>
                  <div className="mt-auto pt-4 w-full flex justify-between items-center text-white/90 font-bold text-[14px]">
                    <span className="underline underline-offset-8 decoration-[2.5px] decoration-white/60 group-hover:decoration-white transition-all">See examples</span>
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                  </div>
                </Link>

                <Link
                  href="/services/operational-improvements"
                  className="cs-service-btn group"
                  aria-label="View Customer Experience & Performance Improvement services"
                >
                  <div className="cs-service-btn__content">
                    <span className="cs-service-btn__title text-white">Customer Experience &amp; Performance Improvement</span>
                    <p className="mt-3 text-white/70 text-sm leading-relaxed font-medium">
                      Improving profitability and client impact through analytics that surface inefficiencies and VOC insights.
                    </p>
                  </div>
                  <div className="mt-auto pt-4 w-full flex justify-between items-center text-white/90 font-bold text-[14px]">
                    <span className="underline underline-offset-8 decoration-[2.5px] decoration-white/60 group-hover:decoration-white transition-all">See examples</span>
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
