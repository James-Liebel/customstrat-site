import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '80rem',
      },
    },
    extend: {
      colors: {
        // Single brand palette — kept in lockstep with the CSS variables in
        // src/styles/globals.css :root (--color-primary / --color-accent /
        // --color-gold). Utility classes (bg-primary, text-accent, …) and the
        // .btn-*/.cs-* component classes now share the same hues.
        primary: {
          DEFAULT: '#1e4b75',
          dark: '#123456',
          light: '#34608b',
        },
        accent: {
          DEFAULT: '#4a86c0',
          dark: '#2c5885',
          light: '#6ba0d4',
        },
        gold: {
          DEFAULT: '#C9A961',
          light: '#E5D4A6',
        },
      },
      fontFamily: {
        // Prefer next/font CSS variables to prevent double-loading + layout shift
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-brand)', 'var(--font-inter)', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(44, 95, 141, 0.04)',
        'soft-md': '0 4px 16px rgba(44, 95, 141, 0.08)',
        'soft-lg': '0 8px 24px rgba(44, 95, 141, 0.12)',
        'glow': '0 0 40px rgba(91, 143, 196, 0.15)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
      },
      zIndex: {
        base: '0',
        header: '50',
        dropdown: '60',
        overlay: '70',
        modal: '80',
        toast: '90',
      },
      transitionTimingFunction: {
        // Felt-not-seen easing (quint-ish)
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;