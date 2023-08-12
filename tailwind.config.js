/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '460px',
        '2xl': '2000px'
      }
    },
  },
  plugins: [],
}

