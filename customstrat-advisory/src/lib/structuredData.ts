/**
 * schema.org JSON-LD builders.
 *
 * Everything derives from the existing content layer (siteContent, articles)
 * so the structured data can't drift from what the page actually renders.
 *
 * Nodes are cross-referenced by `@id` rather than being repeated: the
 * Organization is emitted once site-wide (root layout) and the WebSite,
 * Person and Article nodes point back at it. Google follows `@id` references
 * across the page's JSON-LD blocks, so this stays valid while keeping each
 * block small.
 */

import { siteContent } from '@/content/siteContent';
import { allArticles } from '@/content/articles';

export const SITE_URL = 'https://customstrat.com';

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const KATIE_ID = `${SITE_URL}/#katie-liebel`;

const LINKEDIN_KATIE = 'https://www.linkedin.com/in/katie-liebel/';

/** Katie's entry in the leadership list, which owns her title and photo. */
const katie = siteContent.about.leadership.members[0];

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: siteContent.company.name,
    alternateName: siteContent.company.shortName,
    url: `${SITE_URL}/`,
    description: siteContent.company.tagline,
    email: siteContent.company.email,
    telephone: siteContent.company.phone,
    foundingDate: '2019',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo.webp`,
    },
    image: `${SITE_URL}/opengraph-image.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cincinnati',
      addressRegion: 'OH',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    founder: { '@id': KATIE_ID },
    sameAs: [LINKEDIN_KATIE],
    knowsAbout: [
      'Business Strategy',
      'Strategy Execution',
      'Merger Integration',
      'Business Transformation',
      'Performance Improvement',
      'Banking',
      'Property and Casualty Insurance',
      'Customer Experience',
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: siteContent.company.shortName,
    description: siteContent.company.tagline,
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: 'en-US',
  };
}

/**
 * Katie as a Person node. Emitted on /about, which is the page that actually
 * carries her biography — the node Google is most likely to attach a knowledge
 * panel to.
 */
export function katieSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': KATIE_ID,
    name: katie.name,
    jobTitle: katie.title,
    url: `${SITE_URL}/about/`,
    image: `${SITE_URL}${katie.image}`,
    worksFor: { '@id': ORGANIZATION_ID },
    sameAs: [LINKEDIN_KATIE],
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Harvard Business School' },
      { '@type': 'CollegeOrUniversity', name: 'University of Virginia' },
    ],
    knowsAbout: [
      'Corporate Strategy',
      'Customer Experience',
      'Banking',
      'Insurance',
    ],
  };
}

/** `dateValue` is YYYYMM; articles carry no day, so anchor to the 1st. */
function isoDateFromDateValue(dateValue: number) {
  const year = Math.floor(dateValue / 100);
  const month = String(dateValue % 100).padStart(2, '0');
  return `${year}-${month}-01`;
}

/**
 * Article node for one Insights piece, looked up by slug so a page only has to
 * name itself. Returns null for an unknown slug (e.g. a legacy redirect stub),
 * which callers treat as "emit nothing".
 */
export function articleSchema(slug: string) {
  const article = allArticles.find((a) => a.slug === slug);
  if (!article) return null;

  const url = `${SITE_URL}/insights/${article.slug}/`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: article.title,
    description: article.excerpt,
    datePublished: isoDateFromDateValue(article.dateValue),
    author: article.authors.map((name) => ({
      '@type': 'Person',
      name,
      ...(name === katie.name ? { '@id': KATIE_ID } : {}),
    })),
    publisher: { '@id': ORGANIZATION_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: `${SITE_URL}/opengraph-image.png`,
    articleSection: article.categories,
    isAccessibleForFree: true,
    inLanguage: 'en-US',
  };
}

/** Trail for an Insights article: Home > Insights > <title>. */
export function articleBreadcrumbSchema(slug: string) {
  const article = allArticles.find((a) => a.slug === slug);
  if (!article) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE_URL}/insights/` },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `${SITE_URL}/insights/${article.slug}/`,
      },
    ],
  };
}
