import { Metadata } from "next";
import Hero from "@/components/Hero";
import Atmosphere from "@/components/Atmosphere";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Experience & Performance Improvement",
  description: "Driving bottom-line performance and client impact by leveraging data-driven insights to prioritize operational improvements and optimize end-to-end customer journeys.",
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
    <main className="cs-shell--proof relative">
      <Atmosphere themeKey="gilded-diamond" />

      <div className="relative z-10">
        <Hero
          title="Customer Experience & Performance Improvement"
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
