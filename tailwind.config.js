module.exports = {
  purge: ['./src/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        body: ['Kongtext']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}