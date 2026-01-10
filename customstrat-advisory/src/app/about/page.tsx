import { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Atmosphere from "@/components/Atmosphere";
import { siteContent } from "@/content/siteContent";
import { ExternalLink } from "lucide-react";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about CustomStrat Advisory leadership and approach to client engagement.",
};

export default function AboutPage() {
  const leader = siteContent.about.leadership.members[0];

  /**
   * Mapping custom wording to engagement methods
   */
  const getEngagementDetails = (method: string) => {
    const m = method.toLowerCase();

    if (m.includes("speaking")) {
      return {
        description: "High-impact presentations bridging market shifts with strategy to prepare leadership for industry evolution.",
        pills: ["Market Insights", "Strategic Foresight", "Leadership Prep"]
      };
    }
    if (m.includes("ceo") || m.includes("advisory")) {
      return {
        description: "Strategic thought partnership applying structured thinking to formulate and stress-test growth plans.",
        pills: ["Decision Confidence", "Strategic Clarity", "Executive Alignment"]
      };
    }
    if (m.includes("workshop")) {
      return {
        description: "Facilitated intensive sessions using structured frameworks to align leadership teams and mobilize action.",
        pills: ["Guided Consensus", "Rapid Synthesis", "Mobilization Clarity"]
      };
    }
    if (m.includes("teams") || m.includes("consultants")) {
      return {
        description: "Bespoke teams of elite consultants combining top-tier strategy with deep financial services operating experience.",
        pills: ["Strategic Rigor", "Operational Depth", "Expert Execution"]
      };
    }

    // Fallback
    return {
      description: "Direct collaboration focused on clear steps, tight feedback loops, and measurable strategic results.",
      pills: ["Fast Alignment", "Clear Ownership", "Proven Results"]
    };
  };

  return (
    <main className="cs-shell--editorial relative">
      {/* Atmosphere: aura-strata theme */}
      <Atmosphere themeKey="aura-strata" />
      <div className="relative z-10">
        <Hero title={siteContent.about.hero.title} image="/images/hero-about.jpg" themeKey="aura-strata" />

        {/* Leadership Section */}
        <section className="cs-section relative">


          <div className="container-custom">
            <div className="mx-auto max-w-6xl">
              <div className="cs-section-head mb-12">
                <h2 className="cs-section-title text-white">{siteContent.about.leadership.title}</h2>
              </div>

              <AboutClient members={siteContent.about.leadership.members} />
            </div>
          </div>
        </section>

        {/* Services Section */}
        < section id="services" className="cs-section" >
          <div className="container-custom">
            <div className="mx-auto max-w-6xl">
              <div className="cs-section-head">
                <h2 className="cs-section-title text-white">Services</h2>
              </div>

              <div className="mt-10 cs-engage">
                <div className="cs-engage-line" aria-hidden="true" />

                <div className="grid md:grid-cols-2 gap-6">
                  {siteContent.about.engagement.methods.map((method, index) => {
                    const { description, pills } = getEngagementDetails(method);
                    return (
                      <div key={index} className="cs-engage-card cs-card cs-card--hover">
                        <div className="cs-card-inner">
                          <div className="flex items-start gap-4">
                            <div className="cs-step">
                              <div className="cs-step-badge">{index + 1}</div>
                            </div>

                            <div className="min-w-0">
                              <h3 className="text-xl font-semibold text-white">{method}</h3>
                              <p className="mt-2 text-sm text-white/70">
                                {description}
                              </p>

                              <div className="mt-4 flex flex-wrap gap-2">
                                {pills.map((pill, pIndex) => (
                                  <span key={pIndex} className="cs-pill">
                                    {pill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="cs-cardGlow" aria-hidden="true" />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-10 text-sm text-white/60">
                Want to keep exploring?{" "}
                <a
                  href="/insights"
                  className="text-white/80 hover:text-white underline underline-offset-4 transition"
                >
                  Browse Insights
                </a>
              </div>
            </div>
          </div>
        </section >
      </div >
    </main >
  );
}