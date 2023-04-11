/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'xxs':'300px'
      },
    },
  },
  plugins: [],
}

