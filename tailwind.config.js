module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'drukwide-bold': ['Drukwide Bold', 'sans-serif'],
        'icomoon-regular': ['Icomoon', 'sans-serif'],
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
