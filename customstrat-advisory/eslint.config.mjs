import next from 'eslint-config-next/core-web-vitals';

/**
 * Flat ESLint config. Next 16 removed the `next lint` command (and with it the
 * config it used to generate on first run), so linting now runs ESLint directly
 * against `eslint-config-next`'s flat config export.
 */
const config = [
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts'],
  },

  ...next,

  {
    rules: {
      // next/image can't optimize anything here: `images.unoptimized` is forced
      // on for the static export (next.config.mjs), so <img> is equivalent and
      // avoids the wrapper. Article exhibits are plain <img> by design.
      '@next/next/no-img-element': 'off',
    },
  },

  {
    // Long-form editorial prose. Apostrophes and quotation marks are intentional
    // typography that JSX renders correctly as-is; escaping every one to &apos;
    // would make the article source materially harder to read and edit for no
    // change in output. The rule stays on for all component code.
    files: ['src/app/insights/**/*.tsx', 'src/app/about/AboutClient.tsx'],
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
];

export default config;
