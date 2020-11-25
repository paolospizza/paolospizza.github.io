const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ['Gentium Basic', ...defaultTheme.fontFamily.serif],
      cursive: ['Cookie']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
