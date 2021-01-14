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
      width: (theme) => ({}),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
