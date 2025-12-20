import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import { siteContent } from '@/content/siteContent';

export default function HomePage() {
  const services = siteContent.home.services.items.map(item => ({ title: item }));
  const clients = siteContent.home.clients.items.map(item => ({ title: item }));

  return (
    <>
      <Hero
        title={siteContent.home.hero.title}
        subtitle={siteContent.home.hero.subtitle}
        image="/images/hero-home.jpg"
      />

      <ServicesGrid
        title={siteContent.home.services.title}
        services={services}
        columns={3}
      />

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center text-primary mb-12">{siteContent.home.clients.title}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-800">{client.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-primary mb-6">{siteContent.home.approach.title}</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {siteContent.home.approach.description}
          </p>
        </div>
      </section>

      <Testimonials testimonials={siteContent.testimonials} />

      <CTASection
        title="Ready to Transform Your Strategy?"
        description="Let's discuss how we can help your organization grow and succeed."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}