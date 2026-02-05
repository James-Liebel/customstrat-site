'use client';

import * as React from 'react';
import Link from 'next/link';
import { Calendar, Clock, Tag, LayoutGrid, List, ArrowUpDown, Search } from 'lucide-react';

type Article = {
  title: string;
  slug: string;
  date: string;
  categories: string[];
  excerpt: string;
  readTime: string;
};

type SortKey = 'newest' | 'oldest' | 'title';
type ViewMode = 'grid' | 'list';

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ');
}

export default function InsightsClient({ articles }: { articles: Article[] }) {
  const categories = React.useMemo(() => Array.from(new Set(articles.flatMap(a => a.categories))).sort(), [articles]);
  const [query, setQuery] = React.useState('');
  const [category, setCategory] = React.useState('All');
  const [sort, setSort] = React.useState<SortKey>('newest');
  const [view, setView] = React.useState<ViewMode>('list');

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = articles.filter(a => {
      const matchesCategory = category === 'All' ? true : a.categories.includes(category);
      const matchesQuery = q.length === 0 ? true : (a.title + ' ' + a.excerpt).toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
    return base.sort((a, b) => {
      if (sort === 'title') return a.title.localeCompare(b.title);
      // Preserve manual/featured order from page.tsx when 'newest' or 'oldest' aren't strictly date-comparable
      return 0;
    });
  }, [articles, query, category, sort]);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="space-y-2">
          <div className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-black">Library</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Insights</h1>
          <div className="h-1 w-20 bg-gold rounded-full" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative group w-full sm:w-[300px]">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search research..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all backdrop-blur-md"
            />
          </div>
          <div className="flex bg-white/5 border border-white/10 p-1 rounded-2xl backdrop-blur-md">
            <button onClick={() => setView('grid')} className={cn("px-4 py-2 rounded-xl text-xs font-bold transition-all", view === 'grid' ? "bg-white text-primary" : "text-white/50 hover:text-white")}><LayoutGrid size={14} /></button>
            <button onClick={() => setView('list')} className={cn("px-4 py-2 rounded-xl text-xs font-bold transition-all", view === 'list' ? "bg-white text-primary" : "text-white/50 hover:text-white")}><List size={14} /></button>
          </div>
        </div>
      </div>

      <div className="mb-12 flex flex-wrap gap-2">
        {['All', ...categories].map(c => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={cn(
              "px-5 py-2 rounded-full text-[12px] font-bold transition-all border-2 backdrop-blur-md",
              category === c
                ? "bg-gold border-gold text-primary shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                : "bg-white/5 border-gold/80 text-white hover:border-gold hover:text-white hover:bg-white/10"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className={cn(view === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6")}>
        {filtered.map((a, index) => (
          <Link key={a.slug} href={`/insights/${a.slug}`} className="group block">
            <article 
              className="cs-card h-full p-8 border border-white/10 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(201,169,97,0.15)] relative overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Subtle gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6 flex flex-wrap items-center justify-between text-[11px] font-bold text-white/40 tracking-wider gap-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-2"><Tag size={12} className="text-gold" /> {a.categories[0]}</span>
                    <span className="flex items-center gap-2"><Calendar size={12} className="text-gold" /> {a.date}</span>
                  </div>
                  <span className="flex items-center gap-1"><Clock size={12} /> {a.readTime}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-gold-light transition-colors leading-tight">{a.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8 line-clamp-3">{a.excerpt}</p>
                <div className="flex items-center gap-3 text-gold-light font-black text-xs uppercase tracking-widest mt-auto">
                  Read Full Insight <span className="group-hover:translate-x-2 transition-transform inline-block">→</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
