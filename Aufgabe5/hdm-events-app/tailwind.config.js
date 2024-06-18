/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ['Verdana', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#e31134',
        secondary: '#3E4847',
      },
    },
  },
  plugins: [],
};
