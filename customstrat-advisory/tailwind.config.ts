import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C5F8D', // Restored to original blue
          dark: '#1A3A5C',
          light: '#4A7BA7',
        },
        accent: {
          DEFAULT: '#5B8FC4',
          dark: '#3D6B9E',
          light: '#7DAAD4',
        },
        gold: {
          DEFAULT: '#C9A961',
          light: '#E5D4A6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
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
    },
  },
  plugins: [],
};

export default config;