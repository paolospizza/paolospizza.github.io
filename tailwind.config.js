const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ['Gentium Basic', ...defaultTheme.fontFamily.serif],
      cursive: ['Niconne']
    },
    extend: {
      colors: {
        'beige': '#e0b27a'
      },
      cursor: {
        'zoom-in': 'zoom-in',
        'zoom-out': 'zoom-out'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
