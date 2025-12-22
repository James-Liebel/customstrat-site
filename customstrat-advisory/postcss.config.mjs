/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Tailwind v3 uses the `tailwindcss` PostCSS plugin.
    // `@tailwindcss/postcss` is a Tailwind v4 plugin and will cause
    // inconsistent CSS output when paired with Tailwind v3.
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
