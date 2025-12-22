// NEW PATH: src/app/insights/strategic-planning-tune-up/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: "A Strategic Planning Tune-Up for Uncertain Times",
  description: "Adjusting your strategic planning approach for global uncertainty through scenario planning and agile execution.",
};

export default function InsightArticlePage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200/70 bg-white">
        <div className="container py-10 md:py-12">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Articles
          </Link>

          <div className="mt-6 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
              A Strategic Planning Tune-Up for Uncertain Times
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 2022</span>
              </div>
              <div className="h-4 w-px bg-slate-200 hidden sm:block" />
              <div className="font-medium text-slate-700">By Katie Liebel and TV Kumaresh</div>
            </div>

            {/* Article body */}
            <div className="mt-10 space-y-6 text-base leading-relaxed text-slate-700">
              <p>
                These times of global uncertainty require an adjustment to the strategic planning approach. Strategy is about making choices and building a sustainable competitive advantage to win in the marketplace. 
              </p>
              
              <p>
                While the building blocks of strategy remain the same, the current times call for revisiting strategic assumptions at a regular cadence, assessing capabilities and aligning priorities to changing times, as well as driving them collaboratively.
              </p>

              <h2 className="pt-4 text-2xl font-semibold tracking-tight text-slate-900">
                1. External environment review: Explicitly revisit your assumptions
              </h2>
              <p>
                An external environment analysis evaluates the macro-environment, demand-supply drivers, consumer behavior, technology/disruption, competition, and regulation. In an assumption-based strategic planning world, study these elements closely and monitor them to stay on course or pivot as needed.
              </p>

              <h2 className="pt-4 text-2xl font-semibold tracking-tight text-slate-900">
                2. Internal strategic assessment: Assess capabilities; align priorities
              </h2>
              <p>
                Ensure the company thoroughly understands its strengths and weaknesses unique to volatile times. Documenting lessons learned from past experiences (like 2008 or Covid) will be a great starting point to address current issues.
              </p>

              <h2 className="pt-4 text-2xl font-semibold tracking-tight text-slate-900">
                3. Set the strategy: Be nimble and drive explicit choices collaboratively
              </h2>
              <p>
                Be bold and force more choices: Resources are always limited and particularly constrained in the current environment. Decide which initiatives will not be touched and which can be delayed or stopped altogether.
              </p>

              <div className="bg-slate-50 border-l-4 border-slate-900 p-6 my-8 italic">
                Strategy used to be communicated once a year. With pivots occurring due to changing industry dynamics, communicate more regularly than usual to ensure every individual understands the change.
              </div>

              <hr className="my-8 border-slate-200" />
              
              <p className="font-medium text-slate-900">
                Revisit assumptions regularly, align priorities to changing times and drive explicit choices collaboratively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}