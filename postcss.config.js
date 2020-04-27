const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')({
  preset: 'default'
})
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    // theme files
    './*(layouts|content|data|static)/**/*.*(html|toml|md)',
    // user files
    '../../*(layouts|content|data|static)/**/*.*(html|toml|md)',
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  whitelist: [ // make available for user's shortcodes
  'text-left', 'text-center', 'text-right', 'text-justify', 'sm:text-sm', 'h-0', 'h-1', 'h-2', 'h-3', 'h-4', 'h-5', 'h-6', 'h-8', 'h-10', 'w-0', 'w-1', 'w-2', 'w-3', 'w-4', 'w-5', 'w-6', 'w-8', 'w-10', 'mx-0', 'mx-1', 'mx-2', 'mx-3', 'mx-4', 'mx-5', 'mx-6', 'mx-8', 'mx-10', 'mt-0', 'mt-1', 'mt-2', 'mt-3', 'mt-4', 'mt-5', 'mt-6', 'mt-7', 'mt-8', 'mt-9', 'mt-10', 'sm:mt-0', 'md:mx-8', 'px-0', 'px-1', 'px-2', 'px-3', 'px-4', 'px-5', 'px-6', 'px-8', 'px-10', 'pt-0', 'pt-1', 'pt-2', 'pt-3', 'pt-4', 'pt-5', 'pt-6', 'pt-7', 'pt-8', 'pt-9', 'pt-10', 'first:mt-0', 'first:pt-0', 'min-w-0', 'sm:w-1/6', 'max-w-2xl', 'max-w-680', 'max-w-3xl', 'max-w-4xl', 'max-w-5xl', 'max-w-6xl', 'max-w-full', 'sm:max-w-680', 'flex', 'sm:flex', 'flex-none', 'flex-grow', 'sm:flex-grow', 'flex-row', 'sm:flex-row', 'flex-col', 'sm:flex-col', 'justify-center', 'sm:justify-center',
  ]
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nesting'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss, autoprefixer, cssnano]
      : []
  ]
}
