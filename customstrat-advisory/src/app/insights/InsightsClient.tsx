'use client';

import * as React from 'react';
import Link from 'next/link';
import { Calendar, Clock, Tag, LayoutGrid, List, ArrowUpDown, Search } from 'lucide-react';

type Article = {
  title: string;
  slug: string;
  date: string; // e.g., "August 2025"
  category: string;
  excerpt: string;
  readTime: string;
};

type SortKey = 'newest' | 'oldest' | 'title';
type ViewMode = 'grid' | 'list';

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ');
}

const MONTH_INDEX: Record<string, number> = {
  january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
  july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
};

function dateScore(monthYear: string): number {
  // Parses "Month YYYY" safely. If format is unexpected, pushes it older.
  const parts = monthYear.trim().split(/\s+/);
  if (parts.length < 2) return -1;
  const month = MONTH_INDEX[parts[0].toLowerCase()];
  const year = Number(parts[1]);
  if (!Number.isFinite(year) || month === undefined) return -1;
  return year * 12 + month;
}

export default function InsightsClient({ articles }: { articles: Article[] }) {
  const categories = React.useMemo(
    () => Array.from(new Set(articles.map((a) => a.category))).sort(),
    [articles]
  );

  const [query, setQuery] = React.useState('');
  const [category, setCategory] = React.useState<string>('All');
  const [sort, setSort] = React.useState<SortKey>('newest');
  const [view, setView] = React.useState<ViewMode>('grid');

  // Persist view preference (nice “premium” touch)
  React.useEffect(() => {
    const saved = window.localStorage.getItem('insights:view');
    if (saved === 'grid' || saved === 'list') setView(saved);
  }, []);
  React.useEffect(() => {
    window.localStorage.setItem('insights:view', view);
  }, [view]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();

    const base = articles.filter((a) => {
      const matchesCategory = category === 'All' ? true : a.category === category;
      const matchesQuery =
        q.length === 0
          ? true
          : (a.title + ' ' + a.excerpt + ' ' + a.category).toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });

    const sorted = base.slice().sort((a, b) => {
      if (sort === 'title') return a.title.localeCompare(b.title);
      const sa = dateScore(a.date);
      const sb = dateScore(b.date);
      if (sort === 'newest') return sb - sa;
      return sa - sb; // oldest
    });

    return sorted;
  }, [articles, query, category, sort]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Top bar */}
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-[11px] tracking-[0.28em] uppercase text-gray-500">
            Research & Perspectives
          </div>
          <div className="mt-2 h-px w-40 bg-gradient-to-r from-primary to-transparent" />
          <div className="mt-5 text-3xl font-semibold text-gray-900 leading-snug">
            Articles
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {/* Search */}
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              className={cn(
                'w-full sm:w-[320px] rounded-xl border border-gray-200 bg-white',
                'pl-9 pr-3 py-2 text-[14px] text-gray-800 placeholder:text-gray-400',
                'shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20'
              )}
            />
          </div>

          {/* View toggle */}
          <div className="inline-flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setView('grid')}
              className={cn(
                'inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[12px] font-medium',
                view === 'grid' ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900'
              )}
            >
              <LayoutGrid size={16} />
              Grid
            </button>
            <button
              type="button"
              onClick={() => setView('list')}
              className={cn(
                'inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[12px] font-medium',
                view === 'list' ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900'
              )}
            >
              <List size={16} />
              List
            </button>
          </div>
        </div>
      </div>

      {/* Filters row */}
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          <Chip active={category === 'All'} onClick={() => setCategory('All')} label="All" />
          {categories.map((c) => (
            <Chip key={c} active={category === c} onClick={() => setCategory(c)} label={c} />
          ))}
        </div>

        <div className="flex items-center gap-2 text-[12px] text-gray-600">
          <ArrowUpDown size={16} className="text-gray-400" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-[12px] shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="newest">Sort: Newest</option>
            <option value="oldest">Sort: Oldest</option>
            <option value="title">Sort: Title</option>
          </select>

          <div className="ml-2 text-gray-500">
            Showing <span className="font-semibold text-gray-900">{filtered.length}</span> / {articles.length}
          </div>
        </div>
      </div>

      {/* Featured */}
      {featured ? (
        <Reveal>
          <Link href={`/insights/${encodeURIComponent(featured.slug)}`} className="group block mb-10">
            <article
              className={cn(
                'relative overflow-hidden rounded-3xl border border-gray-200 bg-white',
                'shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg'
              )}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary" />

              {/* Corner brackets */}
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute left-5 top-5 h-3 w-3 border-l border-t border-primary/30" />
                <div className="absolute right-5 top-5 h-3 w-3 border-r border-t border-primary/30" />
                <div className="absolute left-5 bottom-5 h-3 w-3 border-l border-b border-primary/30" />
                <div className="absolute right-5 bottom-5 h-3 w-3 border-r border-b border-primary/30" />
              </div>

              {/* Spotlight */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'radial-gradient(720px 360px at 80% 10%, rgba(10,102,194,0.08), transparent 60%)',
                }}
              />

              <div className="relative z-10 p-8 md:p-10 lg:p-12">
                <MetaRow category={featured.category} date={featured.date} readTime={featured.readTime} />

                <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>

                <p className="text-gray-700 leading-relaxed text-lg max-w-4xl">
                  {featured.excerpt}
                </p>

                <div className="mt-8 inline-flex items-center gap-3 text-primary font-medium">
                  <span className="relative">
                    Read Article
                    <span className="absolute left-0 -bottom-1 h-px w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </article>
          </Link>
        </Reveal>
      ) : (
        <div className="rounded-2xl border border-gray-200 bg-white p-10 text-gray-700 shadow-sm">
          No results. Try a different search or category.
        </div>
      )}

      {/* List / Grid */}
      {view === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rest.map((a) => (
            <Reveal key={a.slug}>
              <ArticleCardGrid a={a} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="space-y-5">
          {rest.map((a) => (
            <Reveal key={a.slug}>
              <ArticleCardList a={a} />
            </Reveal>
          ))}
        </div>
      )}

      {/* Footer CTA */}
      <div className="mt-16 rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-10 shadow-soft">
        <div className="text-[11px] tracking-[0.28em] uppercase text-gray-500">Stay Informed</div>
        <div className="mt-2 h-px w-28 bg-gradient-to-r from-primary to-transparent" />
        <div className="mt-5 text-2xl font-semibold text-gray-900">Interested in receiving insights and updates?</div>
        <p className="mt-3 text-gray-700 max-w-2xl leading-relaxed">
          Contact us to learn more about our thought leadership and speaking engagements.
        </p>
        <div className="mt-7">
          <Link href="/contact" className="btn-primary inline-block">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

function Chip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[12px] transition-colors',
        active
          ? 'border-gray-900 bg-gray-900 text-white'
          : 'border-gray-200 bg-white text-gray-600 hover:text-gray-900'
      )}
    >
      <Tag size={14} className={cn(active ? 'text-white/80' : 'text-gray-400')} />
      {label}
    </button>
  );
}

function MetaRow({ category, date, readTime }: { category: string; date: string; readTime: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-gray-500 mb-5">
      <span className="inline-flex items-center gap-2">
        <Tag size={14} className="text-gray-400" />
        {category}
      </span>
      <span className="inline-flex items-center gap-2">
        <Calendar size={14} className="text-gray-400" />
        {/* display the provided string; do not parse */}
        <time>{date}</time>
      </span>
      <span className="inline-flex items-center gap-2">
        <Clock size={14} className="text-gray-400" />
        {readTime}
      </span>
    </div>
  );
}

function ArticleCardGrid({ a }: { a: Article }) {
  return (
    <Link href={`/insights/${encodeURIComponent(a.slug)}`} className="group block">
      <article
        className={cn(
          'relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8',
          'shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-md'
        )}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              'radial-gradient(520px 240px at 80% 0%, rgba(10,102,194,0.06), transparent 62%)',
          }}
        />

        <MetaRow category={a.category} date={a.date} readTime={a.readTime} />
        <h3 className="text-2xl font-semibold text-gray-900 mb-3 leading-snug group-hover:text-primary transition-colors">
          {a.title}
        </h3>
        <p className="text-gray-700 leading-relaxed">{a.excerpt}</p>

        <div className="mt-6 inline-flex items-center gap-3 text-primary font-medium">
          <span className="relative">
            Read Article
            <span className="absolute left-0 -bottom-1 h-px w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </article>
    </Link>
  );
}

function ArticleCardList({ a }: { a: Article }) {
  return (
    <Link href={`/insights/${encodeURIComponent(a.slug)}`} className="group block">
      <article
        className={cn(
          'relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8',
          'shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-md'
        )}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-primary opacity-30" />
        <div className="pl-3">
          <MetaRow category={a.category} date={a.date} readTime={a.readTime} />
          <h3 className="text-2xl font-semibold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors">
            {a.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{a.excerpt}</p>
        </div>
      </article>
    </Link>
  );
}

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.14, rootMargin: '0px 0px -10% 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,transform] duration-700',
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      )}
    >
      {children}
    </div>
  );
}
