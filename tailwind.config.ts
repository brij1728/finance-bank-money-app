import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    darkMode: 'class',
    extend: {
      fontFamily: {
        'clash-display': ['Clash Display', 'sans-serif'],
      },
      colors: {
        red: '#ff5555',
        yellow: '#fde598',
        primary: '#FFFFFF',
        secondary: '#333333',
      },
    },
  },
  plugins: [],
};

export default config;
