import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Insights",
  alternates: {
    canonical: 'https://customstrat.com/insights/',
  },
};

/**
 * Redirect from the old /articles URL to /insights/.
 *
 * This is a pre-migration URL from the previous site that Google still has
 * indexed and reports as a 404 in Search Console. Static export can't issue
 * server redirects, so a 0s meta refresh redirects instantly without
 * JavaScript, and the canonical consolidates search signals into the live
 * page. No `noindex` — it would conflict with the canonical (see /about-us).
 */
export default function ArticlesIndexRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/insights/" />
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Link
          href="/insights/"
          className="text-primary underline underline-offset-4"
        >
          Continue to Insights
        </Link>
      </div>
    </>
  );
}
