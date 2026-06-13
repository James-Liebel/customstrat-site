import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Atmosphere from '@/components/Atmosphere';
import { siteContent } from '@/content/siteContent';
import EndorsementsClient from './EndorsementsClient';

export const metadata: Metadata = {
  title: 'Endorsements',
  description: 'Client testimonials and recommendations for CustomStrat Advisory.',
};

export default function EndorsementsPage() {
  return (
    <main className="cs-shell--editorial relative">
      {/* Atmosphere: soft-rings theme */}
      <Atmosphere themeKey="soft-rings" />
      <div className="relative z-10">
        <Hero title={siteContent.endorsements.hero.title} themeKey="soft-rings" />

        {/* Tighter top padding so the first card tops peek above the fold */}
        <section className="cs-section pt-6 lg:pt-8">
          <div className="container-custom">
            <EndorsementsClient
              testimonials={siteContent.endorsements.testimonials}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
