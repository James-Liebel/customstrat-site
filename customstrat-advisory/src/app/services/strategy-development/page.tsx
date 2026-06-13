import { Metadata } from "next";
import Hero from "@/components/Hero";
import Atmosphere from "@/components/Atmosphere";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Strategy Development",
  description: "Defining corporate and business unit strategies that identify where to compete and how to sharpen competitive advantage.",
};

const examples = [
  {
    projectSummary: "Growth Strategy for Regional Bank",
    problem:
      "Goal was to identify long-term organic growth options, taking advantage of long-term trends",
    approach:
      "Worked with senior executive team, identified core enterprise strengths and weaknesses. Mapped long-term macro trends inclusive of social, economic, geo-political and competitive factors. Drove top-down assessment of potential opportunities winnowing list from 20 to 5 using a customized strategic filter. Developed business cases for top 5 new business ideas and ultimately launched two businesses with highest potential.",
  },
  {
    projectSummary: "Corporate Strategy for Community Bank",
    problem:
      "Client was struggling with growth and looking to refine their strategy to identify the most promising profitable growth levers",
    approach:
      "Supported by a small team, led a 5-phase process: setting context, assessing current state landscape, evaluating options, finalizing recommendations and operationalizing the plan. Partnered with CEO and senior executive team to identify optimal corporate portfolio choices and largest opportunities for refocusing business unit strategies. Top opportunities equated to meaningful bottom-line improvement. Established execution approach and scorecards to track milestones.",
  },
  {
    projectSummary: "Growth Strategy for Wealth Management Firm",
    problem:
      "Client was looking to evaluate expansion of current offerings, both to meet customer needs and better attract top-level talent",
    approach:
      "Partnered with client executives; assessed internal capabilities, advisor demand, and external competitor offerings to determine priority product areas. Leveraged interviews, a large-scale advisor survey and comparative analytics. Scoped partnership options using a tailored assessment screen. Built option costs and developed an implementation roadmap for the Board.",
  },
  {
    projectSummary: "Distribution Strategy for Insurance Carrier",
    problem: "Declining profitability in primary distribution channel",
    approach:
      "Completed a comprehensive review and recommendations for target end-customers, brokers and product portfolio. Segmented agents and conducted interviews to determine needs. Redesigned operating model and organizational infrastructure to support the new targeted strategic focus, including restructuring of sales, underwriting and product teams to improve operating efficiency and competitive position.",
  },
];

export default function StrategyDevelopmentPage() {
  return (
    <main className="cs-shell--proof relative">
      <Atmosphere themeKey="gilded-diamond" />

      <div className="relative z-10">
        <Hero
          title="Strategy Development"
          themeKey="gilded-diamond"
        />

        {/* Back button – same styling as Articles */}
        <div className="cs-back-wrapper mt-8">
          <Link href="/services" className="cs-back-link">
            <ArrowLeft size={16} aria-hidden="true" /> Back to Case Studies
          </Link>
        </div>

        <section className="cs-section">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto space-y-6">
              {examples.map((ex, i) => (
                <article key={i} className="cs-card cs-card--hover">
                  <div className="cs-card-inner p-8 md:p-10">
                    <div className="flex items-start gap-5">
                      <span
                        className="font-display text-3xl md:text-4xl font-bold text-gold/70 leading-none select-none pt-1"
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] uppercase tracking-wider font-semibold text-gold-light/90 mb-1.5">
                          Project Summary
                        </p>
                        <h2 className="text-xl md:text-2xl font-bold text-white leading-snug">
                          {ex.projectSummary}
                        </h2>
                        <div className="mt-6 grid md:grid-cols-2 gap-6 md:gap-10">
                          <div>
                            <p className="text-[11px] uppercase tracking-wider font-semibold text-gold-light/90 mb-2">
                              Problem to be Solved
                            </p>
                            <p className="text-white/85 leading-relaxed text-[0.95rem]">
                              {ex.problem}
                            </p>
                          </div>
                          <div>
                            <p className="text-[11px] uppercase tracking-wider font-semibold text-gold-light/90 mb-2">
                              Approach and Results
                            </p>
                            <p className="text-white/85 leading-relaxed text-[0.95rem]">
                              {ex.approach}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
