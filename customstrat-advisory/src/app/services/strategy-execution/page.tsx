import { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Strategy Execution & Transformation",
  description: "Implementation and organizational transformation initiatives.",
};

const examples = [
  {
    projectSummary: "Strategy Execution for European Insurance Carrier",
    problem: "Client needed support to pivot the business to grow in higher margin areas",
    approach:
      "Supported executive team to launch transformation effort with workstreams touching underwriting, sales, human resources and non-personnel cost reductions. Guided change management and communication. Structured and kicked off PMO, workstream leaders and program governance. Built multi-year roadmap and transformation scorecard.",
  },
  {
    projectSummary: "Transformation for Leading Insurance Company",
    problem: "Company needed to adapt their entire business system to compete in a more digital world",
    approach:
      "Led a large project team across multiple workstreams to substantially lower costs and increase digital capabilities (location consolidation, technology consolidation, product portfolio streamlining, etc.). Included change management and communication planning for thousands of impacted employees.",
  },
  {
    projectSummary: "Strategy Execution for Regional Bank",
    problem: "Launch comprehensive program to execute on business line transformation to modernize operations",
    approach:
      "Translated strategy into a tangible roadmap with workstream-level action plans. Launched program management office, workstream leaders and governance structure. Developed milestones and scorecards to track implementation success. Crafted internal messaging to launch execution effort.",
  },
];

export default function StrategyExecutionPage() {
  return (
    <>
      <Hero title="Strategy Execution & Transformation" image="/images/hero-home.jpg" />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-4 border-b border-gray-200">
            <div className="text-primary text-xl font-medium">Project Summary</div>
            <div className="text-primary text-xl font-medium">Problem to be Solved</div>
            <div className="text-primary text-xl font-medium">Approach and Results</div>
          </div>

          <div className="divide-y divide-gray-200">
            {examples.map((ex, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
                <div className="text-gray-900 font-semibold text-lg">{ex.projectSummary}</div>
                <div className="text-gray-700 leading-relaxed">{ex.problem}</div>
                <div className="text-gray-700 leading-relaxed">{ex.approach}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
