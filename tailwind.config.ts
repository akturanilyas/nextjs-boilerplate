import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './node_modules/primereact/**/*.{js,ts,jsx,tsx}',

    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/providers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
        },
        secondary: {
          DEFAULT: '#3C3C4399',
        },
        disabled: {
          DEFAULT: '#F3F3F3',
          light: '#C6C6C8',
        },
        error: {
          DEFAULT: '#FF3B30',
          light: '#FEF2F4',
        },
        blue: {
          accent: '#008CFF',
        },
        quaternary: {
          DEFAULT: '#3C3C432E',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
