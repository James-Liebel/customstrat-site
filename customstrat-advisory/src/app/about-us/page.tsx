'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Redirect from old /about-us URL to new /about URL
 * This preserves SEO value and prevents 404 for existing links
 */
export default function AboutUsRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/about');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <p className="text-gray-600">Redirecting to About page...</p>
        <noscript>
          <meta httpEquiv="refresh" content="0;url=/about" />
          <p>
            <a href="/about">Click here if not redirected</a>
          </p>
        </noscript>
      </div>
    </div>
  );
}
