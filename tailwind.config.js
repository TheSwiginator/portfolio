module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'PublicSans': ['"public sans"', 'sans-serif']
    },
    extend: {
      animation: {
      },
      keyframes: {
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
