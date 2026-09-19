import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Banking on a Better Position After the Crisis",
  alternates: {
    canonical: 'https://customstrat.com/insights/banking-better-position-after-crisis/',
  },
};

/**
 * Redirect from the old /articles/banking-on-a-better-position-after-the-crisis URL to /insights/banking-better-position-after-crisis/.
 *
 * This is a pre-migration URL from the previous site that Google still has
 * indexed and reports as a 404 in Search Console. Static export can't issue
 * server redirects, so a 0s meta refresh redirects instantly without
 * JavaScript, and the canonical consolidates search signals into the live
 * page. No `noindex` — it would conflict with the canonical (see /about-us).
 */
export default function BankingBetterPositionRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/insights/banking-better-position-after-crisis/" />
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Link
          href="/insights/banking-better-position-after-crisis/"
          className="text-primary underline underline-offset-4"
        >
          Continue to the article
        </Link>
      </div>
    </>
  );
}
