import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowLeft, Target, Settings2, ShieldCheck, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: "Integrated Planning Amidst the Headwinds",
  description: "How to build resilient strategic plans that adapt to changing market conditions through assumption-based planning and agile execution frameworks.",
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
              Integrated Planning Amidst the Headwinds
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>September 2022</span>
              </div>
              <div className="h-4 w-px bg-slate-200 hidden sm:block" />
              <div className="font-medium text-slate-700">By Katie Liebel and TV Kumaresh</div>
            </div>

            {/* Article body */}
            <div className="mt-10 space-y-8 text-base leading-relaxed text-slate-700">
              <p>
                As we head into the year&apos;s final quarter, &apos;tis the season for integrated planning. Financial modeling, complete with an array of interest rates, inflation assumptions, and demand drivers, will be in full swing. 
              </p>

              <p className="text-lg font-medium text-slate-900">
                At the C-level, we believe there are three questions to inform the balanced path to a robust 3-year plan:
              </p>

              {/* Question 1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">1. What is the targeted investment plan to expand the top line?</h2>
                </div>
                <p>
                  Invest in alignment with strategic direction—focusing on target segments and building competitive capabilities. In a scenario with limited resources, the business needs clarity on where <strong>NOT</strong> to invest, just as much as where <strong>TO</strong> invest.
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Avoid &quot;Gold Plating&quot;:</strong> Don&apos;t heap money upon hot trends without diligence on actual customer usage.</li>
                  <li><strong>Granular Pricing:</strong> Address price leakage. Updating pricing practices can generate significant revenue lift with minimal impact on retention.</li>
                  <li><strong>Agile Funding:</strong> Keep 10-15% of funding at the &quot;top of the house&quot; to allow for investment in viable ideas mid-year.</li>
                </ul>
              </div>

              

              {/* Question 2 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Settings2 className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">2. What is the thoughtful efficiency plan?</h2>
                </div>
                <p>
                  Avoid declaring a flat &quot;X%&quot; cost reduction across the board. Ensure expense trade-offs align with strategic direction.
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Bank Structural Trends:</strong> Explicitly capture savings from shifts like remote work and digital channel adoption.</li>
                  <li><strong>Outsource Prudently:</strong> Seek efficiencies in non-differentiated areas like customer communication operations.</li>
                  <li><strong>Remove Waste:</strong> Hunt for duplication across functions with a &quot;neutral team&quot; approach.</li>
                </ul>
              </div>

              {/* Question 3 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">3. What processes increase the likelihood of success?</h2>
                </div>
                <p>
                  Avoid the &quot;hockey stick&quot; plan where sudden prosperity follows years of decline without a change in trajectory.
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Feasibility Checks:</strong> Validate if growth expectations imply an impractical gain in market share.</li>
                  <li><strong>Accountability:</strong> Incorporate outcome delivery on critical projects into leader performance reviews.</li>
                  <li><strong>Measurement Systems:</strong> Establish quarterly forums to review OKRs and milestone tracking reports.</li>
                </ul>
              </div>

              

              <hr className="my-12 border-slate-200" />

              <div className="bg-slate-900 text-white p-8 rounded-2xl">
                <p className="text-lg italic text-slate-300 mb-4">
                  &quot;Irrespective of macro scenarios, it is time to prioritize rigorously towards strategic growth areas, do more with less, and, most importantly, elevate accountability as part of the culture.&quot;
                </p>
                <p className="text-sm font-bold tracking-widest uppercase">— Strategic Conclusion</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}