import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "The Softer Side of Transformation - The 5 C's",
  alternates: {
    canonical: 'https://customstrat.com/insights/softer-side-of-transformation/',
  },
};

/**
 * Redirect from the old /insights/the-softer-side-of-transformation URL to the
 * current article at /insights/softer-side-of-transformation.
 *
 * This is a pre-migration slug Google still has indexed. Static export can't
 * issue server redirects, so a 0s meta refresh redirects instantly without
 * JavaScript, and the canonical consolidates search signals into the live
 * article. No `noindex` — it would conflict with the canonical (see /about-us).
 */
export default function SofterSideOfTransformationRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/insights/softer-side-of-transformation/" />
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Link
          href="/insights/softer-side-of-transformation/"
          className="text-primary underline underline-offset-4"
        >
          Continue to the article
        </Link>
      </div>
    </>
  );
}
