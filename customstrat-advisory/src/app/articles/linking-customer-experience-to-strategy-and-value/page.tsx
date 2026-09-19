import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Linking Customer Experience to Strategy and Value",
  alternates: {
    canonical: 'https://customstrat.com/insights/linking-cx-to-strategy-value/',
  },
};

/**
 * Redirect from the old /articles/linking-customer-experience-to-strategy-and-value URL to /insights/linking-cx-to-strategy-value/.
 *
 * This is a pre-migration URL from the previous site that Google still has
 * indexed and reports as a 404 in Search Console. Static export can't issue
 * server redirects, so a 0s meta refresh redirects instantly without
 * JavaScript, and the canonical consolidates search signals into the live
 * page. No `noindex` — it would conflict with the canonical (see /about-us).
 */
export default function LinkingCxStrategyValueRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/insights/linking-cx-to-strategy-value/" />
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Link
          href="/insights/linking-cx-to-strategy-value/"
          className="text-primary underline underline-offset-4"
        >
          Continue to the article
        </Link>
      </div>
    </>
  );
}
