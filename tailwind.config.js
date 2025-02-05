/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      boxShadow: {
        sm: '0px 0px 0px 2px rgba(204, 204, 204, 0.25);'
      }
    },
  },
  plugins: [require('tailwindcss-primeui')],
};
