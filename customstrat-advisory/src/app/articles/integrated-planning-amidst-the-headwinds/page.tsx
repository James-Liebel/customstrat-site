import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Integrated Planning Amidst the Headwinds",
  alternates: {
    canonical: 'https://customstrat.com/insights/integrated-planning-headwinds/',
  },
};

/**
 * Redirect from the old /articles/integrated-planning-amidst-the-headwinds URL to /insights/integrated-planning-headwinds/.
 *
 * This is a pre-migration URL from the previous site that Google still has
 * indexed and reports as a 404 in Search Console. Static export can't issue
 * server redirects, so a 0s meta refresh redirects instantly without
 * JavaScript, and the canonical consolidates search signals into the live
 * page. No `noindex` — it would conflict with the canonical (see /about-us).
 */
export default function IntegratedPlanningHeadwindsRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/insights/integrated-planning-headwinds/" />
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Link
          href="/insights/integrated-planning-headwinds/"
          className="text-primary underline underline-offset-4"
        >
          Continue to the article
        </Link>
      </div>
    </>
  );
}
