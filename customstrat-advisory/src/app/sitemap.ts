import type { MetadataRoute } from 'next';
import { allArticles } from '@/content/articles';

const BASE_URL = 'https://customstrat.com';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '',
    '/about',
    '/services',
    '/services/strategy-development',
    '/services/strategy-execution',
    '/services/operational-improvements',
    '/insights',
    '/endorsements',
    '/contact',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${BASE_URL}${path}/`,
  }));

  const articleEntries: MetadataRoute.Sitemap = allArticles.map((article) => ({
    url: `${BASE_URL}/insights/${article.slug}/`,
    // dateValue is YYYYMM
    lastModified: new Date(Math.floor(article.dateValue / 100), (article.dateValue % 100) - 1, 1),
  }));

  return [...staticEntries, ...articleEntries];
}
