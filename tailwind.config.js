module.exports = {
  purge: [
    './public/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'Montserrat',
        'sans-serif',
      ],
    },
    extend: {
    width: {
        custom: '31%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}