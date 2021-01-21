module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'drukwide-bold': ['Drukwide Bold', 'sans-serif'],
        'icomoon-regular': ['Icomoon', 'sans-serif'],
      },
      colors: {
        primary: '#d62a33',
      },
      stroke: {
        white: '#ffffff',
      },
      fontSize: {
        xxxs: ['.3rem', { lineHeight: '.5rem' }],
        xxs: ['.5rem', { lineHeight: '.75rem' }],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
