const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    layers: ['components', 'utilities'],
    content: ['./*(layouts|content|data|static)/**/*.*(html|toml|md)'],
    options: {
      safelist: ['static', 'relative', 'absolute', 'block', 'hidden', 'inline-block', 'inline-block', 'inline', 'flex', 'flex-none', 'flex-1', 'flex-grow', 'justify-center', 'table', 'float-left', 'float-right', 'text-left', 'text-center', 'text-right', 'text-justify', 'font-basic-sans', 'font-content-sans', 'font-content-serif', 'font-content-title', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-40', 'lowercase', 'uppercase', 'tracking-default', 'align-text-bottom', 'font-sans', 'font-serif', 'font-mono', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'leading-tight', 'mt-0', 'mt-1', 'mt-3', 'mt-4', 'mt-8', 'mt-9', 'mt-10', 'mx-4', 'mx-8', 'ml-3', 'ml-4', 'mr-3', 'mr-4', 'max-w-680', 'max-w-2xl', 'max-w-3xl', 'max-w-4xl', 'max-w-5xl', 'max-w-6xl', 'min-w-0', 'w-auto', 'fill-current', 'text-gray-400', 'text-gray-600', 'text-raven-800', 'text-raven-900a', 'first:mt-0', 'sm:mt-0', 'sm:ml-4', 'sm:ml-8', 'sm:mr-4', 'sm:mr-8', 'sm:flex', 'sm:flex-grow', 'sm:justify-center', 'sm:max-w-680', 'sm:max-w-2xl', 'sm:max-w-3xl', 'sm:max-w-4xl', 'sm:max-w-5xl', 'sm:max-w-6xl'],
    }
  },
  theme: {
    extend: {
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        'b': '0 4px 12px 0 rgba(0, 0, 0, 0.05)', // bottom
      },
      colors: {
        // HSL to RGB HEX
        // H-0, S-0, L-n
        raven: {
          100: '#e6e6e6', // L-90
          200: '#cccccc', // L-80
          300: '#b3b3b3', // L-70
          400: '#999999', // L-60
          500: '#808080', // L-50
          600: '#666666', // L-40
          700: '#4d4d4d', // L-30
          800: '#333333', // L-20
          900: '#1a1a1a', // L-10
          '900a': 'rgba(0, 0, 0, 0.84)', // L-10
        },
      },
      fontFamily: {
        'basic-sans': ['system-ui', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        'content-sans': ['content-sans', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Geneva', 'Arial', 'sans-serif'],
        'content-serif': ['content-serif', ...defaultTheme.fontFamily.serif],
        'content-title': ['content-title', ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        // TW default, but no line-height
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        // Axiom
        '13': '0.8125rem', // 13px
        '15': '0.9375rem', // 15px
        '21': '1.3125rem', // 21px
        '26': '1.625rem', // 26px
        '34': '2.125rem', // 34px
        '40': '2.5rem', // 40px
      },
      letterSpacing: {
        'default': 'normal',
        'snug': '-0.015em',
      },
      lineHeight: {
        'tighter': '1.15', //  18.4px
      },
      maxWidth: {
        '680': '42.5rem', // 680
      },
      spacing: {
        '2px': '2px',
        '3px': '3px',
      },
    },
  },
  variants: {
    margin: ['responsive', 'first', 'last'],
    padding: ['responsive', 'first', 'last'],
  },
  plugins: [],
  corePlugins: {
    animation: false,
    backgroundOpacity: false,
    borderOpacity: false,
    container: false,
    ringOpacity: false,
    textOpacity: false,
    transform: false,
  }
}
