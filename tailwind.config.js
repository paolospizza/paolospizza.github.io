const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./_site/*.html', './_includes/*.html', './_layouts/default.html'],
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
