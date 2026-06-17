import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

/**
 * Custom 404. The app body background is the shared dark gradient, so the
 * default (white-body, dark-text) Next 404 would be unreadable — this gives a
 * dark, on-brand page instead.
 */
export default function NotFound() {
  return (
    <main className="cs-shell--editorial relative flex items-center justify-center px-6 py-24 text-center">
      <div className="relative z-10 max-w-xl">
        <p className="text-gold-light text-sm font-bold uppercase tracking-[0.2em] mb-4">
          Error 404
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-5">
          This page can&rsquo;t be found
        </h1>
        <p className="text-white/70 text-lg mb-10">
          The page you&rsquo;re looking for may have moved or no longer exists.
        </p>
        <Link href="/" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft size={18} aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
