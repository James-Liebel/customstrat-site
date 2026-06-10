'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Floating "back to top" button.
 * Appears after the user scrolls past ~600px; solid primary fill so it stays
 * visible over both the dark atmosphere canvas and white article surfaces.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-[90] w-11 h-11 rounded-full flex items-center justify-center
        bg-primary text-white border border-white/25 shadow-lg shadow-black/20
        transition-all duration-300 hover:bg-primary-light hover:-translate-y-0.5
        focus-visible:outline-none
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}
    >
      <ArrowUp size={18} />
    </button>
  );
}
