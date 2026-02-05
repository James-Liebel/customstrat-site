'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Article {
  title: string;
  slug: string;
  date: string;
  categories: string[];
  excerpt: string;
  readTime: string;
}

// Article data - centralized for reuse
const allArticles: Article[] = [
  {
    title: 'Three Simple Strategy Tests Every Leadership Team Should Apply',
    slug: 'three-strategy-tests',
    date: 'February 2026',
    categories: ['Strategy', 'Banking', 'Insurance'],
    excerpt: 'How to ensure your strategy is grounded in customer choice, economic logic, and real commitment.',
    readTime: '6 min read',
  },
  {
    title: 'Relationship Banking Needs a Higher Standard',
    slug: 'relationship-banking-higher-standard',
    date: 'January 2026',
    categories: ['Strategy', 'Banking', 'Insurance'],
    excerpt: 'If banks want to call something a "relationship," they should hold it to the same standards people apply in real human relationships.',
    readTime: '7 min read',
  },
  {
    title: 'Secrets to Survival in Community Banking',
    slug: 'secrets-to-survival-community-banking',
    date: 'February 2025',
    categories: ['Banking', 'Strategy'],
    excerpt: 'What is and is NOT correlated to Success',
    readTime: '6 min read',
  },
  {
    title: "Beyond Scale: Winning Strategies for Today's P&C Insurers",
    slug: 'beyond-scale-pc-insurers',
    date: 'August 2025',
    categories: ['Insurance', 'Strategy'],
    excerpt: 'Insights from a decade of market data reveal what winners do differently',
    readTime: '5 min read',
  },
  {
    title: 'Linking Customer Experience to Strategy and Value',
    slug: 'linking-cx-to-strategy-value',
    date: 'November 2022',
    categories: ['Customer Experience'],
    excerpt: 'A practical framework for connecting CX investments to measurable business outcomes',
    readTime: '5 min read',
  },
  {
    title: 'Strategic Planning Best Practices for Board Directors',
    slug: 'strategic-planning-board-directors',
    date: 'September 2022',
    categories: ['Governance', 'Strategy'],
    excerpt: 'A practical guide for boards to steward the development of a winning corporate strategy',
    readTime: '5 min read',
  },
  {
    title: 'Integrated Planning Amidst the Headwinds',
    slug: 'integrated-planning-headwinds',
    date: 'September 2022',
    categories: ['Strategy'],
    excerpt: 'Building resilient strategic plans through prioritized investment and organizational accountability',
    readTime: '7 min read',
  },
  {
    title: "The Softer Side of Transformation - The 5 C's",
    slug: 'softer-side-of-transformation',
    date: 'August 2022',
    categories: ['Change Management'],
    excerpt: 'Why addressing commitment, culture, and communication is vital for sustainable change',
    readTime: '5 min read',
  },
  {
    title: 'A Strategic Planning Tune-Up for Uncertain Times',
    slug: 'strategic-planning-tune-up',
    date: 'August 2022',
    categories: ['Strategy'],
    excerpt: 'Adjusting your strategic approach to maintain competitive advantage in a volatile market',
    readTime: '5 min read',
  },
  {
    title: 'P&C Carriers - Preparing for the Stormy Seas',
    slug: 'pc-carriers-stormy-seas',
    date: 'July 2022',
    categories: ['Insurance'],
    excerpt: 'Five strategic priorities for insurers to navigate economic volatility and industry disruption',
    readTime: '5 min read',
  },
  {
    title: 'Contingency Planning for the Next Worst-Case Scenario',
    slug: 'contingency-planning-worst-case',
    date: 'April 2021',
    categories: ['Risk Management', 'Insurance'],
    excerpt: 'Building organizational resilience through comprehensive risk assessment and adaptive strategy',
    readTime: '4 min read',
  },
  {
    title: 'Banking on a Better Position After the Crisis',
    slug: 'banking-better-position-after-crisis',
    date: 'May 2020',
    categories: ['Banking'],
    excerpt: 'Strategic imperatives for banks to emerge stronger from short-term financial disruption',
    readTime: '5 min read',
  },
];

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
    <section className="mt-16 pt-12 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {relatedArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="group block p-6 rounded-2xl bg-gray-50 hover:bg-primary/5 border border-gray-100 hover:border-primary/20 transition-all duration-300"
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
            <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-2">
              {article.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2 mb-4">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-500">
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

// Export the articles list for use in insights page
export { allArticles };
export type { Article };
