'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(scrollPercent, 100));
    };

    // Initial calculation
    updateProgress();

    // Add scroll listener
    window.addEventListener('scroll', updateProgress, { passive: true });

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  // Render into <body>, outside the page-transition wrapper. The wrapper holds a
  // transform mid-animation, which would otherwise re-anchor this position:fixed
  // bar to the wrapper instead of the viewport. Portaling keeps it viewport-fixed
  // at all times. (Null until mounted to avoid an SSR/hydration mismatch.)
  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed top-0 left-0 right-0 h-1 z-[200] bg-slate-200/50"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-primary via-accent to-gold transition-[width] duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>,
    document.body
  );
}
