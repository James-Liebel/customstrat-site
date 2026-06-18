'use client';

import * as React from 'react';

/**
 * Per-navigation page transition.
 *
 * Unlike layout.tsx (which stays mounted across navigations), a template
 * re-mounts on every route change — so this wrapper replays its CSS enter
 * animation each time the user navigates. The shared chrome (Header/Footer in
 * layout.tsx) never moves; only the page body fades and rises into place, which
 * reads well because every page shares the same structure up top.
 *
 * While the entrance plays, the wrapper carries `cs-page-entering`. That makes
 * the per-element scroll-reveal (VisualEffects' fx-rise) resolve instantly for
 * anything already in view, so above-the-fold content arrives as one cohesive
 * slide instead of double-animating against the page-level motion. The flag is
 * cleared when the entrance finishes, with a timeout fallback for the
 * reduced-motion path (where the CSS animation — and its end event — is gone).
 */
export default function Template({ children }: { children: React.ReactNode }) {
    const ref = React.useRef<HTMLDivElement>(null);
    const [entering, setEntering] = React.useState(true);

    React.useEffect(() => {
        const fallback = window.setTimeout(() => setEntering(false), 850);
        return () => window.clearTimeout(fallback);
    }, []);

    const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
        // Ignore fx-rise events bubbling up from child reveals — only the
        // wrapper's own page-enter animation should clear the flag.
        if (e.target === ref.current && e.animationName.startsWith('cs-page-enter')) {
            setEntering(false);
        }
    };

    return (
        <div
            ref={ref}
            className={`cs-page-enter${entering ? ' cs-page-entering' : ''}`}
            onAnimationEnd={handleAnimationEnd}
        >
            {children}
        </div>
    );
}
