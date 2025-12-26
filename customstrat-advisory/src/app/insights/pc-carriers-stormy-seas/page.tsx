// PCcarriersPreparingForTheStormySeas.tsx
import Link from "next/link";
import Atmosphere from "@/components/Atmosphere";

export default function PCcarriersPreparingForTheStormySeas() {
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
          <h1 className="cs-title">P&amp;C Carriers - Preparing for the Stormy Seas</h1>

          <div className="cs-meta">
            <span>
              <strong>By Katie Liebel &amp; TV Kumaresh</strong>
            </span>
            <span className="cs-meta-dot">•</span>
            <span>July 10, 2022</span>
          </div>
        </div>
      </header>

      {/* White reading surface */}
      <div className="cs-surface">
        <div className="cs-body">
          <section className="cs-section">
            <p>
              As P&amp;C carriers look to uncertain times ahead, it’s much like a boat looking to cross the stormy seas, needing to prepare the vessel and also set a calculated course for the horizon. Insurance customers are pinched by inflation, a short supply of vehicles, homes, and rising interest rates. Carriers also face rising operating and claims costs given the same market pressures. In addition to these near-term issues, significant long-term pressures exist: a.) the ‘winners take all’ trend due to scale benefits of technology and branding and b.) fundamental shifts in the underlying markets (e.g., auto).
            </p>

            <p>
              Carriers need to batten down the hatches for the near-term storm while also building the long-term strategy to arrive at a sunny port of call. The article below highlights five priorities to guide the journey.
            </p>
          </section>

          <section className="cs-section">
            <h2 className="cs-h2">1. Invest in exceptional customer experience to retain, while deepening relationships to grow.</h2>

            <p>
              In the current environment, increased pricing is inevitable for carriers&apos; health and typically leads to increased rate shopping from customers. In these times, superior customer experience and benefits help drive carrier differentiation and retention.
            </p>

            <p>
              Make the customer experience easy, transparent, and free from anxiety. Prioritize moments that matter (e.g., vehicle crashes, claims payments, coverage clarity) and invest in a human-digital interface that demonstrates much-needed empathy with customers. Another approach in these times is to provide more customer benefits - regular policy reviews to highlight saving/coverage opportunities, advice on higher deductibles, missed bundling discounts, and other ways to help save money and time for customers. It’s an opportune time to promote usage-based and behavior-based insurance products, showcasing the savings benefits of lower vehicle usage, safer driving, etc. Lastly, granular price adjustments (e.g., less on long tenure and higher on early monoline) will demonstrate the value of tenure and loyalty.
            </p>

            <p>
              With marketing budgets under pressure, find growth through deepening existing relationships. Cross-selling helps reduce acquisition costs and drives retention. Leverage advanced analytic tools to help agents mine existing customer relationships and provide valuable customer offers. Enable customer deepening with the right agent incentives and robust training.
            </p>
          </section>

          <section className="cs-section">
            <h2 className="cs-h2">2. Address the entire cost base (including claims) to drive meaningful savings:</h2>

            <p>
              Given current cost pressures, evaluate all organizational activities to eliminate non-value-added efforts and capture savings. In our experience, carriers tend to actively address underwriting expenses but often leave claims out of the purview. Claims should be part of this exercise as it constitutes 50–60% of total costs in the case of most carriers. Even small actions like jointly eliminating waste in the system with third-party claims vendors deliver significant savings due to the large cost base / installed vehicles/homes in force. Capturing savings hinges on a thorough tracking mechanism, incorporating the savings in the financial plan, and establishing clear accountability.
            </p>
          </section>

          <section className="cs-section">
            <h2 className="cs-h2">3. Drive strategic clarity for the long-term:</h2>

            <p>
              When investment dollars are scarce, companies must be clear on “where to compete” in the long term and concentrate resources accordingly. Each of the P&amp;C segments faces different dynamics (advanced driver assistance, autonomous, sharing, new competition, etc., in auto; climate change, capital needs in property; IOT/ new emerging coverages in commercial, etc.). The agent landscape is also changing with consolidation and increased digital needs.
            </p>

            <p>
              Each carrier has its own set of unique advantages driving its growth today. Be sure that the top-line successes translate to bottom-line successes as well, supported by a granular understanding of losses and operating costs. Then, re-allocate resources to where current strengths and new capabilities will benefit from the tailwinds of long-term industry and channel dynamics.
            </p>

            <p>
              Having led many such portfolio shifts, we have seen situations where a strategic analysis of product/segment level profitability can pinpoint required resource shifts. In one case, we discovered that product segments accounting for ~40% of premium contributed to over 100% of the profits. In another situation, we found similar results when such an analysis was done across customer segments. After reviewing the struggling segments, the linkages, and the carrier’s ability to compete, sales efforts were refocused on the winning sectors/segments, and operating resources were re-allocated to drive long-term success.
            </p>
          </section>

          <section className="cs-section">
            <h2 className="cs-h2">4. Ensure the digital agenda is aligned with the strategy:</h2>

            <p>
              Digitization has become integral to insurance sales and operations. Digital is a fixed-cost investment with benefits across cost, quality, and speed, translating over the years. The savings (from Priority 2) must be re-invested at least in part to digital activities such as end-to-end customer experiences, claims operations, advanced data &amp; analytics, and sales enablement. Of all the above, data and analytics capabilities are foundational to success in the chosen strategic segments. Earning sufficient capital returns requires granularity and precision in picking what and whom to write, pricing it at the individual risk level, and integrating internal and external data to drive actionable insights.
            </p>
          </section>

          <section className="cs-section">
            <h2 className="cs-h2">5. Use surgical M&amp;A and partnerships to accelerate momentum:</h2>

            <p>
              Once the product portfolio and digital / tech path are decided, consider what in-organic options might accelerate the journey. M&amp;A could be a choice, given targets could be available at a reasonable price in these times. In new product areas and digital / tech, partnerships can add value. For small to medium carriers, innovative partnerships could be formed with insurtechs looking for customers and scale while offering an up-to-date tech stack in return.
            </p>

            <p className="cs-divider">****</p>

            <p>
              These are times not seen in the last two decades. To weather the storm and emerge successfully, elevate customer experiences, deepen relationships and drive efficiencies in the short term. For success in the medium to long-term, align at a granular level on where to compete, re-allocate resources accordingly, invest in digital / data, and accelerate the journey through M&amp;A and partnerships.
            </p>
          </section>
        </div>
      </div>
        </article>
      </div>
    </main>
  );
}
