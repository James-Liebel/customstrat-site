// Single source of truth for all Insights articles.
// Add new articles HERE (newest first) — both the Articles page and the
// Related Articles component read from this list.
// `dateValue` is YYYYMM, used for chronological sorting.

export type Article = {
  title: string;
  slug: string;
  date: string;
  dateValue: number;
  categories: string[];
  excerpt: string;
  readTime: string;
};

export const allArticles: Article[] = [
  {
    title: 'Strategy in the Age of AI: A Community and Mid-Size Bank Perspective',
    slug: 'strategy-in-the-age-of-ai',
    date: 'June 2026',
    dateValue: 202606,
    categories: ['Banking', 'Strategy'],
    excerpt:
      'The same strategic questions—where, how, and when to compete—carry higher stakes for community and mid-size banks in the age of AI.',
    readTime: '7 min read',
  },
  {
    title: 'Three Simple Strategy Tests Every Leadership Team Should Apply',
    slug: 'three-strategy-tests',
    date: 'February 2026',
    dateValue: 202602,
    categories: ['Strategy', 'Banking', 'Insurance'],
    excerpt:
      'How to ensure your strategy is grounded in customer choice, economic logic, and real commitment. Three questions every leadership team should answer with confidence.',
    readTime: '6 min read',
  },
  {
    title: 'Relationship Banking Needs a Higher Standard',
    slug: 'relationship-banking-higher-standard',
    date: 'January 2026',
    dateValue: 202601,
    categories: ['Banking', 'Customer Experience'],
    excerpt:
      'If banks want to call something a "relationship," they should be willing to hold it to the same standards people apply in real human relationships.',
    readTime: '7 min read',
  },
  {
    title: "Beyond Scale: Winning Strategies for Today's P&C Insurers",
    slug: 'beyond-scale-pc-insurers',
    date: 'August 2025',
    dateValue: 202508,
    categories: ['Insurance', 'Strategy'],
    excerpt:
      'Insights from a decade of market data reveal what winners do differently',
    readTime: '5 min read',
  },
  {
    title: 'Secrets to Survival in Community Banking',
    slug: 'secrets-to-survival-community-banking',
    date: 'February 2025',
    dateValue: 202502,
    categories: ['Banking', 'Strategy'],
    excerpt:
      'What is and is NOT correlated to Success',
    readTime: '6 min read',
  },
  {
    title: 'Linking Customer Experience to Strategy and Value',
    slug: 'linking-cx-to-strategy-value',
    date: 'November 2022',
    dateValue: 202211,
    categories: ['Customer Experience'],
    excerpt:
      'A practical framework for connecting CX investments to measurable business outcomes',
    readTime: '5 min read',
  },
  {
    title: 'Strategic Planning Best Practices for Board Directors',
    slug: 'strategic-planning-board-directors',
    date: 'September 2022',
    dateValue: 202209,
    categories: ['Governance', 'Strategy'],
    excerpt:
      'A practical guide for boards to steward the development of a winning corporate strategy',
    readTime: '5 min read',
  },
  {
    title: 'Integrated Planning Amidst the Headwinds',
    slug: 'integrated-planning-headwinds',
    date: 'September 2022',
    dateValue: 202209,
    categories: ['Strategy'],
    excerpt:
      'Building resilient strategic plans through prioritized investment and organizational accountability',
    readTime: '7 min read',
  },
  {
    title: "The Softer Side of Transformation - The 5 C's",
    slug: 'softer-side-of-transformation',
    date: 'August 2022',
    dateValue: 202208,
    categories: ['Change Management'],
    excerpt:
      'Why addressing commitment, culture, and communication is vital for sustainable change',
    readTime: '5 min read',
  },
  {
    title: 'A Strategic Planning Tune-Up for Uncertain Times',
    slug: 'strategic-planning-tune-up',
    date: 'August 2022',
    dateValue: 202208,
    categories: ['Strategy'],
    excerpt:
      'Adjusting your strategic approach to maintain competitive advantage in a volatile market',
    readTime: '5 min read',
  },
  {
    title: 'P&C Carriers - Preparing for the Stormy Seas',
    slug: 'pc-carriers-stormy-seas',
    date: 'July 2022',
    dateValue: 202207,
    categories: ['Insurance'],
    excerpt:
      'Five strategic priorities for insurers to navigate economic volatility and industry disruption',
    readTime: '5 min read',
  },
  {
    title: 'Contingency Planning for the Next Worst-Case Scenario',
    slug: 'contingency-planning-worst-case',
    date: 'April 2021',
    dateValue: 202104,
    categories: ['Risk Management', 'Insurance'],
    excerpt:
      'Building organizational resilience through comprehensive risk assessment and adaptive strategy',
    readTime: '4 min read',
  },
  {
    title: 'Banking on a Better Position After the Crisis',
    slug: 'banking-better-position-after-crisis',
    date: 'May 2020',
    dateValue: 202005,
    categories: ['Banking'],
    excerpt:
      'Strategic imperatives for banks to emerge stronger from short-term financial disruption',
    readTime: '5 min read',
  },
];
