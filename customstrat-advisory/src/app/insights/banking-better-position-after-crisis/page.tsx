import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: "Banking on a Better Position After the Crisis",
  description: "Strategic imperatives for banks and customers emerging from crisis: digital transformation and long-term planning.",
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
              Banking on a Better Position After the Crisis
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>May 10, 2020</span>
              </div>
              <div className="h-4 w-px bg-slate-200 hidden sm:block" />
              <div className="font-medium text-slate-700">By Katie Liebel</div>
            </div>

            {/* Article body */}
            <div className="mt-10 space-y-8 text-base leading-relaxed text-slate-700">
              <p>
                The other day my 12-year-old son’s savings account statement came and showed a paltry 21 cents of interest. When he asked me what he could do about that, I told him he should get a job! Perhaps he could open a lemonade stand? I also told him that interest rates are near all-time lows and will get better over time.
              </p>

              <p>
                The current crisis is hitting not just my son’s savings account, but the entire banking industry. In March of 2020, the Fed Funds rate was effectively cut to zero. How might bank customers and providers think about using this short-term disruption to position better for the long-term?
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Four Opportunities for Retail Banking:</h2>
                <ol className="list-decimal ml-5 space-y-2 font-medium">
                  <li>Go Digital</li>
                  <li>Optimize the balance sheet</li>
                  <li>Invest time in long term planning</li>
                  <li>Use this as a teaching opportunity</li>
                </ol>
              </div>

              {/* Section 1 */}
              <h2 className="pt-4 text-2xl font-semibold tracking-tight text-slate-900">1. Go Digital</h2>
              <p>With branches restricting hours, this is the perfect opportunity to get more established with digital banking services.</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-slate-900 mb-2 underline decoration-accent decoration-2">As a Customer</h3>
                  <ul className="list-disc ml-5 space-y-2 text-sm">
                    <li><strong>Go fully digital:</strong> 45% of adults have not adopted mobile banking. Make the transition!</li>
                    <li><strong>Automate bill payments:</strong> Simplify your life by setting up digital debits.</li>
                    <li><strong>Establish P2P payments:</strong> Set up Venmo or Zelle for easier transactions.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2 underline decoration-primary decoration-2">As a Banker</h3>
                  <ul className="list-disc ml-5 space-y-2 text-sm">
                    <li><strong>Sign-up customers:</strong> Reach out to customers unaware of digital features.</li>
                    <li><strong>Customize digital advice:</strong> Tap into data analytics to drive in-app promotion.</li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <h2 className="pt-4 text-2xl font-semibold tracking-tight text-slate-900">2. Optimize the balance sheet</h2>
              <p>With rates at historic lows, there is no better time than now to review your balance sheet.</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-slate-900 mb-2 underline decoration-accent decoration-2">As a Customer</h3>
                  <ul className="list-disc ml-5 space-y-2 text-sm">
                    <li><strong>Refinance:</strong> Mortgage rates are at historic lows. Now is the time to act.</li>
                    <li><strong>Reposition savings:</strong> Traditional banks have rates near 0%; digital banks may offer more.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2 underline decoration-primary decoration-2">As a Banker</h3>
                  <ul className="list-disc ml-5 space-y-2 text-sm">
                    <li><strong>Help with Government programs:</strong> Educate small businesses on CARES Act provisions.</li>
                    <li><strong>Provide product advice:</strong> Identify customers who benefit from flexible terms.</li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <h2 className="pt-4 text-2xl font-semibold tracking-tight text-slate-900">3. Invest time into long term planning</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-slate-900 mb-2 underline decoration-accent decoration-2">As a Customer</h3>
                  <ul className="list-disc ml-5 space-y-2 text-sm">
                    <li><strong>Create a financial plan:</strong> 80% of adults have no written plan. Find a trusted advisor.</li>
                    <li><strong>Prepare estate documents:</strong> Ensure you have a will in place.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2 underline decoration-primary decoration-2">As a Banker</h3>
                  <ul className="list-disc ml-5 space-y-2 text-sm">
                    <li><strong>Become a trusted advisor:</strong> Only 17% of Americans use a financial advisor.</li>
                    <li><strong>Contingency planning:</strong> Help customers build resilience for the future.</li>
                  </ul>
                </div>
              </div>

              <hr className="my-8 border-slate-200" />
              <p className="italic text-slate-600">
                In summary, while this unprecedented time has brought a lot of "lemons" to the banking space, there is an opportunity to make something positive out of it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}