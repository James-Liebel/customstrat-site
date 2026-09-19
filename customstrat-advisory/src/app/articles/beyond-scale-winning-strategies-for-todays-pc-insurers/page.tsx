import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Beyond Scale: Winning Strategies for Today's P&C Insurers",
  alternates: {
    canonical: 'https://customstrat.com/insights/beyond-scale-pc-insurers/',
  },
};

/**
 * Redirect from the old /articles/beyond-scale-winning-strategies-for-todays-pc-insurers URL to /insights/beyond-scale-pc-insurers/.
 *
 * This is a pre-migration URL from the previous site that Google still has
 * indexed and reports as a 404 in Search Console. Static export can't issue
 * server redirects, so a 0s meta refresh redirects instantly without
 * JavaScript, and the canonical consolidates search signals into the live
 * page. No `noindex` — it would conflict with the canonical (see /about-us).
 */
export default function BeyondScalePcInsurersRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/insights/beyond-scale-pc-insurers/" />
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Link
          href="/insights/beyond-scale-pc-insurers/"
          className="text-primary underline underline-offset-4"
        >
          Continue to the article
        </Link>
      </div>
    </>
  );
}
