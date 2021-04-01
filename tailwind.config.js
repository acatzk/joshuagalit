const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    body: ['Nunito', 'system-ui', 'sans-serif'],
    extend: {
      colors: {
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        'dark-dim': '#15202B',
        'blue-twitter': '#1DA1F2'
      }
    },
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
    require('@tailwindcss/line-clamp')
  ],
}
