/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFF9EC',
          100: '#FFF0C7',
          200: '#FFE08A',
          300: '#FFCB4C',
          400: '#FFB627',
          500: '#E5A01A',
          600: '#C27F10',
          700: '#9A5E0A',
          800: '#7A4A09',
          900: '#5C3908',
        },
        dark: {
          50: '#F4F4F4',
          100: '#E0E0E0',
          200: '#BDBDBD',
          300: '#909090',
          400: '#636363',
          500: '#484848',
          600: '#353535',
          700: '#232323',
          800: '#141414',
          900: '#0B0B0B',
          950: '#050505',
          DEFAULT: '#070707',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['Great Vibes', 'Dancing Script', 'cursive'],
      },
      boxShadow: {
        gold: '0 10px 40px -10px rgba(229,160,26,0.5)',
        'gold-sm': '0 4px 20px -4px rgba(229,160,26,0.45)',
      },
    },
  },
  plugins: [],
};
