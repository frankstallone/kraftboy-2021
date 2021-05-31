module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'serif': ['Merriweather', 'serif'],
      'sans': ['Open Sans', 'sans-serif'],
    },
    letterSpacing: {
      tightest: '-.075em',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
