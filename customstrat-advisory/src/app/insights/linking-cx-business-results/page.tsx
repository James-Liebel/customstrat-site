import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Linking Customer Experience to Strategy and Value',
  alternates: {
    canonical: 'https://customstrat.com/insights/linking-cx-to-strategy-value/',
  },
};

/**
 * Redirect from the old /insights/linking-cx-business-results URL to the
 * current article at /insights/linking-cx-to-strategy-value.
 *
 * This is a pre-migration slug Google still has indexed. Static export can't
 * issue server redirects, so a 0s meta refresh redirects instantly without
 * JavaScript, and the canonical consolidates search signals into the live
 * article. No `noindex` — it would conflict with the canonical (see /about-us).
 */
export default function LinkingCxBusinessResultsRedirect() {
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
