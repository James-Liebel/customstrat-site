import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Atmosphere from "@/components/Atmosphere";
import { siteContent } from "@/content/siteContent";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Case Studies",
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
      <section className="cs-services-stage !pt-18">
        <div className="container-custom">
          {/* Title Box */}
          <div className="cs-services-titlebox">
            <span className="cs-services-orb cs-services-orb--a" aria-hidden="true" />
            <span className="cs-services-orb cs-services-orb--b" aria-hidden="true" />
            <span className="cs-services-orb cs-services-orb--c" aria-hidden="true" />

            <div className="relative z-10 text-center">

              <h1 className="cs-services-title">
                Tailored Strategic Solutions for <span>Midsize Banks &amp; Insurance Companies</span>
              </h1>

            </div>
          </div>

          {/* Buttons band (separate from title) */}
          <div className="cs-services-navband !mb-8">
            <div className="cs-services-navband__inner">
              <div className="cs-services-navband__label">Explore Past Client Engagements</div>
              <div className="cs-services-navgrid">
                <Link
                  href="/services/strategy-development"
                  className="cs-service-btn"
                  aria-label="View Strategy Development services"
                >
                  <div className="cs-service-btn__content">
                    <span className="cs-service-btn__title">Strategy Development</span>
                    <span className="cs-service-btn__subtitle">
                      Defining corporate and business unit strategies that identify where to compete and how to sharpen competitive advantage.
                    </span>
                  </div>
                  <ArrowRight className="cs-service-btn__icon" aria-hidden="true" />
                </Link>

                <Link
                  href="/services/strategy-execution"
                  className="cs-service-btn"
                  aria-label="View Strategy Execution & Transformation services"
                >
                  <div className="cs-service-btn__content">
                    <span className="cs-service-btn__title">Strategy Execution &amp; Transformation</span>
                    <span className="cs-service-btn__subtitle">
                      Accelerating change through the design of workstreams, governance, and roadmaps, supported by rigorous delivery oversight and deep knowledge of change management.
                    </span>
                  </div>
                  <ArrowRight className="cs-service-btn__icon" aria-hidden="true" />
                </Link>

                <Link
                  href="/services/operational-improvements"
                  className="cs-service-btn"
                  aria-label="View Customer Experience & Performance Improvement services"
                >
                  <div className="cs-service-btn__content">
                    <span className="cs-service-btn__title">Customer Experience &amp; Performance Improvement</span>
                    <span className="cs-service-btn__subtitle">
                      Driving bottom-line performance and client impact by leveraging data-driven insights to prioritize operational improvements and optimize end-to-end customer journeys.
                    </span>
                  </div>
                  <ArrowRight className="cs-service-btn__icon" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
