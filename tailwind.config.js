module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './apps/**/*.{html,scss,ts}',
      './libs/**/*.{html,scss,ts}',
    ]
  },
  options: {
    rejected: true,
    printRejected: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
