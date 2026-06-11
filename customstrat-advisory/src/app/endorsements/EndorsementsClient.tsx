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

// Only quotes longer than this get a Read More toggle; shorter ones show in full.
const TRUNCATE_THRESHOLD = 360;

// Cut at the last sentence end before `limit`; fall back to a word boundary.
function truncateQuote(quote: string, limit = 320): string {
  const slice = quote.slice(0, limit);
  const sentenceEnd = Math.max(
    slice.lastIndexOf('. '),
    slice.lastIndexOf('! '),
    slice.lastIndexOf('? ')
  );
  if (sentenceEnd > 120) return slice.slice(0, sentenceEnd + 1);
  const wordEnd = slice.lastIndexOf(' ');
  return slice.slice(0, wordEnd > 0 ? wordEnd : limit) + '…';
}

function EndorsementCard({ quote, author, company, index }: { quote: string; author: string; company?: string; index: number }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const isLong = quote.length > TRUNCATE_THRESHOLD;
  const displayQuote = isLong && !isExpanded ? truncateQuote(quote) : quote;

  return (
    <div
      className="cs-card p-10 relative overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 animate-[fadeInUp_800ms_ease-out_both] h-fit"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute top-6 right-8 text-7xl text-white/5 font-serif pointer-events-none select-none">“</div>
      <div className="relative z-10 h-full flex flex-col">
        <p className="text-xl md:text-2xl text-white/90 italic font-light leading-relaxed mb-8 flex-grow">
          &ldquo;{displayQuote}&rdquo;
        </p>

        {isLong && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mb-8 text-gold-light font-semibold text-sm hover:text-white transition-colors text-left"
          >
            {isExpanded ? 'Show less' : 'Read full endorsement'}
          </button>
        )}

        <div className="pt-8 border-t border-white/10 flex items-center justify-between">
          <div>
            <div className="font-bold text-white text-lg">{author}</div>
            {company && <div className="text-white/95 text-[11px] uppercase tracking-wider mt-1">{company}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
