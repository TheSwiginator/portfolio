module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      'PublicSans': ['"public sans"', 'sans-serif'],
      'PTSansNarrow': ['"PT Sans Narrow"', 'sans-serif'],
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