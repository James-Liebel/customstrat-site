import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowLeft, Anchor, CircleDollarSign, BarChartHorizontalBig, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: "Linking Customer Experience to Strategy and Value",
  description: "A practical framework for connecting CX investments to measurable business outcomes and demonstrating ROI.",
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
              Linking Customer Experience to Strategy and Value
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>November 2022</span>
              </div>
              <div className="h-4 w-px bg-slate-200 hidden sm:block" />
              <div className="font-medium text-slate-700">By Katie Liebel and TV Kumaresh</div>
            </div>

            {/* Article body */}
            <div className="mt-10 space-y-8 text-base leading-relaxed text-slate-700">
              <p>
                Customer experience (CX) is a top priority for many companies today. However, the confluence of topics like AI, user-centered design, and digital transformation drives immense complexity. It is essential for companies to articulate clearly what a superior customer experience is worth and how it will generate value (growth, profitability).
              </p>

              <p className="text-lg font-medium text-slate-900 border-l-4 border-primary pl-4">
                We believe it is imperative to initiate CX transformations firmly grounded in the business strategy, prioritize changes based on value creation, and sustain the engine by linking outcomes to financial goals.
              </p>

              {/* Section 1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Anchor className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-slate-900">1. Anchor the CX strategy in the business strategy</h2>
                </div>
                <p>
                  Avoid &quot;flashy&quot; fixes that do not move the needle. The CX strategy should be informed by priority customer segments, value propositions, and growth levers. 
                </p>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 italic">
                  <div className="flex gap-2 items-start">
                    <Lightbulb className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <p><strong>Tangible tip:</strong> The &quot;road&quot; between CX and Strategy should be a two-way street. Ensure voice-of-the-customer feedback flows into the business strategy assessment just as strategy feeds CX priorities.</p>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CircleDollarSign className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-slate-900">2. Keep value creation front and center</h2>
                </div>
                <p>
                  Quantify the value of improving journeys. For example, if Product B has a higher lifetime value (LTV) than Product A, CX investments for Product B should likely take priority.
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Organizational View:</strong> Prioritize digital fixes that lower service costs (e.g., reducing phone calls).</li>
                  <li><strong>Quick Wins:</strong> Address pain points that affect a meaningful number of customers with early financial payoffs to build confidence.</li>
                </ul>
              </div>

              

              {/* Section 3 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <BarChartHorizontalBig className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-slate-900">3. Tie outcomes to financial goals</h2>
                </div>
                <p>
                  While NPS and satisfaction scores are vital, you must link them to P&L metrics like retention and profit. If leadership wants higher NPS, highlight the specific investment and profitability trade-offs required to reach that benchmark.
                </p>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 italic">
                  <div className="flex gap-2 items-start">
                    <Lightbulb className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <p><strong>Tangible tip:</strong> In your CX scorecard, explicitly call out how efforts advance strategic priorities (e.g., &quot;Enabling self-service reduced paper costs by $X&quot;).</p>
                  </div>
                </div>
              </div>

              <hr className="my-12 border-slate-200" />

              <p className="text-slate-600 text-center max-w-2xl mx-auto">
                Getting lost in a swirl of wide-ranging CX improvement efforts is easy. To achieve maximum value, ground your formulation in strategy, prioritize with value in mind, and measure results against financial goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}