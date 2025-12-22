// src/app/insights/page.tsx
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import { Calendar } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Insights and thought leadership on strategy, customer experience, and transformation.',
};

const articles = [
  {
    title: "Beyond Scale: Winning Strategies for Today's P&C Insurers",
    slug: "beyond-scale-pc-insurers",
    date: "August 2025",
    category: "Insurance Strategy",
    excerpt: "How mid-sized carriers can compete effectively through specialized expertise, superior customer experience, and strategic partnerships rather than pure scale.",
    readTime: "8 min read",
  },
  {
    title: "Secrets to Survival in Community Banking",
    slug: "secrets-to-survival-community-banking",
    date: "February 2025",
    category: "Banking",
    excerpt: "Essential strategies for community banks to thrive in an era of consolidation, focusing on relationship banking, local market expertise, and digital transformation.",
    readTime: "7 min read",
  },
  {
    title: "Linking Customer Experience to Strategy and Value",
    slug: "linking-cx-to-strategy-value",
    date: "November 2022",
    category: "Customer Experience",
    excerpt: "A practical framework for connecting CX investments to measurable business outcomes and demonstrating the ROI of customer experience initiatives.",
    readTime: "10 min read",
  },
  {
    title: "Strategic Planning Best Practices for Board Directors",
    slug: "strategic-planning-board-directors",
    date: "September 2022",
    category: "Governance",
    excerpt: "Essential elements of effective strategic planning in today's complex financial environment, with key questions for board oversight and strategy validation.",
    readTime: "9 min read",
  },
  {
    title: "Integrated Planning Amidst the Headwinds",
    slug: "integrated-planning-headwinds",
    date: "September 2022",
    category: "Strategy",
    excerpt: "How to build resilient strategic plans that adapt to changing market conditions through assumption-based planning and agile execution frameworks.",
    readTime: "8 min read",
  },
  {
    title: "The Softer Side of Transformation - The 5 C's",
    slug: "softer-side-of-transformation",
    date: "August 2022",
    category: "Change Management",
    excerpt: "Why culture and change management are critical success factors in business transformation. Learn about the 5Cs approach: Commitment, Capabilities, Culture, Communication, and Change management.",
    readTime: "12 min read",
  },
  {
    title: "A Strategic Planning Tune-Up for Uncertain Times",
    slug: "strategic-planning-tune-up",
    date: "August 2022",
    category: "Strategy",
    excerpt: "Adjusting your strategic planning approach for global uncertainty through scenario planning, assumption testing, and flexible execution models.",
    readTime: "9 min read",
  },
  {
    title: "P&C Carriers - Preparing for the Stormy Seas",
    slug: "pc-carriers-stormy-seas",
    date: "July 2022",
    category: "Insurance Strategy",
    excerpt: "Five priorities to guide Property & Casualty insurance carriers through challenging market conditions while building long-term strategic positioning.",
    readTime: "10 min read",
  },
  {
    title: "Contingency Planning for the Next Worst-Case Scenario",
    slug: "contingency-planning-worst-case",
    date: "April 2021",
    category: "Risk Management",
    excerpt: "Building organizational resilience through comprehensive contingency planning, stress testing, and adaptive strategy frameworks for financial institutions.",
    readTime: "11 min read",
  },
  {
    title: "Banking on a Better Position After the Crisis",
    slug: "banking-better-position-after-crisis",
    date: "May 2020",
    category: "Banking",
    excerpt: "Strategic imperatives for banks emerging from crisis: strengthening core capabilities, accelerating digital transformation, and repositioning for growth.",
    readTime: "8 min read",
  },
];

export default function InsightsPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Hero title="Articles" image="/images/hero-home.jpg" />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="block group"
              >
                <article className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-soft-lg transition-all duration-500 relative overflow-hidden">
                  {/* Animated accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Decorative corner accent */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/5 to-primary/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3 group-hover:text-gradient transition-all duration-300">
                      {article.title}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-500 mb-4">
                      <Calendar size={16} />
                      <time dateTime={article.date}>
                        {formatDate(article.date)}
                      </time>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom text-center">
          <h2 className="text-primary mb-6">Stay Informed</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Interested in receiving insights and updates? Contact us to learn more about our
            thought leadership and speaking engagements.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
