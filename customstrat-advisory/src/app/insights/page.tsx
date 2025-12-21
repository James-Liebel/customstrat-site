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
    title: "The Softer Side of Transformation",
    slug: "the-softer-side-of-transformation",
    date: "2024-04-12",
    excerpt:
      "Why culture and change management are critical success factors in business transformation. Learn about the 5Cs approach: Commitment, Capabilities, Culture, Communication, and Change management.",
  },
  {
    title: "A Strategic Planning Tune-Up for Uncertain Times",
    slug: "a-strategic-planning-tune-up-for-uncertain-times",
    date: "2024-05-18",
    excerpt:
      "How to build resilient strategic plans that adapt to changing market conditions through assumption-based planning and agile execution.",
  },
  {
    title: "Strategic Planning Best Practices for Board Directors",
    slug: "strategic-planning-best-practices-for-board-directors",
    date: "2024-06-05",
    excerpt:
      "Essential elements of effective strategic planning in today's complex financial environment, with key questions for board oversight.",
  },
  {
    title: "P&C Carriers – Preparing for the Stormy Seas",
    slug: "pc-carriers-preparing-for-the-stormy-seas",
    date: "2024-07-10",
    excerpt:
      "Five priorities to guide Property & Casualty insurance carriers through challenging market conditions while building long-term strategy.",
  },
  {
    title: "Linking Customer Experience to Business Results",
    slug: "linking-customer-experience-to-business-results",
    date: "2024-08-22",
    excerpt:
      "A practical framework for connecting CX investments to measurable business outcomes and demonstrating the ROI of customer experience initiatives.",
  },
  {
    title: "Beyond Scale: Winning Strategies for Mid-Sized Banks",
    slug: "beyond-scale-winning-strategies-for-mid-sized-banks",
    date: "2024-09-15",
    excerpt:
      "How regional and community banks can compete effectively against larger institutions through differentiation and customer focus.",
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
