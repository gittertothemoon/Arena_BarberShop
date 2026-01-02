/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#f5d18c',
          rose: '#f6a5c0',
          charcoal: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['General Sans', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        glow: '0 40px 120px -40px rgba(245, 209, 140, 0.35)',
      },
    },
  },
  plugins: [],
};
