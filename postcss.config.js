const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')({
  preset: 'default'
})
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './*(layouts|content|data|static)/**/*.*(html|toml|md)',
  ],
  // tailwindcss/src/lib/purgeUnusedStyles.js
  defaultExtractor: content => {
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
    const innerMatches = content.match(/[^<>"'`\s.(){}\[\]#=%]*[^<>"'`\s.(){}\[\]#=%:]/g) || []
    return broadMatches.concat(innerMatches)
  },
  whitelist: ['static', 'relative', 'absolute', 'block', 'hidden', 'inline-block', 'inline-block', 'inline', 'flex', 'flex-none', 'flex-grow', 'justify-center', 'table', 'text-left', 'text-center', 'text-right', 'text-justify', 'font-content-sans', 'font-content-serif', 'font-content-title', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-40', 'lowercase', 'uppercase', 'tracking-default', 'align-text-bottom', 'font-sans', 'font-serif', 'font-mono', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'leading-tight', 'mt-0', 'mt-1', 'mt-3', 'mt-4', 'mt-8', 'mx-4', 'mx-8', 'mr-3', 'max-w-680', 'max-w-2xl', 'max-w-3xl', 'max-w-4xl', 'max-w-5xl', 'max-w-6xl', 'min-w-0', 'w-auto', 'fill-current', 'text-gray-500', 'text-gray-600', 'text-raven-800', 'text-raven-900a', 'first:mt-0', 'sm:mt-0', 'sm:ml-8', 'sm:flex', 'sm:flex-grow', 'sm:justify-center', 'sm:max-w-680', 'sm:max-w-2xl', 'sm:max-w-3xl', 'sm:max-w-4xl', 'sm:max-w-5xl', 'sm:max-w-6xl'],
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
