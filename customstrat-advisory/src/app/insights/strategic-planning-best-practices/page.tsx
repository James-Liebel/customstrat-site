import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Strategic Planning Best Practices for Board Directors',
  alternates: {
    canonical: 'https://customstrat.com/insights/strategic-planning-board-directors/',
  },
};

/**
 * Redirect from the old /insights/strategic-planning-best-practices URL to the
 * current article at /insights/strategic-planning-board-directors.
 *
 * This is a pre-migration slug Google still has indexed. Static export can't
 * issue server redirects, so a 0s meta refresh redirects instantly without
 * JavaScript, and the canonical consolidates search signals into the live
 * article. No `noindex` — it would conflict with the canonical (see /about-us).
 */
export default function StrategicPlanningBestPracticesRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/insights/strategic-planning-board-directors/" />
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Link
          href="/insights/strategic-planning-board-directors/"
          className="text-primary underline underline-offset-4"
        >
          Continue to the article
        </Link>
      </div>
    </>
  );
}
