const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        'dark-dim': '#15202B',
        'blue-twitter': '#1DA1F2'
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['group-focus'],
      ringOffsetWidth: ['hover', 'active']
    },
  },
  plugins: [    
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],
}
