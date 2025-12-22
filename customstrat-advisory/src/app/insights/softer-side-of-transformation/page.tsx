import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowLeft, Users2, BrainCircuit, Landmark, MessageSquare, Workflow, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: "The Softer Side of Transformation",
  description: "Why commitment, capabilities, culture, communication, and change management determine transformation success.",
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
              The Softer Side of Transformation
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
            <div className="mt-10 space-y-8 text-base leading-relaxed text-slate-700">
              <p className="text-lg font-medium text-slate-900 italic border-l-4 border-primary pl-4">
                &quot;Research indicates that well over half of business transformations fail, and the vast majority of those failures are due to inadequate attention to the softer elements.&quot;
              </p>

              <p>
                Business transformation has become imperative for most organizations to succeed. While tangible elements—strategy, resource allocation, and work plans—are critical, the &quot;soft&quot; elements determine if those plans actually stick. We focus on the <strong>Five Cs</strong> to help achieve intended outcomes.
              </p>

              {/* Section 1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Users2 className="h-6 w-6 text-slate-900" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">1. Commitment – Stack Hands at the Top</h2>
                </div>
                <p>
                  The first step is tight alignment at the senior-most level on the case for change. Once the roadmap is set, the executive team must speak with one voice.
                </p>
                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 italic flex gap-3">
                  <Lightbulb className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <p className="text-amber-900 text-sm"><strong>Tangible Tip:</strong> Make challenging executive leadership changes at the outset. Delaying these decisions seeds disbelief across the organization.</p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <BrainCircuit className="h-6 w-6 text-slate-900" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">2. Capabilities – Talent Is at the Core</h2>
                </div>
                <p>
                  Identify the right talent to lead the program. Success depends on building a core team empowered to make decisions and capable of leading from the front.
                </p>
                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 italic flex gap-3">
                  <Lightbulb className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <p className="text-amber-900 text-sm"><strong>Tangible Tip:</strong> Build a core team of 5–6 senior leaders who are empowered to make decisions and willing to solve complex problems.</p>
                </div>
              </div>

              

              {/* Section 3 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Landmark className="h-6 w-6 text-slate-900" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">3. Culture – Keep What Works</h2>
                </div>
                <p>
                  Leaders must strike a balance between preserving cultural elements that fueled past success and embedding new behaviors required for the digital future.
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-slate-900" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">4. Communication – Bold and Authentic</h2>
                </div>
                <p>
                  Communicate more frequently and across more channels. Incorporate employee feedback directly into messaging to ensure concerns are acknowledged.
                </p>
              </div>

              {/* Section 5 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Workflow className="h-6 w-6 text-slate-900" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">5. Change Management – Lead by Example</h2>
                </div>
                <p>
                  Authorship drives ownership. Leaders must model the behaviors they expect from others. Use frameworks to inform the battle plan, but avoid corporate jargon.
                </p>
              </div>

              <hr className="my-12 border-slate-200" />

              <div className="bg-slate-900 text-white p-8 rounded-2xl text-center shadow-xl">
                <p className="text-lg font-medium italic mb-2">
                  &quot;Transformation success relies on a trajectory consistently supported by the Five Cs.&quot;
                </p>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 mt-4">
                  <span>Commitment</span> • <span>Capabilities</span> • <span>Culture</span> • <span>Communication</span> • <span>Change</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}