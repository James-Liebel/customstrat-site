import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowLeft, ShieldAlert, CheckCircle2, Building2, UserCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Contingency Planning for the Next Worst-Case Scenario: Insurance Edition",
  description: "Building organizational and personal resilience through comprehensive contingency planning and adaptive insurance strategy frameworks.",
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
              Contingency Planning for the Next Worst-Case Scenario: Insurance Edition
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>April 1, 2021</span>
              </div>
              <div className="h-4 w-px bg-slate-200 hidden sm:block" />
              <div className="font-medium text-slate-700">By Katie Liebel</div>
            </div>

            {/* Article body */}
            <div className="mt-10 space-y-8 text-base leading-relaxed text-slate-700">
              <p>
                Health, auto, business, liability... the past 12 months have been insurance mayhem for just about everyone everywhere. Even the shrewdest, most farsighted, and most paranoid insurance carriers could not have anticipated a global pandemic with a devastating Texas ice storm chaser. 
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldAlert className="text-amber-600 h-5 w-5" />
                  <h2 className="text-lg font-bold text-amber-900 uppercase tracking-tight">The Core Question</h2>
                </div>
                <p className="text-amber-800 italic">
                  &quot;If a global pandemic doesn&apos;t highlight the importance of contingency planning for low-probability events, I don&apos;t know what will. What next?&quot;
                </p>
              </div>

              <p>
                Calculating &quot;what next&quot; is what insurers are skilled at. Insurance is about making sure expected losses from the &quot;few&quot; can be covered by premiums from the &quot;many.&quot; This mitigation of risk is both an art and a science: cover too little or price too high, consumers won&apos;t buy; cover too much or price too low, your business won&apos;t survive.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 pt-4">An Insurance Year Like No Other</h2>
              <p>
                Given how differently people are living and working today relative to 2019, it&apos;s time to reassess personal risk. Changed behaviors—less driving, more working at home—come with a slew of insurance implications. On the business side, many found that government-mandated closures were unfortunately not a covered event in traditional policies.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                {/* Consumers Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    <UserCircle className="h-6 w-6" />
                    <h2 className="text-xl font-bold text-slate-900">For Consumers</h2>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Audit life events: long-term care, life, and flood insurance.",
                      "Review auto coverage if you are driving 80% less.",
                      "Verify home coverage for new additions like pools or trampolines.",
                      "Shop around: switching carriers can save 10-20%.",
                      "Consider increasing deductibles to lower short-term premiums."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Carriers Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Building2 className="h-6 w-6" />
                    <h2 className="text-xl font-bold text-slate-900">For Carriers</h2>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Innovate: Develop coverage for pandemic and extreme weather risks.",
                      "Proactive Audits: Suggest appropriate discounts or coverage additions.",
                      "Digital Investment: Support remote policy review and easy interfaces.",
                      "Deepen Relationships: Offer payment fee forgiveness and EFT discounts."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              

              <hr className="border-slate-200 mt-12" />
              
              <p className="font-medium text-slate-900 text-center text-lg">
                Insurance was created so individuals and businesses can persevere through troubled times. This is an opportunity to revisit risks, make concrete plans, and breathe a sigh of relief as we look forward.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}