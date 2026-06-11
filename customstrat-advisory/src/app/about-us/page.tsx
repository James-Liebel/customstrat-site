import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  robots: { index: false },
  alternates: { canonical: 'https://customstrat.com/about/' },
};

/**
 * Redirect from the old /about-us URL to /about.
 * Static export can't issue server redirects, so a meta refresh
 * handles it instantly without JavaScript.
 */
export default function AboutUsRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/about/" />
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Link href="/about" className="text-primary underline underline-offset-4">
          Continue to the About page
        </Link>
      </div>
    </>
  );
}
