// LinkingCustomerExperienceToStrategyAndValue.tsx
import Link from "next/link";
import Atmosphere from "@/components/Atmosphere";

export default function LinkingCustomerExperienceToStrategyAndValue() {
  return (
    <main className="cs-shell--library relative">
      {/* Atmosphere: ink-dots theme (reading-focused) */}
      <Atmosphere themeKey="ink-dots" intensity="low" />
      <div className="relative z-10">
        <article className="cs-article">

          {/* Back link */}
          <div className="cs-back-wrapper">
            <Link href="/insights" className="cs-back-link">
              ← Back to Articles
            </Link>
          </div>

          {/* Header band */}
          <header className="cs-hero">
            <div className="cs-hero-inner">
              <h1 className="cs-title">Linking Customer Experience to Strategy and Value</h1>

              <div className="cs-meta">
                <span>
                  <strong>By Katie Liebel and TV Kumaresh</strong>
                </span>
                <span className="cs-meta-dot">•</span>
                <span>November 2022</span>
              </div>
            </div>
          </header>

          {/* White reading surface */}
          <div className="cs-surface">
            <div className="cs-body">

              <section className="cs-section">
                <p>
                  Customer experience (CX) is a top priority for many companies today with multiple topics as part of the dialogue - personas, user-centered design, AI, culture, digital, etc. There are two main implications to this confluence of topics and increased investment. First is the complexity it drives in building an effective CX strategy and, in many cases, even knowing the right starting point of the effort. Second, with the increased investment and visibility of large-scale CX programs, the expectations for impact are quite high. This makes it essential for companies to articulate clearly what a superior customer experience is worth and how it will generate value (growth, profitability). The topic is of even higher importance as we step into 2023 with heightened uncertainty around the macro-environment.
                </p>

                <p>
                  While there is much written about personas, journeys, and the like, there is less focus on linking CX to strategy and value creation. We believe it is imperative to initiate CX transformations firmly grounded in the business strategy, prioritize changes based on value creation, and sustain the CX engine by linking outcomes to strategic and financial goals.
                </p>

                <p>
                  The article below highlights three vital elements for a successful Customer Experience Transformation to create long-lasting value for the company.
                </p>
              </section>

              <section className="cs-section">
                <h2 className="cs-h2">1. Anchor the CX strategy in the business strategy</h2>

                <p>
                  In our experience, we have seen some common challenges in CX efforts - investing without clarity on priority segments, building &apos;flashy&apos; fixes that do not move the needle, or addressing the wrong problem (e.g., focus on service when price is the challenge).
                </p>

                <p>
                  The best way to define the CX strategy is to inform it from the overall business strategy. The business strategy will typically contain the strategic objectives around:
                </p>

                <p>
                  Priority customer segments: which will help with the focus area for CX
                </p>

                <p>
                  Customer value proposition: For example, CX investment should be different for a price leader vs. experience leadership
                </p>

                <p>
                  Areas of differentiation: For instance, if new products drive growth in the upcoming years, CX investments need to prioritize the experience around the new product&apos;s journey.
                </p>

                <p>
                  Growth levers for the company: For example, if growth will be driven by new customer acquisition, the experience effort should focus on &quot;make it easy to join&quot; vs. growth through deepening relationships would emphasize &quot;make it easy for bundling.&quot;
                </p>

                <p>
                  Any robust business strategy is informed by market trends, customer needs, internal capabilities, and a solid financial assessment. Leverage this body of work to prescribe the CX needs.
                </p>

                <div className="cs-callout">
                  <p className="mb-0">
                    <strong>Tangible tip:</strong> The &apos;road&apos; between CX and Strategy should be a two-way street – ensure that meaningful voice-of-the-customer feedback flows into the current state assessment for the business strategy, just as the strategic business direction should feed the CX priorities.
                  </p>
                </div>
              </section>

              <section className="cs-section">
                <h2 className="cs-h2">2. While prioritizing specific CX initiatives, keep value creation front and center</h2>

                <p>
                  With the broad CX direction in place, most organizations establish a prioritization mechanism to identify specific initiatives and areas to improve at a granular level. It&apos;s critical to overlay value creation on these planning discussions.
                </p>

                <p>
                  Quantify the value of improving journeys to determine which areas to focus on. There can be debates across journeys as well as within a particular journey. Looking across journeys in one situation, there was a debate between increasing promoters in Product A vs. increasing promoters within Product B. The decision was linked to financial outcomes from the two paths. The lifetime value of Product B customers was higher than the lifetime value of Product A customers. For similar investment levels, retention rates expected were higher in the case of Product B, which also carried a higher lifetime value, helping make the trade-off.
                </p>

                <p>
                  Take an end-to-end organizational view of any customer experience to assess the enterprise value created. This will ensure a top-down view of investments to the right points in the journey vs. siloed asks for investments which invariably leads to higher spending and lower benefit.
                </p>

                <p>
                  For example, the digital group might need to prioritize a fix that can lower the need for customer service phone calls, both improving omni-channel experience and reducing company costs. Such a project would not likely get prioritized in the silo of the digital world, but will bubble to the top when looking across the organization for CX priorities.
                </p>

                <p>
                  Prioritize quick wins that bring financial benefits. With the customer-focused principles of agile, most organizations today deploy agile teams to address the pain points. In all cases, it is valuable to prioritize quick wins (which affect a meaningful number of customers) with financial payoffs early in the journey. This approach will go a long way in building confidence toward additional investments.
                </p>

                <div className="cs-callout">
                  <p className="mb-0">
                    <strong>Tangible tip:</strong> Ensure that for all initiatives, there is a back-of-the-envelope value creation view (including its drivers like retention, lower drop-offs in a journey, etc.). Just as the CX team gets involved in scoring NPS benefits of a particular initiative, engage finance to score initiatives on a scale of &apos;low&apos; to &apos;high&apos; financial impact.
                  </p>
                </div>
              </section>

              <section className="cs-section">
                <h2 className="cs-h2">3. Sustain the CX engine by tying program outcomes to strategic and financial goals</h2>

                <p>
                  Once initiatives are deployed, measure CX outcomes in alignment with strategic and financial goals to sustain the flywheel of success.
                </p>

                <p>
                  As part of customer experience, output measurements include engagement, adoption, customer satisfaction, NPS, and their associated drivers. While these are extremely important, keep in mind the need to link customer metrics to P&amp;L metrics - growth, efficiencies, retention, and profits - for sustained investment and executive sponsorship.
                </p>

                <p>
                  In addition, highlight CX&apos;s &apos;wins&apos; in alignment with the business strategy – whether in targeted segments or critical product launches.
                </p>

                <p>
                  In one situation, the leadership wanted NPS scores that were way higher than what could be achieved through current initiatives. The only way for the proper trade-off discussions to happen was to highlight the investments needed to achieve the higher NPS benchmark and the profitability trade-offs required.
                </p>

                <div className="cs-callout">
                  <p className="mb-0">
                    <strong>Tangible Tip:</strong> As part of the CX scorecard package, include explicit call-outs on how the CX efforts are advancing the strategic priorities of the corporation (e.g., if one of the corporate strategic priorities is to &quot;drive efficiencies,&quot; enumerate the CX efforts that enabled self-service or facilitated paper reduction, and size the financial impact).
                  </p>
                </div>

                <p className="cs-divider">* * *</p>

                <p>
                  Customer Experience is increasingly vital to driving overall competitive differentiation in the marketplace. The opportunities to transform customer experience are further accelerated by all the digital and data levers available today. With all this excitement, getting lost in a swirl of wide-ranging CX improvement efforts can be easy. To achieve maximum value for the company, it is imperative to ground CX formulation in business strategy, prioritize CX initiatives with value in mind and measure CX outcomes in relation to both the strategic priorities and financial goals.
                </p>
              </section>

            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
