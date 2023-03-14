module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-focus-visible': {
      relaceWith: '[data-focus-visible-added]',
    },
    autoprefixer: {},
  },
}
