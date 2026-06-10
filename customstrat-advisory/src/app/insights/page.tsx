// src/app/insights/page.tsx
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Atmosphere from '@/components/Atmosphere';
import InsightsClient from './InsightsClient';
import { allArticles } from '@/content/articles';

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Insights and thought leadership on strategy, customer experience, and transformation.',
};

export default function InsightsPage() {
  return (
    <main className="cs-shell--library relative">
      {/* Atmosphere: ink-dots theme */}
      <Atmosphere themeKey="ink-dots" />
      <div className="relative z-10">
        <Hero title="Articles" image="/images/hero-home.jpg" themeKey="ink-dots" />

        <section className="cs-section">
          <div className="container-custom">
            <InsightsClient articles={allArticles} />
          </div>
        </section>
      </div>
    </main>
  );
}
