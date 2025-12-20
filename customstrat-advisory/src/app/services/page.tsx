import { Metadata } from 'next';
import Hero from '@/components/Hero';
import CaseStudyCards from '@/components/CaseStudyCards';
import CTASection from '@/components/CTASection';
import { siteContent } from '@/content/siteContent';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Explore our work in strategy development, transformation, and operational improvements.',
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title={siteContent.services.hero.title}
        image="/images/hero-case-studies.jpg"
      />

      <CaseStudyCards
        categories={siteContent.services.categories}
        subtitle={siteContent.services.sectors}
      />

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-primary mb-8 text-center">Our Approach</h2>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p>
              We work collaboratively with our clients to deliver practical, actionable strategies 
              that drive measurable results. Our experience spans the full spectrum of financial 
              services, from community banks to global institutions.
            </p>
            <p>
              Each engagement is tailored to your specific needs, whether you require strategic 
              planning support, transformation expertise, or operational improvement initiatives.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Discuss Your Challenges"
        description="We'd love to learn more about your strategic objectives and explore how we can help."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}