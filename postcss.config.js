const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')({
  preset: 'default'
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nesting'),
    ...process.env.NODE_ENV === 'production'
      ? [autoprefixer, cssnano]
      : []
  ]
}
