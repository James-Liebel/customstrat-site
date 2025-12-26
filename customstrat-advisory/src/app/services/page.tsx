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
        <section className="cs-services-stage">
          <div className="container-custom">
            {/* Title Box */}
            <div className="cs-services-titlebox">
              <span className="cs-services-orb cs-services-orb--a" aria-hidden="true" />
              <span className="cs-services-orb cs-services-orb--b" aria-hidden="true" />
              <span className="cs-services-orb cs-services-orb--c" aria-hidden="true" />

              <div className="relative z-10 text-center">
                <div className="cs-services-kicker">Focused. Practical. Board-ready.</div>

                <h1 className="cs-services-title">
                  Tailored Solutions for <span>Midsize Banking &amp; Insurance</span>
                </h1>

                <p className="cs-services-subtitle mx-auto">
                  Strategy, transformation, and execution support built for institutions that need clarity and momentum.
                </p>
              </div>
            </div>

            {/* Buttons band (separate from title) */}
            <div className="cs-services-navband">
              <div className="cs-services-navband__inner">
                <div className="cs-services-navband__label">Explore services</div>
                <div className="cs-services-navgrid">
                  <Link
                    href="/services/strategy-development"
                    className="cs-service-btn"
                    aria-label="View Strategy Development services"
                  >
                    <span className="cs-service-btn__text">Strategy</span>
                    <ArrowRight className="cs-service-btn__icon" aria-hidden="true" />
                  </Link>

                  <Link
                    href="/services/strategy-execution"
                    className="cs-service-btn"
                    aria-label="View Strategy Execution services"
                  >
                    <span className="cs-service-btn__text">Transformation</span>
                    <ArrowRight className="cs-service-btn__icon" aria-hidden="true" />
                  </Link>

                  <Link
                    href="/services/operational-improvements"
                    className="cs-service-btn"
                    aria-label="View Operational Improvements services"
                  >
                    <span className="cs-service-btn__text">Execution Support</span>
                    <ArrowRight className="cs-service-btn__icon" aria-hidden="true" />
                  </Link>
                  </div>

                
              </div>
            </div>

            {/* Our Approach (NOT buttons) */}
            <div className="cs-services-approach-shell section-padding">
              <div className="max-w-6xl mx-auto relative">
                <span className="cs-approach-shape cs-approach-shape--a" aria-hidden="true" />
                <span className="cs-approach-shape cs-approach-shape--b" aria-hidden="true" />
                <span className="cs-approach-shape cs-approach-shape--c" aria-hidden="true" />

                <div className="text-center relative z-10">
                  <div className="cs-approach-kicker">Our Approach</div>
                  <h2 className="cs-approach-title">Clarity first. Momentum always.</h2>
                  <div className="cs-approach-underline" aria-hidden="true" />

                  <p className="mt-5 text-white/80 text-lg max-w-3xl mx-auto">
                    We focus on what actually moves the needle—clear choices, disciplined execution, and measurable results.
                  </p>
                </div>

                <div className="mt-14 grid md:grid-cols-3 gap-6 relative z-10">
                  <div id="strategy" className="cs-approach-card cs-approach-card--static">
                    <div className="cs-approach-card-top">01</div>
                    <h3 className="cs-approach-card-title">Strategy</h3>
                    <p className="cs-approach-card-text">
                      Define where to play and how to win, grounded in economics, customer realities, and execution constraints.
                    </p>
                  </div>

                  <div id="transformation" className="cs-approach-card cs-approach-card--static">
                    <div className="cs-approach-card-top">02</div>
                    <h3 className="cs-approach-card-title">Transformation</h3>
                    <p className="cs-approach-card-text">
                      Modernize operating models, productivity, and capabilities with changes that stick.
                    </p>
                  </div>

                  <div id="execution" className="cs-approach-card cs-approach-card--static">
                    <div className="cs-approach-card-top">03</div>
                    <h3 className="cs-approach-card-title">Execution Support</h3>
                    <p className="cs-approach-card-text">
                      Translate strategy into roadmaps, governance, and hands-on delivery support that drives outcomes.
                    </p>
                  </div>
                </div>

                <div className="cs-approach-marquee" aria-hidden="true">
                  <div className="cs-approach-marquee__track">
                    <span>Strategy</span>
                    <span>Transformation</span>
                    <span>Execution</span>
                    <span>Operating Model</span>
                    <span>Growth</span>
                    <span>Efficiency</span>
                    <span>Strategy</span>
                    <span>Transformation</span>
                    <span>Execution</span>
                    <span>Operating Model</span>
                    <span>Growth</span>
                    <span>Efficiency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* No extra CTA section here — only your global Footer renders below */}
    </main>
  );
}
