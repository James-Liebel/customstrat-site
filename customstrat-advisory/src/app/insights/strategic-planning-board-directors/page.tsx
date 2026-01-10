// StrategicPlanningBestPracticesForBoardDirectors.tsx
import Link from "next/link";
import Atmosphere from "@/components/Atmosphere";

export default function StrategicPlanningBestPracticesForBoardDirectors() {
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
              <h1 className="cs-title">Strategic Planning Best Practices for Board Directors</h1>
              <h2 className="cs-subtitle">A practical guide for boards to steward the development of a winning corporate strategy</h2>

              <div className="cs-meta">
                <span>
                  <strong>By Katie Liebel</strong>
                </span>
                <span className="cs-meta-dot">•</span>
                <span>September 2022</span>
              </div>
            </div>
          </header>

          {/* White reading surface */}
          <div className="cs-surface">
            <div className="cs-body">
              <section className="cs-section">
                <p>
                  The lauded annual Board strategic plan review demands tremendous preparation both on the part of staff members and Board Directors. But, how often do the meetings achieve their intended purpose? It is an opportunity for the Board to ratify the strategic choices of the company and ensure effective positioning to compete and prosper in the evolving marketplace. Often that chance for meaningful dialogue is replaced with a death march through 200+ pages of corporate plans, or worse, overshadowed by detailed (and optimistic!) 3 to 5-year financial forecasts.
                </p>

                <p>
                  Boards can help the executive team through effective upfront agenda management for the strategic review, via targeted questions during the meeting itself, and finally through ensuring continual monitoring and adaptation.
                </p>
              </section>

              <section className="cs-section">
                <h2 className="cs-h2">Step 1: Ensure the right foundation to anchor the discussion</h2>

                <p>
                  Amongst the reams of pages from the strategy team, make sure the materials encapsulate a solid foundation including the market context, competitor positioning and an unvarnished view of corporate strengths and weaknesses (informed by customer feedback). Look for clarity on both the corporate strategy and the main business unit strategies. The corporate strategy should define the priorities across the portfolio of businesses and why the ‘whole is greater than the sum of the parts’. The business unit strategies should elucidate ‘where’ and ‘how’ a business unit competes in the market. While the strategic plan should be underpinned by quantitative analysis and financial modeling, the discussions should focus on the choices that the business is making and associated high-level objectives, as opposed to detailed P&amp;Ls, which can come later during the budget process.
                </p>

                <div className="cs-callout">
                  <p className="mb-0">
                    <strong>Tip:</strong> Ask for a memo to describe the strategy, so the narrative doesn’t get lost in PowerPoint, or worse yet, spreadsheets.
                  </p>
                </div>
              </section>

              <section className="cs-section">
                <h2 className="cs-h2">Step 2: Keep in mind some targeted questions to hone in on the ‘heart of the matter’ strategic issues as you listen to the executive reviews.</h2>

                <p>
                  Fundamentally, you want to test three things:
                </p>

                <p>a.) Does the company have a defined strategy?</p>
                <p>b.) Is the strategy a ‘good’ one?</p>
                <p>c.) Can the company deliver on the strategy?</p>

                <p>
                  This article suggests an over-arching question to keep in the back of your mind to test each of these 3 areas, as well as some supporting questions to facilitate healthy dialog in the Board Room.
                </p>

                <h3 className="cs-h3">a.) Does company actually have a defined strategy?</h3>

                <div className="cs-callout">
                  <p className="mb-0">
                    <strong>&apos;Test’ to keep in mind:</strong> If the opposite of the strategy is “stupid”, then there is no strategy. Allow me to explain: let’s say the strategy is to provide high-touch in-person service to high net-worth customers. The opposite of that is to provide a low-touch digital offering to mass market customers. Both of these are perfectly rational strategic paths. Now, let’s say the strategy is to “grow profitably with all consumers leveraging a strong customer experience”. The opposite is to “shrink unprofitably with no consumers based on a poor customer experience”. That doesn’t make any sense, highlighting no real choices have been made.
                  </p>
                </div>

                <h4 className="cs-h4">Questions to ask in the room:</h4>

                <p>What segments of the market (customer segments, geographies or product/service cuts) are we targeting and why?</p>
                <p>Why would customers uniquely choose to do business with us vs. any of our competitors?</p>
                <p>How do we define our ‘secret sauce’ aka competitive advantage?</p>
                <p>Where are we being bold with investments?</p>
                <p>Are there businesses / products in the portfolio that don’t align with our core capabilities?</p>

                <h3 className="cs-h3">b.) Is the strategy a ‘good’ one?</h3>

                <div className="cs-callout">
                  <p className="mb-0">
                    <strong>‘Test’ to keep in mind:</strong> Is the company gaining market share over time, demonstrating the ability to win?
                  </p>
                </div>

                <h4 className="cs-h4">Questions to ask in the room:</h4>

                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>What are the high-level expected outcomes of the strategy (e.g., growth, profits, mix shift, capital)?</li>
                  <li>How do expected growth and margins compare to the closest peer companies?</li>
                  <li>Are we “winning” in the customers’ view as measured by growth in new customers, customer feedback and customer retention in the target segments?</li>
                  <li>What other strategic options were considered and why is the recommended path the best path relative to those options?</li>
                  <li>How have the strategic choices incorporated major market trends – both opportunities and threats?</li>
                  <li>In the rapidly changing world that we live in, does the strategy allow for flexibility if market conditions or major assumptions change?</li>
                </ul>

                <h3 className="cs-h3">c) Can the company deliver on the strategy?</h3>

                <div className="cs-callout">
                  <p className="mb-0">
                    <strong>‘Test’ to keep in mind:</strong> Does the entire leadership team have sufficient passion, courage and motivation to support the strategic direction?
                  </p>
                </div>

                <h4 className="cs-h4">Questions to ask in the room:</h4>

                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Have we allocated sufficient resources to develop our core capabilities (e.g., talent, technology, M&amp;A)? what are we “NOT” doing to drive enough support to the important areas?</li>
                  <li>How do the performance management systems align with the strategic objectives?</li>
                  <li>What is the biggest risk to deliver on the strategy? What is the mitigation plan to manage that risk?</li>
                  <li>What project management and governance processes are in place to monitor delivery, ensure sufficient resources and course correct if needed?</li>
                </ul>
              </section>

              <section className="cs-section">
                <h2 className="cs-h2">Step 3: Ensure continual focus on the strategy throughout the year</h2>

                <p>
                  Following the annual strategic plan review, look for an explicit linkage of the operating budget to the strategic priorities. Ideally, the key strategic themes are threaded throughout every meeting agenda in the year, allocating time for deep dives on key issues. As part of the strategic agenda topics, request overviews on competitors’ strategic priorities or potentially leading players in parallel industries. A deep dive in customer segmentation and/or customer feedback can also contribute to the Board’s understanding of the strategy. Finally, in the current volatile times, revisit how major external shocks should ripple through to potentially alter strategic priorities.
                </p>

                <div className="cs-callout">
                  <p className="mb-0">
                    <strong>Tip:</strong> Ask for a one-page strategic dashboard review at quarterly meetings, with key performance indicators aligned to the strategic objectives, covering both leading measures as well as ‘outputs’ of the strategy.
                  </p>
                </div>

                <p className="cs-divider">* * *</p>

                <p>
                  One of the Board’s most critical tasks is to steward the development of a winning strategy. To capitalize on the strategic reviews with management, ensure the materials set the right foundation, lean in with targeted questions on whether the strategy is granularly defined, poised for success and supported by sufficient resources. Finally, ensure that the strategic discussions live on through the year with sufficient deep dives and tracking to key indicators.
                </p>
              </section>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
