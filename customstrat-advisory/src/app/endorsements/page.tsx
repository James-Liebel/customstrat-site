import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import { siteContent } from '@/content/siteContent';
import EndorsementsClient from './EndorsementsClient';

export const metadata: Metadata = {
  title: 'Endorsements',
  description: 'Client testimonials and recommendations for CustomStrat Advisory.',
};

export default function EndorsementsPage() {
  return (
    <>
      <Hero
        title={siteContent.endorsements.hero.title}
        image="/images/hero-home.jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <div className="text-[11px] tracking-[0.28em] uppercase text-gray-500">
                Client Signals
              </div>
              <div className="mt-2 h-px w-28 bg-gradient-to-r from-primary to-transparent" />
            </div>
          </div>

          {/* Interactive grid */}
          <EndorsementsClient
            testimonials={siteContent.endorsements.testimonials}
          />
        </div>
      </section>
    </>
  );
}
