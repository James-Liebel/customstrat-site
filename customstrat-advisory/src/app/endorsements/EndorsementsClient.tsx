'use client';

import * as React from 'react';

type Testimonial = {
  quote: string;
  author: string;
  company?: string;
};

export default function EndorsementsClient({ testimonials }: { testimonials: Testimonial[] }) {
  // Split into columns to ensure vertical isolation
  const leftCol = testimonials.filter((_, i) => i % 2 === 0);
  const rightCol = testimonials.filter((_, i) => i % 2 !== 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      <div className="space-y-10 flex flex-col">
        {leftCol.map((t, i) => {
          const originalIndex = testimonials.indexOf(t);
          return (
            <EndorsementCard
              key={originalIndex}
              index={originalIndex}
              quote={t.quote}
              author={t.author}
              company={t.company}
            />
          );
        })}
      </div>
      <div className="space-y-10 flex flex-col">
        {rightCol.map((t, i) => {
          const originalIndex = testimonials.indexOf(t);
          return (
            <EndorsementCard
              key={originalIndex}
              index={originalIndex}
              quote={t.quote}
              author={t.author}
              company={t.company}
            />
          );
        })}
      </div>
    </div>
  );
}

function EndorsementCard({ quote, author, company, index }: { quote: string; author: string; company?: string; index: number }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const isLong = quote.length > 100;
  const displayQuote = isLong && !isExpanded ? quote.substring(0, 80) + '...' : quote;

  return (
    <div
      className="cs-card p-10 relative overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:border-white/20 animate-[fadeInUp_800ms_ease-out_both] h-fit"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute top-6 right-8 text-7xl text-white/5 font-serif pointer-events-none select-none">“</div>
      <div className="relative z-10 h-full flex flex-col">
        <p className="text-xl md:text-2xl text-white/90 italic font-light leading-relaxed mb-8 flex-grow">
          "{displayQuote}"
        </p>

        {isLong && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mb-8 text-gold-light font-black text-[11px] uppercase tracking-[0.2em] hover:text-white transition-colors text-left"
          >
            {isExpanded ? 'Less' : 'Read Full Endorsement'}
          </button>
        )}

        <div className="pt-8 border-t border-white/10 flex items-center justify-between">
          <div>
            <div className="font-bold text-white text-lg">{author}</div>
            {company && <div className="text-white/95 text-[11px] uppercase tracking-widest mt-1">{company}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
