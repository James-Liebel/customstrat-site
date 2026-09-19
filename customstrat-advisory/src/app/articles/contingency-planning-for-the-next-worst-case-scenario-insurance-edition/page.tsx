import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Contingency Planning for the Next Worst-Case Scenario",
  alternates: {
    canonical: 'https://customstrat.com/insights/contingency-planning-worst-case/',
  },
};

/**
 * Redirect from the old /articles/contingency-planning-for-the-next-worst-case-scenario-insurance-edition URL to /insights/contingency-planning-worst-case/.
 *
 * This is a pre-migration URL from the previous site that Google still has
 * indexed and reports as a 404 in Search Console. Static export can't issue
 * server redirects, so a 0s meta refresh redirects instantly without
 * JavaScript, and the canonical consolidates search signals into the live
 * page. No `noindex` — it would conflict with the canonical (see /about-us).
 */
export default function ContingencyPlanningRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/insights/contingency-planning-worst-case/" />
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Link
          href="/insights/contingency-planning-worst-case/"
          className="text-primary underline underline-offset-4"
        >
          Continue to the article
        </Link>
      </div>
    </>
  );
}
