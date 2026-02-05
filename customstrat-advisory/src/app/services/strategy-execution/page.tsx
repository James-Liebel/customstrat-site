import { Metadata } from "next";
import Hero from "@/components/Hero";
import Atmosphere from "@/components/Atmosphere";
import Link from "next/link";

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
          image="/images/hero-home.jpg"
          themeKey="gilded-diamond"
        />

        {/* Back button – same styling as Articles */}
        <div className="cs-back-wrapper !mt-8">
          <Link href="/services" className="cs-back-link">
            ← Back to Case Studies
          </Link>
        </div>

        <section className="cs-section">
          <div className="container-custom">
            {/* White panel to separate content from background */}
            <div className="bg-white rounded-[18px] shadow-[0_18px_50px_rgba(0,0,0,0.15)] border border-black/10 p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-4 border-b border-gray-200">
                <div className="text-primary text-xl font-medium">
                  Project Summary
                </div>
                <div className="text-primary text-xl font-medium">
                  Problem to be Solved
                </div>
                <div className="text-primary text-xl font-medium">
                  Approach and Results
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {examples.map((ex, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8"
                  >
                    <div className="text-gray-900 font-semibold text-lg">
                      {ex.projectSummary}
                    </div>
                    <div className="text-gray-700 leading-relaxed">
                      {ex.problem}
                    </div>
                    <div className="text-gray-700 leading-relaxed">
                      {ex.approach}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
