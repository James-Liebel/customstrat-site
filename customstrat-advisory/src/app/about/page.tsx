import { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Atmosphere from "@/components/Atmosphere";
import { siteContent } from "@/content/siteContent";
import { ExternalLink } from "lucide-react";

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
        description: "Compelling insights that spark organizational change and shift perspectives.",
        pills: ["Provocative Insights", "Actionable Frameworks", "Audience Mobilization"]
      };
    }
    if (m.includes("ceo") || m.includes("advisory")) {
      return {
        description: "A trusted thought partner for navigating high-stakes decisions with clarity and absolute discretion.",
        pills: ["Strategic Neutrality", "Decision Confidence", "Unfiltered Candor"]
      };
    }
    if (m.includes("workshop")) {
      return {
        description: "High-energy, facilitated intensives designed to break through silos and solve specific bottlenecks.",
        pills: ["Rapid Problem-Solving", "Cross-Functional Buy-in", "Immediate Implementation"]
      };
    }
    if (m.includes("teams") || m.includes("consultants")) {
      return {
        description: "On-demand squads of elite independent consultants deployed to execute your most complex transformations.",
        pills: ["Elite Expertise", "Reduced Overhead", "Outcome-Linked Delivery"]
      };
    }
    
    // Fallback
    return {
      description: "Clear steps, tight feedback loops, and steady progress—no drama, just results.",
      pills: ["Fast alignment", "Clear owners", "Measurable progress"]
    };
  };

  return (
    <main className="cs-shell--editorial relative">
      {/* Atmosphere: aura-strata theme */}
      <Atmosphere themeKey="aura-strata" />
      <div className="relative z-10">
        <Hero title={siteContent.about.hero.title} image="/images/hero-about.jpg" themeKey="aura-strata" />

        {/* Leadership Section */}
        <section className="cs-section">
          <div className="container-custom">
            <div className="mx-auto max-w-6xl">
              <div className="cs-section-head">
                <h2 className="cs-section-title text-white">{siteContent.about.leadership.title}</h2>
              </div>

              <div className="mt-16 grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
                <div className="relative mx-auto md:mx-0 w-full max-w-md">
                  <div className="cs-float-shape cs-float-shape--a" aria-hidden="true" />
                  <div className="cs-float-shape cs-float-shape--b" aria-hidden="true" />

                  <div className="cs-about-photo group">
                    <div className="cs-about-photoGlow" aria-hidden="true" />
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[22px]">
                      <Image
                        src="/images/fullshot.png"
                        alt={leader.name}
                        fill
                        className="object-cover cs-about-photoImg"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <div className="cs-card cs-card--soft">
                  <div className="cs-card-inner">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-3xl lg:text-4xl font-semibold text-white">{leader.name}</h3>
                      <p className="text-lg text-white/75">{leader.title}</p>
                      <p className="text-base font-semibold text-white/90">{leader.company}</p>
                    </div>

                    <div className="mt-6 space-y-4 text-white/80 leading-relaxed">
                      <p className="text-base font-medium text-white">{leader.bio}</p>
                      {leader.extended.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="mt-7">
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cs-link-inline"
                      >
                        <span>View LinkedIn Profile</span>
                        <ExternalLink size={18} className="cs-link-inlineIcon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Engage Section */}
        <section id="how-we-engage" className="cs-section">
          <div className="container-custom">
            <div className="mx-auto max-w-6xl">
              <div className="cs-section-head">
                <h2 className="cs-section-title text-white">{siteContent.about.engagement.title}</h2>
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
        </section>
      </div>
    </main>
  );
}