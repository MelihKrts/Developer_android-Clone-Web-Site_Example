/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'xxs':'300px'
      },
    },
  },
  plugins: [],
}

