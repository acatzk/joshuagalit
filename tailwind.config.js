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
        'twitter-blue': '#1DA1F2',
        'dark-dim': '#15202B'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
