import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowLeft, BarChart3, TrendingUp, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: "Beyond Scale: Winning Strategies for Today's P&C Insurers",
  description: "Insights from a decade of market data reveal what P&C insurance winners do differently regarding scale, commercial lines, and diversification.",
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
              Beyond Scale: Winning Strategies for Today&apos;s P&C Insurers
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 2025</span>
              </div>
              <div className="h-4 w-px bg-slate-200 hidden sm:block" />
              <div className="font-medium text-slate-700">
                By Katie Liebel, Rohini Reddy & Luiz Zorzella
              </div>
            </div>

            {/* Article body */}
            <div className="mt-10 space-y-8 text-base leading-relaxed text-slate-700">
              <p className="text-xl text-slate-600 italic border-l-4 border-accent pl-4">
                Insights from a decade of market data reveal what winners do differently.
              </p>

              <p>
                Over the past decade, the U.S. P&C industry has grown at an annual rate of 6.8%, driven predominantly by price increases, while as a whole, struggling to return above the cost of capital.
              </p>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" /> Research Methodology
                </h3>
                <p className="text-sm">
                  We analyzed the largest 100 U.S. P&C carriers (ranging from $1B to over $100B) to identify key success factors. <strong>Winners</strong> were defined as those exceeding the market&apos;s 6.8% growth and 8.0% ROE averages.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-slate-900">3 Factors that are NOT Linked to Winning</h2>
              <p>Conventional wisdom often fails when looking at the data for mid-to-large carriers.</p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">1. Size</h3>
                <p>
                  Outside of the &quot;Big 3&quot; (State Farm, Berkshire, Progressive), size is not a factor. In fact, Winners in our study were slightly smaller than Laggards ($5.2B vs $6.3B DWP).
                </p>

                <h3 className="text-xl font-semibold text-slate-900">2. Regional Concentration</h3>
                <p>
                  Success is possible even in tough territories. Winners actually had <em>higher</em> concentration in high-CAT regions (38%) than Laggards (35%).
                </p>

                <h3 className="text-xl font-semibold text-slate-900">3. M&A</h3>
                <p>
                  60% of Winners achieved success without a single acquisition. M&A activity remains muted across the board.
                </p>
              </div>

              

              <h2 className="text-2xl font-bold text-slate-900 pt-6">3 Factors that DO Drive Success</h2>
              
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Commercial & Specialty Focus</h3>
                    <p>Winners concentrated nearly 80% of their portfolios in commercial lines, specifically specialty areas like Cyber and E&S.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">State Diversification</h3>
                    <p>Winners distribute 80% of premium across an average of 15 states, compared to just 10 states for Laggards.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Public Ownership</h3>
                    <p>78% of Winners are public, benefiting from greater access to capital and disciplined governance pressures.</p>
                  </div>
                </div>
              </div>

              

              <h2 className="text-2xl font-bold text-slate-900 pt-6">The Path Forward</h2>
              <p>
                The carriers that will be called &quot;winners&quot; in five years are making their moves today. Whether pursuing a low-expense automated model or a high-expertise low-loss ratio model, success requires strategic commitment and alignment.
              </p>

              <hr className="border-slate-200" />

              <div className="text-xs text-slate-500 space-y-1">
                <p><strong>End Notes:</strong></p>
                <p>[1] 2015-2024 data period.</p>
                <p>[2] ROE = Net Income / Policyholders’ Surplus (S&P Capital IQ).</p>
                <p>[3] Southwest: TX, OK, NM, AZ | Southeast: VA, WV, NC, SC, GA, FL, AL, MS, TN, KY, AR, LA.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}