'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const REVEAL_SELECTOR =
  '.cs-card, .cs-section-head, .cs-exhibit, .cs-shell--home .grid > div';
const MAX_TILT_DEG = 2.4;

/**
 * Site-wide progressive visual enhancements, all gated behind
 * prefers-reduced-motion and pointer capability:
 * - Scroll-reveal: elements matching REVEAL_SELECTOR fade/rise in once
 *   as they enter the viewport (staggered per scroll batch).
 * - Pointer tilt + glare on glass cards (fine pointers only).
 *
 * The matching CSS lives in globals.css under the `.fx` gate, which an
 * inline script in the root layout sets before first paint. Without JS
 * the gate never exists and everything renders statically.
 */
export default function VisualEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.classList.remove('fx');
      return;
    }
    root.classList.add('fx');

    // --- Scroll reveal ---
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
    );
    const io = new IntersectionObserver(
      (entries) => {
        let batch = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.style.setProperty('--fxd', `${Math.min(batch++, 7) * 80}ms`);
          el.classList.add('fx-in');
          io.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' }
    );
    targets.forEach((t) => io.observe(t));

    // --- Scroll-linked ambient parallax (consumed by .fx-diamond) ---
    let scrollRaf = 0;
    const onScroll = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        root.style.setProperty('--sy', String(window.scrollY));
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // --- Pointer tilt + glare on cards ---
    const cleanups: Array<() => void> = [];
    if (window.matchMedia('(pointer: fine)').matches) {
      document.querySelectorAll<HTMLElement>('.cs-card').forEach((card) => {
        let raf = 0;
        const move = (e: PointerEvent) => {
          if (raf) return;
          raf = requestAnimationFrame(() => {
            raf = 0;
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width;
            const py = (e.clientY - r.top) / r.height;
            card.style.setProperty('--ry', `${((px - 0.5) * 2 * MAX_TILT_DEG).toFixed(2)}deg`);
            card.style.setProperty('--rx', `${((0.5 - py) * 2 * MAX_TILT_DEG).toFixed(2)}deg`);
            card.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`);
            card.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`);
            card.classList.add('fx-tilting');
          });
        };
        const leave = () => {
          if (raf) cancelAnimationFrame(raf);
          raf = 0;
          card.style.setProperty('--rx', '0deg');
          card.style.setProperty('--ry', '0deg');
          card.classList.remove('fx-tilting');
        };
        card.addEventListener('pointermove', move);
        card.addEventListener('pointerleave', leave);
        cleanups.push(() => {
          card.removeEventListener('pointermove', move);
          card.removeEventListener('pointerleave', leave);
          leave();
        });
      });
    }

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
