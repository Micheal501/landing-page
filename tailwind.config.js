/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        headline: '#fffffe',
        paragraph: '#a7a9be',
        button: '#ff8906',
        buttonText: '#fffffe',
      },
    },
  },
  plugins: [],
};
