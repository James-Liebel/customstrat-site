// BeyondScalePCInsurers.tsx
import Link from "next/link";
import Atmosphere from "@/components/Atmosphere";

export default function BeyondScalePCInsurers() {
  return (
    <main className="cs-shell--library relative">
      {/* Atmosphere: ink-dots theme (reading-focused, low intensity) */}
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
          <h1 className="cs-title">Beyond Scale:  Winning Strategies for Today&apos;s P&amp;C Insurers</h1>
          <h2 className="cs-subtitle">Insights from a decade of market data reveal what winners do differently</h2>

          <div className="cs-meta">
            <span>
              <strong>By Katie Liebel, Rohini Reddy &amp; Luiz Zorzella</strong>
            </span>
            <span className="cs-meta-dot">•</span>
            <span>August 2025</span>
          </div>
        </div>
      </header>

      {/* White reading surface */}
      <div className="cs-surface">
        <div className="cs-body">

          <section className="cs-section">
            <p>
              Over the past decade[1], the U.S. P&amp;C industry has grown at an annual rate of 6.8%, driven predominantly by price increases, while as a whole, struggling to return above the cost of capital.
            </p>

            <p>
              As of late, headwinds of inflation, weather and state regulations continue to weigh heavily on the agendas of carriers, despite tailwinds such as efficiencies from technology &amp; data analytics. The personal lines (PL) market has been particularly challenging, witnessing some of the largest carriers edging ahead with scale advantages. Whereas the commercial lines (CL) market has more nuanced factors driving success.
            </p>

            <p>
              To succeed in these turbulent waters, carriers must make thoughtful strategic choices and execute aggressively. Over this period, the gap between top and bottom performers has widened considerably, signaling that competitive advantage now compounds over time.
            </p>

            <p>
              What exactly are the winning choices?
            </p>

            <p>
              We analyzed the largest 100 U.S. P&amp;C carriers to identify the key factors that most strongly drive success. The top 100 P&amp;C carriers by premium in the U.S. range in size from about $1B to over $100B.
            </p>

            <p>
              We segmented the 100 carriers[2] by performance on both growth and returns, defining Winners as those exceeding the market’s 6.8% growth and 8.0% ROE[3] averages, and Laggards as those falling below on both measures. We then assessed the factors driving the largest performance gaps.
            </p>

            <p>
              This article examines which strategic and operating choices drive superior results and enable carriers to stay ahead of the average.
            </p>
          </section>

          <section className="cs-section">
            <h2 className="cs-h2">Why trying to learn from the top 3 may lead to wrong decisions</h2>

            <p>
              We excluded from the analysis the top 3 carriers – State Farm, Berkshire Hathaway and Progressive – as their scale economies in marketing and technology so far exceed the others that the lessons are less transferable. They have an expense ratio of ~20% vs the rest of the industry with 28% expense ratio.
            </p>

            <p>
              Collectively, the largest 3 carriers own nearly 25% of the U.S. P&amp;C market and nearly half of the auto insurance market, which also leads to pricing power. All 3 of these companies demonstrated growth above industry average, with Progressive and Berkshire also performing above average on returns.
            </p>
          </section>

          {/* Exhibit 1 */}
          <section className="cs-exhibit">
            <h3 className="cs-exhibit-title">Exhibit 1:  Profile of Carriers analyzed</h3>
            <div className="cs-exhibit-frame">
              <span className="cs-exhibit-placeholder-text">PNG goes here</span>
            </div>
          </section>

          <section className="cs-section">
            <h2 className="cs-h2">3 Factors that are NOT Linked to Winning</h2>

            <p>
              Three elements that one might assume are drivers: size, regional concentration and M&amp;A are NOT in fact, correlated to success.
            </p>

            <h3 className="cs-h3">1.&nbsp;&nbsp;&nbsp;&nbsp;Size</h3>

            <p>
              Conventional wisdom is that larger carriers are expected to outperform smaller ones. Indeed, as we look at the largest 3 carriers in the U.S. – State Farm, Berkshire and Progressive – they have achieved disproportionate scale as previously noted, particularly in Personal Lines.
            </p>

            <p>
              Outside of the top 3 players, which absolutely benefit from scale advantages, size does not appear to be a factor driving performance amongst the top 100 players. The Winners are actually a bit smaller than the Laggards (respectively, $5.2 billion in DWP versus $6.3 billion).
            </p>

            <p>
              Why is size not a factor? This is because there is not a meaningful difference in economies of scale outside of the top 3, with the average expense ratio across all company size bands, fairly constant at 28-30%. Nor is effectiveness gained on underwriting as size grows, perhaps because larger carriers are diversifying in too many areas to be advantaged in.
            </p>

            <h3 className="cs-h3">2.&nbsp;&nbsp;Regional concentration</h3>

            <p>
              If we divide the U.S. up into 6 regions – West, Southwest, Southeast, Midwest, Mid-Atlantic, and Northeast – 2 regions notably stand out in terms of CAT events as a percentage of total premium written. The Southwest[4] and Southeast[5] have 2X – 3X more CAT damage relative to premiums vs. the other regions.
            </p>

            <p>
              The conventional view is that concentration in these difficult regions makes it difficult to win. The facts say the opposite. The data shows that Winners have 38% of their business in these high CAT regions vs the Laggards with 35% of their premium in these difficult areas.
            </p>

            <p>
              The message is that success is possible even if a carrier resides in a tough territory.
            </p>

            <h3 className="cs-h3">3.&nbsp;&nbsp;&nbsp;M&amp;A</h3>

            <p>
              While many financial service verticals are consolidating, you might expect sub-scale P&amp;C carriers to be actively acquiring. But the number of P&amp;C carriers in the U.S. has actually slightly grown over the past decade. As a group, the top 100 companies averaged less than 1 acquisition per carrier. M&amp;A activity is fairly muted.
            </p>

            <p>
              Over the past 10 years, 39% of the Winners made an acquisition compared to 42% of the Laggards. Said another way, a full 60% of Winners have achieved their success without M&amp;A. It’s also worth noting that the entities Winners purchased were generally small, with half of the Winners’ deals having a transaction value which was less than 1% of the acquiring company&apos;s premium.
            </p>
          </section>

          {/* Exhibit 2 */}
          <section className="cs-exhibit">
            <h3 className="cs-exhibit-title">Exhibit 2:  Non-Factors to Success</h3>
            <div className="cs-exhibit-frame">
              <span className="cs-exhibit-placeholder-text">PNG goes here</span>
            </div>
          </section>

          <section className="cs-section">
            <h2 className="cs-h2">3 Factors that DO Drive Success</h2>

            <p>
              The leading carriers tend to have 3 common drivers: concentration in commercial lines with further focus on specialty lines, state diversification and public ownership.
            </p>

            <h3 className="cs-h3">1.&nbsp;&nbsp;&nbsp;&nbsp;Concentration in commercial lines and specialties</h3>

            <p>
              The common notion that a balanced portfolio of personal and commercial lines is required to succeed is not reflected in the data.
            </p>

            <p>
              Carriers that made a clear bet and concentrated their resources and capabilities in commercial lines were more successful than those that spread their ‘chips’ across personal and commercial. Winners have made a clear choice to focus, with nearly 80% of their portfolios concentrated in commercial lines, while Laggards had an almost 50/50 split between the two.
            </p>

            <p>
              Furthermore, within commercial lines, Winners had a higher share of business in specialty areas (e.g., cyber, E&amp;S), benefiting from less competition and perhaps more pricing flexibility in those areas. The Winners had, on average, 40% of their overall portfolios in commercial specialty products versus less than 20% for the Laggards.
            </p>

            <p>
              But what about volatility?
            </p>

            <p>
              What’s really intriguing is that our research shows that the volatility of returns from the Laggards with the more balanced portfolio is no better than that of the Winners with a clear focus on Commercial. The standard deviation of ROE from the Winners over the past decade was actually about 10% lower than the Laggards.
            </p>

            <p>
              It should be noted that focus on personal lines can drive success, IF the carrier is one of the largest. 2 of the largest 3 carriers that were excluded from the analysis because of their unique scale, also would fall in the winner bucket – Progressive with over 80% personal lines and Berkshire (including GEICO) with approximately 70% personal lines. Their success highlights the immense scale required to achieve growth and returns in personal lines.
            </p>

            <h3 className="cs-h3">2.&nbsp;&nbsp;&nbsp;&nbsp;State Diversification</h3>

            <p>
              Winners are more diversified across states. Winners distribute roughly 80% of their premium across an average of 15 states, compared to just 10 states for the Laggards.
            </p>

            <p>
              So, while a particular region does not drive success, diversifying to a sufficient number of states is a driver of better growth and returns. This is underscored when diving further into the Laggard bucket, which shows that 39% of Laggards have more than half of their premium from a single state, versus only 17% of Winners with half their premium concentrated in 1 state.
            </p>

            <h3 className="cs-h3">3.&nbsp;&nbsp;&nbsp;&nbsp;Public ownership</h3>

            <p>
              Perhaps not surprisingly, the ownership model is a meaningful differentiator. Among the Winners, 78% are public, compared to just 29% of the Laggards.
            </p>

            <p>
              Public carriers benefit from greater access to capital, which fuels growth through investments in technology, talent, and acquisitions. These companies also operate under heightened transparency and pressure from shareholders, which, on average, appears to drive disciplined capital allocation and sharper execution.
            </p>

            <p>
              This data shows that private ownership appears to be a real handicap to success. Yet, it is important to note that nearly one quarter of Winners are privately owned, clearly demonstrating that, despite this handicap, there are winning formulas available to privately held carriers.
            </p>
          </section>

          {/* Exhibit 3 */}
          <section className="cs-exhibit">
            <h3 className="cs-exhibit-title">Exhibit 3:  Factors to Success</h3>
            <div className="cs-exhibit-frame">
              <span className="cs-exhibit-placeholder-text">PNG goes here</span>
            </div>
          </section>

          <section className="cs-section">
            <h2 className="cs-h2">Strategic Choices within the Winner Group</h2>

            <p>
              The data shows us that there are clear strategic choices that can drive success – commitment to a customer and product focus, as well as state diversification. Then, disciplined governance can further enhance the chances of winning.
            </p>

            <p>
              Besides that, within the Winners, there appear to be 3 models for success broadly:
            </p>

            <ul>
              <li>A low expense model, which sacrifices losses in the spirit of low-touch/automated underwriting</li>
              <li>Low loss ratio model supported by higher expenses to fund expert labor cost, and</li>
              <li>A balanced approach with strong expense discipline coupled with a targeted aperture on risk/losses.</li>
            </ul>

            <p>
              The point is that there are different ways to win, but it takes strategic commitment and alignment behind that operating model to drive success.
            </p>
          </section>

          {/* Exhibit 4 */}
          <section className="cs-exhibit">
            <h3 className="cs-exhibit-title">Exhibit 4:  Different Models for Winners + Top 3 – Expense Ratio vs. Loss Ratio</h3>
            <div className="cs-exhibit-frame">
              <span className="cs-exhibit-placeholder-text">PNG goes here</span>
            </div>
          </section>

          <section className="cs-section">
            <p>
              Regardless of a carrier’s regional focus or current size, there are strategic choices that can create an advantage. The carriers that will be called “winners” in five years are making their moves today – where will your next work take you?
            </p>
          </section>

          <section className="cs-section">
            <h2 className="cs-h2">End Notes:</h2>

            <p>[1] 2015-2024</p>
            <p>[2] Excluding re-insurers, select carriers with insufficient data, and the largest 3 carriers</p>
            <p>[3] ROE sourced from S&amp;P Capital IQ | ROE = Net Income / Policyholders’ Surplus</p>
            <p>[4] Southwest = TX, OK, NM, AZ</p>
            <p>[5] Southeast = VA, WV, NC, SC, GA, FL, AL, MS, TN, KY, AR, LA</p>
          </section>

        </div>
      </div>
        </article>
      </div>
    </main>
  );
}
