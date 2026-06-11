'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Search } from 'lucide-react';
import type { Article } from '@/content/articles';

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ');
}

export default function InsightsClient({ articles }: { articles: Article[] }) {
  const categories = React.useMemo(() => Array.from(new Set(articles.flatMap(a => a.categories))).sort(), [articles]);
  const [query, setQuery] = React.useState('');
  const [category, setCategory] = React.useState('All');

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = articles.filter(a => {
      const matchesCategory = category === 'All' ? true : a.categories.includes(category);
      const matchesQuery = q.length === 0 ? true : (a.title + ' ' + a.excerpt).toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
    return [...base].sort((a, b) => b.dateValue - a.dateValue); // newest first
  }, [articles, query, category]);

  return (
    <div>
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Articles</h2>
          <div className="h-1 w-20 bg-gold rounded-full" />
        </div>

        <div className="relative w-full sm:w-[300px]">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search articles..."
            aria-label="Search articles"
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-2.5 text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all backdrop-blur-md"
          />
        </div>
      </div>

      <div className="mb-12 flex flex-wrap gap-2">
        {['All', ...categories].map(c => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={cn(
              "px-5 py-2 rounded-full text-[12px] font-bold transition-all duration-200 border backdrop-blur-md",
              category === c
                ? "bg-gold border-gold text-primary"
                : "bg-white/5 border-white/15 text-white/75 hover:border-gold/60 hover:text-white hover:bg-white/10"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filtered.map((a) => (
          <Link key={a.slug} href={`/insights/${a.slug}`} className="group block">
            <article className="cs-card h-full p-8 border border-white/10 hover:border-gold/40 transition-all duration-300 ease-out hover:-translate-y-1">
              <div className="mb-4 flex flex-wrap gap-2">
                {a.categories.map(cat => (
                  <span
                    key={cat}
                    className={cn(
                      "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      category !== 'All' && cat === category
                        ? "bg-gold text-primary"
                        : "bg-white/10 text-white/75"
                    )}
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <div className="mb-6 flex flex-wrap items-center justify-between text-xs font-medium text-white/70 gap-4">
                <span className="flex items-center gap-2"><Calendar size={12} className="text-gold" aria-hidden="true" /> {a.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} aria-hidden="true" /> {a.readTime}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">{a.title}</h3>
              <p className="text-white/75 text-sm leading-relaxed mb-8 line-clamp-3">{a.excerpt}</p>
              <div className="flex items-center gap-2 text-gold-light font-semibold text-sm">
                Read full insight <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
