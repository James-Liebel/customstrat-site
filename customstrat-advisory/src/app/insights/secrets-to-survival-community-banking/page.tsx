import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowLeft, Users, Landmark, MapPin, Zap, TrendingUp, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: "Secrets to Survival in Community Banking",
  description: "A data-driven study of 230 community banks revealing the strategic choices that separate top performers from laggards.",
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
              Secrets to Survival in Community Banking
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>February 2025</span>
              </div>
              <div className="h-4 w-px bg-slate-200 hidden sm:block" />
              <div className="font-medium text-slate-700">By Katie Liebel & Luiz Zorzella</div>
            </div>

            {/* Article body */}
            <div className="mt-10 space-y-8 text-base leading-relaxed text-slate-700">
              <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm">
                <p className="text-xl font-medium leading-snug">
                  &quot;1 out of every 2 banks open for business two decades ago no longer exists today.&quot;
                </p>
              </div>

              <p>
                The number of community banks has declined by 34% in the past 10 years. As digital banks create new competitive arenas and &quot;Trillionaire banks&quot; muscle into every corner, the question remains: what does it take to survive and thrive?
              </p>

              <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl flex gap-4">
                <Info className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <p className="text-sm text-blue-900">
                  <strong>The Study:</strong> We analyzed 230 banks with assets between $3B–$20B over the last 5 years. Winners were defined as those maintaining double-digit compound growth and double-digit ROE.
                </p>
              </div>

              

              <h2 className="text-2xl font-bold text-slate-900">3 Factors NOT Linked to Winning</h2>
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <Landmark className="h-6 w-6 text-slate-400 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900">1. Size</h3>
                    <p>Winners were actually smaller (median $4.3B assets) than laggards ($6.1B). Interestingly, ROE often dips right above the $10B mark due to increased regulatory burden.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Zap className="h-6 w-6 text-slate-400 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900">2. M&A</h3>
                    <p>Simply &quot;acquiring&quot; doesn&apos;t guarantee success. While 35% of leaders made acquisitions, 47% of laggards were also active in the M&A market.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-slate-400 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900">3. Regional Location</h3>
                    <p>Underlying market growth was nearly identical for both groups. Success is independent of being in a &quot;high-growth&quot; state.</p>
                  </div>
                </div>
              </div>

              

              <h2 className="text-2xl font-bold text-slate-900 pt-6">2 Factors That DO Drive Success</h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" /> Effective Efficiency
                  </h3>
                  <p>
                    Winners have a median efficiency of <strong>55%</strong> vs. Laggards at <strong>65%</strong>. However, winners over-invest in talent: 64% of their total expenses are targeted to personnel (vs. 56% for laggards).
                  </p>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                    <MapPin className="h-5 w-5" /> Targeted Local Markets
                  </h3>
                  <p>
                    Winners grow through concentration in Metropolitan Statistical Areas (MSAs). Leading banks grew MSA deposits at 20% annually, while laggards often drained resources in sub-scale MSAs.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 pt-6">The Power of Strategic Commitment</h2>
              <p>
                The data shows that &quot;half-hearted&quot; attention to a segment or growth strategy fails. Commitment drives results:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                <li className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                  <strong>Serial Acquirers:</strong> Banks with 3+ acquisitions are 4.5x more likely to be winners.
                </li>
                <li className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                  <strong>Affluent Focus:</strong> Banks focusing on larger customers (low FDIC-insured % deposits) are 70% more likely to be winners.
                </li>
              </ul>

              <hr className="my-8 border-slate-200" />
              
              <p className="text-sm text-slate-500 text-center italic">
                Copyright © 2025 CustomStrat Advisory, Amquant. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}