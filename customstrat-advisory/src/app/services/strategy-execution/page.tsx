import { Metadata } from "next";
import Hero from "@/components/Hero";
import Atmosphere from "@/components/Atmosphere";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Strategy Execution & Transformation",
  description: "Accelerating change through the design of workstreams, governance, and roadmaps, supported by rigorous delivery oversight and deep knowledge of change management.",
};

const examples = [
  {
    projectSummary: "Strategy Execution for European Insurance Carrier",
    problem: "Client needed support to pivot the business to grow in higher margin areas",
    approach:
      "Supported executive team to launch transformation effort with workstreams touching underwriting, sales, human resources and non-personnel cost reductions. Guided change management and communication. Structured and kicked off PMO, workstream leaders and program governance. Built multi-year roadmap and transformation scorecard.",
  },
  {
    projectSummary: "Strategy Execution for Regional Bank",
    problem: "Launch comprehensive program to execute on business line transformation to modernize operations",
    approach:
      "Translated strategy into a tangible roadmap with workstream-level action plans. Launched program management office, workstream leaders and governance structure. Developed milestones and scorecards to track implementation success. Crafted internal messaging to launch execution effort.",
  },
  {
    projectSummary: "Transformation for Leading Insurance Company",
    problem: "Company needed to adapt their business system to become materially more efficient and modernize operations",
    approach:
      "Led a large project team across multiple workstreams to substantially lower costs and increase digital capabilities (location consolidation, technology consolidation, product portfolio streamlining, etc.). Included change management and communication planning for thousands of impacted employees.",
  },
];

export default function StrategyExecutionPage() {
  return (
    <main className="cs-shell--proof relative">
      <Atmosphere themeKey="gilded-diamond" />

      <div className="relative z-10">
        <Hero
          title="Strategy Execution & Transformation"
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
