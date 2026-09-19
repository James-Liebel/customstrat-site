import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "A Strategic Planning Tune-Up for Uncertain Times",
  alternates: {
    canonical: 'https://customstrat.com/insights/strategic-planning-tune-up/',
  },
};

/**
 * Redirect from the old /articles/a-strategic-planning-tune-up-for-uncertain-times URL to /insights/strategic-planning-tune-up/.
 *
 * This is a pre-migration URL from the previous site that Google still has
 * indexed and reports as a 404 in Search Console. Static export can't issue
 * server redirects, so a 0s meta refresh redirects instantly without
 * JavaScript, and the canonical consolidates search signals into the live
 * page. No `noindex` — it would conflict with the canonical (see /about-us).
 */
export default function StrategicPlanningTuneUpRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/insights/strategic-planning-tune-up/" />
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Link
          href="/insights/strategic-planning-tune-up/"
          className="text-primary underline underline-offset-4"
        >
          Continue to the article
        </Link>
      </div>
    </>
  );
}
