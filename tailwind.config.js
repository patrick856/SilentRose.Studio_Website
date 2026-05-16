/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#E8E0D4',
        forest: '#1E2420',
        sage: '#8AAB96',
        rust: '#b85c4a',
        crimson: '#93032E',
      },
      fontFamily: {
        unbounded: ['Unbounded', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
};
