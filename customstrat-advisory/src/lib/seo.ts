/**
 * Per-page metadata builders.
 *
 * Every indexable page gets a self-referencing canonical plus its own Open
 * Graph / Twitter title, description and URL. Without these, pages inherit the
 * root layout's `openGraph` block, so a shared article link on LinkedIn shows
 * the generic company card instead of the article.
 *
 * Next.js merges metadata shallowly: a page that sets `openGraph` replaces the
 * layout's block entirely, which is why siteName/locale are repeated here.
 * The same replacement drops the root `opengraph-image.png` file-convention
 * image, so it is listed explicitly as SHARE_IMAGE.
 */

import type { Metadata } from 'next';
import { siteContent } from '@/content/siteContent';
import { allArticles } from '@/content/articles';

type PageMeta = { title: string; description: string };

/** The site-wide share card (src/app/opengraph-image.png, 1200x630). */
const SHARE_IMAGE = { url: '/opengraph-image.png', width: 1200, height: 630, alt: siteContent.company.name };

/** `path` is the route with leading and trailing slash, e.g. `/about/` (or `/`). */
export function pageMetadata(path: string, { title, description }: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: siteContent.company.name,
      url: path,
      title,
      description,
      images: [SHARE_IMAGE],
    },
    twitter: { card: 'summary_large_image', title, description, images: [SHARE_IMAGE] },
  };
}

/** Article pages: same as pageMetadata, typed as an article with date and bylines. */
export function articleMetadata(slug: string, meta: PageMeta): Metadata {
  const article = allArticles.find((a) => a.slug === slug);
  if (!article) throw new Error(`articleMetadata: unknown slug "${slug}"`);

  const base = pageMetadata(`/insights/${slug}/`, meta);
  // dateValue is YYYYMM
  const year = Math.floor(article.dateValue / 100);
  const month = String(article.dateValue % 100).padStart(2, '0');

  return {
    ...base,
    authors: article.authors.map((name) => ({ name })),
    openGraph: {
      ...base.openGraph,
      type: 'article',
      publishedTime: `${year}-${month}-01`,
      authors: article.authors,
      section: article.categories[0],
    },
  };
}
