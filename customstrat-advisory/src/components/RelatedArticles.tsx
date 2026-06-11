'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { allArticles, type Article } from '@/content/articles';

interface RelatedArticlesProps {
  currentSlug: string;
  currentCategories: string[];
  maxArticles?: number;
}

export default function RelatedArticles({ 
  currentSlug, 
  currentCategories, 
  maxArticles = 3 
}: RelatedArticlesProps) {
  // Find related articles based on shared categories
  const relatedArticles = allArticles
    .filter(article => article.slug !== currentSlug)
    .map(article => {
      const sharedCategories = article.categories.filter(cat => 
        currentCategories.includes(cat)
      );
      return { ...article, relevanceScore: sharedCategories.length };
    })
    .filter(article => article.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, maxArticles);

  if (relatedArticles.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {relatedArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="group block p-6 rounded-2xl bg-slate-50 hover:bg-primary/5 border border-slate-100 hover:border-primary/20 transition-all duration-300"
          >
            <div className="flex flex-wrap gap-2 mb-3">
              {article.categories.slice(0, 2).map((cat) => (
                <span
                  key={cat}
                  className="text-[10px] font-bold uppercase tracking-wider text-primary/70 bg-primary/10 px-2 py-0.5 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 mb-2">
              {article.title}
            </h3>
            <p className="text-sm text-slate-600 line-clamp-2 mb-4">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>{article.readTime}</span>
              <ArrowRight 
                size={14} 
                className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" 
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
