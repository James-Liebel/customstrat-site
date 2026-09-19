import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Secrets to Survival in Community Banking",
  alternates: {
    canonical: 'https://customstrat.com/insights/secrets-to-survival-community-banking/',
  },
};

/**
 * Redirect from the old /articles/secrets-to-survival-in-community-banking URL to /insights/secrets-to-survival-community-banking/.
 *
 * This is a pre-migration URL from the previous site that Google still has
 * indexed and reports as a 404 in Search Console. Static export can't issue
 * server redirects, so a 0s meta refresh redirects instantly without
 * JavaScript, and the canonical consolidates search signals into the live
 * page. No `noindex` — it would conflict with the canonical (see /about-us).
 */
export default function SecretsToSurvivalRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/insights/secrets-to-survival-community-banking/" />
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Link
          href="/insights/secrets-to-survival-community-banking/"
          className="text-primary underline underline-offset-4"
        >
          Continue to the article
        </Link>
      </div>
    </>
  );
}
