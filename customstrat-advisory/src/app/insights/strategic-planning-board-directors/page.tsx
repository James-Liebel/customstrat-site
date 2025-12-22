import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowLeft, CheckCircle2, Search, Rocket, Lightbulb, LayoutDashboard } from 'lucide-react';

export const metadata: Metadata = {
  title: "Strategic Planning Best Practices for Board Directors",
  description: "A guide for Board Directors to move beyond 'death by PowerPoint' and foster meaningful strategic dialogue that drives corporate value.",
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
              Strategic Planning Best Practices for Board Directors
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>September 2022</span>
              </div>
              <div className="h-4 w-px bg-slate-200 hidden sm:block" />
              <div className="font-medium text-slate-700">By Katie Liebel</div>
            </div>

            {/* Article body */}
            <div className="mt-10 space-y-10 text-base leading-relaxed text-slate-700">
              <p>
                The annual Board strategic plan review demands tremendous preparation, yet meetings often fail to achieve their intended purpose. Rather than a meaningful dialogue, these sessions frequently become a &quot;death march&quot; through 200+ pages of corporate plans or overly optimistic financial forecasts.
              </p>

              {/* Step 1 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-white">1</span>
                  Ensure the Right Foundation
                </h2>
                <p>
                  Before diving into the reams of paper, ensure the materials encapsulate market context, competitor positioning, and an unvarnished view of strengths and weaknesses informed by customer feedback. Corporate strategy must define why the &quot;whole is greater than the sum of the parts,&quot; while business unit strategies should elucidate &quot;where&quot; and &quot;how&quot; they compete.
                </p>
                <div className="bg-blue-50 border border-blue-100 p-5 rounded-xl flex gap-3 italic">
                  <Lightbulb className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-blue-900"><strong>Pro-Tip:</strong> Ask for a narrative memo to describe the strategy so the logic doesn&apos;t get lost in PowerPoint slides or spreadsheets.</p>
                </div>
              </div>

              

              {/* Step 2 */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-white">2</span>
                  The Three Essential Strategic Tests
                </h2>
                <p>As you listen to executive reviews, fundamentally test three specific areas:</p>

                {/* Test A */}
                <div className="border-l-4 border-slate-200 pl-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Search className="h-5 w-5 text-primary" /> A. Is the Strategy Defined?
                  </h3>
                  <p className="text-sm italic text-slate-600">
                    &quot;If the opposite of your strategy is &apos;stupid,&apos; then there is no strategy.&quot;
                  </p>
                  <p>
                    A real strategy involves choices. If the strategy is to &quot;grow profitably with a strong customer experience,&quot; there are no choices being made—no one chooses the opposite. A valid strategy makes a trade-off, such as choosing high-touch service for high-net-worth clients over low-touch digital for the mass market.
                  </p>
                </div>

                {/* Test B */}
                <div className="border-l-4 border-slate-200 pl-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" /> B. Is the Strategy &quot;Good&quot;?
                  </h3>
                  <p>
                    Test the ability to win. Is the company gaining market share? How do expected growth and margins compare to peer companies? Ensure the choices incorporate major market trends—both opportunities and threats.
                  </p>
                </div>

                {/* Test C */}
                <div className="border-l-4 border-slate-200 pl-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-primary" /> C. Can the Company Deliver?
                  </h3>
                  <p>
                    Assess resource allocation. Have sufficient funds been moved to core capabilities like talent or technology? Crucially, ask: <strong>&quot;What are we NOT doing?&quot;</strong> to ensure focus.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-white">3</span>
                  Continual Focus Throughout the Year
                </h2>
                <p>
                  Strategy shouldn&apos;t be an annual event. Look for an explicit linkage of the operating budget to strategic priorities. Thread strategic themes throughout every board meeting agenda.
                </p>
                <div className="bg-slate-900 text-white p-6 rounded-xl flex gap-4 items-center shadow-lg">
                  <LayoutDashboard className="h-8 w-8 text-primary shrink-0" />
                  <p className="text-sm">
                    <strong>The Board Dashboard:</strong> Request a one-page strategic dashboard for quarterly meetings, covering both leading measures and outputs of the strategy to ensure the organization stays on course.
                  </p>
                </div>
              </div>

              <hr className="my-8 border-slate-200" />

              <p className="text-center text-slate-500 italic max-w-2xl mx-auto">
                One of the Board&apos;s most critical tasks is to steward the development of a winning strategy. Lean in with targeted questions to ensure your strategy is granularly defined, poised for success, and properly resourced.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}