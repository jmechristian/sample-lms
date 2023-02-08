/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1a1a1a',
        'real-dark': '#0E0E0E',
        'light-yellow': '#ffd778',
        'mid-blue': '#5567b0',
        'light-blue': '#7b88c3',
        clemson: '#f5831f',
      },
      fontFamily: {
        roboto: 'roboto, sans-serif',
        greycliff: 'greycliff-cf, sans-serif',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
