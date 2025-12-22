import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowLeft, HeartHandshake, ShieldCheck, Compass, MonitorSmartphone, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: "P&C Carriers: Preparing for the Stormy Seas",
  description: "Five strategic priorities for P&C insurance carriers to navigate inflation, rising claims costs, and long-term industry shifts.",
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
              P&C Carriers: Preparing for the Stormy Seas
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>July 10, 2022</span>
              </div>
              <div className="h-4 w-px bg-slate-200 hidden sm:block" />
              <div className="font-medium text-slate-700">By Katie Liebel & TV Kumaresh</div>
            </div>

            {/* Article body */}
            <div className="mt-10 space-y-8 text-base leading-relaxed text-slate-700">
              <p>
                As P&C carriers look to uncertain times ahead, it&apos;s much like a boat looking to cross stormy seas—needing to prepare the vessel while setting a calculated course for the horizon. Customers are pinched by inflation and rising interest rates, while carriers face escalating operating and claims costs.
              </p>

              <p className="font-medium text-slate-900">
                To &quot;batten down the hatches&quot; and arrive at a sunny port of call, we suggest five guiding priorities:
              </p>

              {/* Priority 1 */}
              <div className="group space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <HeartHandshake className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">1. Exceptional Experience & Deepened Relationships</h2>
                </div>
                <p>
                  In an environment of inevitable price increases, superior CX is the primary driver of retention. Prioritize &quot;moments that matter&quot; like vehicle crashes and claims payments. Invest in a human-digital interface that demonstrates empathy. Additionally, leverage advanced analytics to help agents mine existing relationships for cross-selling opportunities, reducing acquisition costs.
                </p>
              </div>

              {/* Priority 2 */}
              <div className="group space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
                    <ShieldCheck className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">2. Addressing the Entire Cost Base</h2>
                </div>
                <p>
                  Carriers often address underwriting expenses but leave claims untouched. Since claims constitute 50–60% of total costs, even small efficiencies with third-party vendors can deliver significant savings. Capture these through rigorous tracking and clear accountability.
                </p>
              </div>

              

              {/* Priority 3 */}
              <div className="group space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-50 rounded-lg group-hover:bg-amber-100 transition-colors">
                    <Compass className="h-6 w-6 text-amber-600" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">3. Long-term Strategic Clarity</h2>
                </div>
                <p>
                  When dollars are scarce, be surgical about where to compete. We have seen situations where product segments accounting for 40% of premium contributed to over 100% of profits. Pinpoint these winning sectors and re-allocate resources to benefit from industry tailwinds like IOT and emerging coverages.
                </p>
              </div>

              {/* Priority 4 */}
              <div className="group space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors">
                    <MonitorSmartphone className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">4. Aligning the Digital Agenda</h2>
                </div>
                <p>
                  Re-invest cost savings into foundational data and analytics. Success depends on granularity—pricing at the individual risk level and integrating external data to drive actionable insights across the end-to-end customer journey.
                </p>
              </div>

              {/* Priority 5 */}
              <div className="group space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-rose-50 rounded-lg group-hover:bg-rose-100 transition-colors">
                    <Rocket className="h-6 w-6 text-rose-600" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">5. Surgical M&A and Partnerships</h2>
                </div>
                <p>
                  Consider inorganic options to accelerate momentum. For small-to-medium carriers, innovative partnerships with insurtechs can offer an up-to-date tech stack in exchange for scale and customer access.
                </p>
              </div>

              <hr className="my-12 border-slate-200" />

              <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl text-center">
                <p className="text-slate-700 font-medium italic">
                  &quot;To weather the storm, elevate experiences and drive efficiencies now. To succeed long-term, align on where to compete and accelerate the journey through data and partnerships.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}