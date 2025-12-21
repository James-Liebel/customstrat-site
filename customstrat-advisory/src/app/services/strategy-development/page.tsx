import { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Strategy Development",
  description: "Comprehensive strategic planning and business strategy development.",
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
    <>
      <Hero title="Strategy Development" image="/images/hero-home.jpg" />

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
