'use client';

import * as React from 'react';

type Testimonial = {
  quote: string;
  author: string;
  company?: string;
};

export default function EndorsementsClient({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {testimonials.map((t, i) => (
        <EndorsementCard
          key={`${t.author}-${i}`}
          index={i}
          quote={t.quote}
          author={t.author}
          company={t.company}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Individual Card                                                     */
/* ------------------------------------------------------------------ */

function EndorsementCard({
  quote,
  author,
  company,
  index,
}: {
  quote: string;
  author: string;
  company?: string;
  index: number;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  // Scroll-in reveal
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Cursor spotlight + tilt
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;

    el.style.setProperty('--mx', `${x * 100}%`);
    el.style.setProperty('--my', `${y * 100}%`);
    el.style.setProperty('--rx', `${(y - 0.5) * -6}deg`);
    el.style.setProperty('--ry', `${(x - 0.5) * 8}deg`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', `0deg`);
    el.style.setProperty('--ry', `0deg`);
    el.style.setProperty('--mx', `50%`);
    el.style.setProperty('--my', `50%`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={[
        'relative overflow-hidden rounded-2xl bg-white border-l-4 border-primary',
        'shadow-soft transition-[transform,box-shadow,opacity] duration-500',
        'hover:-translate-y-1 hover:shadow-soft-md',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
      ].join(' ')}
      style={{
        transitionDelay: `${Math.min(index * 90, 450)}ms`,
        transform:
          'perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))',
      }}
    >
      {/* Decorative quote */}
      <div
        aria-hidden
        className="absolute -top-8 -right-6 text-[140px] text-primary/10 font-serif leading-none pointer-events-none"
      >
        “
      </div>

      {/* Spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(380px 240px at var(--mx,50%) var(--my,50%), rgba(10,102,194,0.10), transparent 60%)',
        }}
      />

      {/* Signal lines */}
      <div className="absolute left-6 right-6 top-6">
        <div className="h-px bg-gradient-to-r from-primary/40 to-transparent" />
        <div className="mt-2 flex gap-2">
          <div className="h-px w-10 bg-primary/30" />
          <div className="h-px w-6 bg-gray-200" />
        </div>
      </div>

      <div className="relative z-10 p-8 lg:p-12">
        <p className="text-xl lg:text-2xl text-gray-700 italic leading-relaxed mb-8">
          "{quote}"
        </p>

        <div className="pt-6 border-t border-gray-200 text-right">
          <div className="font-semibold text-gray-900 text-lg">{author}</div>
          {company && <div className="text-gray-600">{company}</div>}
        </div>
      </div>
    </div>
  );
}
