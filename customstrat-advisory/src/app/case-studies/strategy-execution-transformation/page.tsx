import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Strategy Execution",
  alternates: {
    canonical: 'https://customstrat.com/services/strategy-execution/',
  },
};

/**
 * Redirect from the old /case-studies/strategy-execution-transformation URL to /services/strategy-execution/.
 *
 * This is a pre-migration URL from the previous site that Google still has
 * indexed and reports as a 404 in Search Console. Static export can't issue
 * server redirects, so a 0s meta refresh redirects instantly without
 * JavaScript, and the canonical consolidates search signals into the live
 * page. No `noindex` — it would conflict with the canonical (see /about-us).
 */
export default function StrategyExecutionTransformationRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/services/strategy-execution/" />
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Link
          href="/services/strategy-execution/"
          className="text-primary underline underline-offset-4"
        >
          Continue to the page
        </Link>
      </div>
    </>
  );
}
