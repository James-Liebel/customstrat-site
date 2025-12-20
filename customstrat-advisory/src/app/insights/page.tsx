import { Metadata } from 'next';
import Hero from '@/components/Hero';
import { siteContent } from '@/content/siteContent';
import { Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Insights and thought leadership on strategy, customer experience, and transformation.',
};

export default function InsightsPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <>
      <Hero
        title={siteContent.insights.hero.title}
        image="/images/hero-home.jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {siteContent.insights.articles.map((article, index) => (
              <article
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <Calendar size={16} />
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                <button className="text-primary font-semibold hover:text-primary-dark transition-colors">
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-primary mb-6">Stay Informed</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Interested in receiving insights and updates? Contact us to learn more about our 
            thought leadership and speaking engagements.
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}