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
      {/* Shell gives us a continuous background that blends into footer */}
      <div className="cs-services-shell relative z-10">
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
                  Tailored Solutions for <span>Midsize Banks &amp; Insurance Companies</span>
                </h1>

                <p className="cs-services-subtitle mx-auto">
                  Explore Past Client Engagements
                </p>
              </div>
            </div>

            {/* Buttons band (separate from title) */}
            <div className="cs-services-navband !mb-24">
              <div className="cs-services-navband__inner">
                <div className="cs-services-navband__label">Explore services</div>
                <div className="cs-services-navgrid">
                  <Link
                    href="/services/strategy-development"
                    className="cs-service-btn"
                    aria-label="View Strategy Development services"
                  >
                    <div className="cs-service-btn__content">
                      <span className="cs-service-btn__title">Strategy</span>
                      <span className="cs-service-btn__subtitle">
                        Define where to play and how to win, grounded in economics, customer realities, and execution constraints.
                      </span>
                    </div>
                    <ArrowRight className="cs-service-btn__icon" aria-hidden="true" />
                  </Link>

                  <Link
                    href="/services/strategy-execution"
                    className="cs-service-btn"
                    aria-label="View Strategy Execution services"
                  >
                    <div className="cs-service-btn__content">
                      <span className="cs-service-btn__title">Transformation</span>
                      <span className="cs-service-btn__subtitle">
                        Modernize operating models, productivity, and capabilities with changes that stick.
                      </span>
                    </div>
                    <ArrowRight className="cs-service-btn__icon" aria-hidden="true" />
                  </Link>

                  <Link
                    href="/services/operational-improvements"
                    className="cs-service-btn"
                    aria-label="View Operational Improvements services"
                  >
                    <div className="cs-service-btn__content">
                      <span className="cs-service-btn__title">Execution Support</span>
                      <span className="cs-service-btn__subtitle">
                        Translate strategy into roadmaps, governance, and hands-on delivery support that drives outcomes.
                      </span>
                    </div>
                    <ArrowRight className="cs-service-btn__icon" aria-hidden="true" />
                  </Link>
                  </div>

                
              </div>
            </div>

            {/* Our Approach (NOT buttons) */}
          </div>
        </section>
      </div>

      {/* No extra CTA section here — only your global Footer renders below */}
    </main>
  );
}
