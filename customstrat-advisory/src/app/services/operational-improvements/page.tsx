import { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Operational Improvements – Cost and Customer Experience",
  description: "Process optimization and customer experience enhancement.",
};

const examples = [
  {
    projectSummary: "Cost Reduction for Global Financial Data Provider",
    problem: "Client needs to reduce costs that had expanded amidst higher growth period",
    approach:
      "Partnered with executive leadership team to drive operating model transformation and cost reduction. Workstreams included productivity enhancements, spans & layers, offshoring and sales effectiveness. Internal and external benchmarking informed target setting. Facilitated prioritization workshops and identified material cost reduction.",
  },
  {
    projectSummary: "Develop Customer Experience Strategy for Top 10 Global Bank",
    problem: "Bank was lacking clear customer target and compelling value proposition",
    approach:
      "Counseled Customer Experience, Marketing and Digital leadership to create a robust go-to-market strategy anchored in target customer needs. Provided competitive benchmarking framework and insights. Defined customer-based measures for success and value proposition components grounded in customer research.",
  },
  {
    projectSummary: "Improve Customer Experience for Consumer Division of Bank",
    problem: "Bank was seeking to improve omni-channel experience leveraging digital advancements",
    approach:
      "Led improvements in customer-facing processes and interactions in consumer lending and deposit businesses. Gathered customer feedback and mapped current vs. proposed journeys. Identified levers to increase digital usage and adoption for service and sales. Created customer feedback loops to front-line associates.",
  },
];

export default function OperationalImprovementsPage() {
  return (
    <>
      <Hero
        title="Operational Improvements – Cost and Customer Experience"
        image="/images/hero-home.jpg"
      />

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
