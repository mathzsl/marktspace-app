/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        app: {
          600: '#3E3A40',
          500: '#5F5B62',
          400: '#9F9BA1',
          300: '#D9D8DA',
          200: '#EDECEE',
          100: '#F7F7F8',
        },
        blue: {
          300: '#647AC7',
          700: '#364D9D',
        },
        red: {
          300: '#EE7979',
        },
      },
    },

    fontFamily: {
      heading: 'Karla_700Bold',
      body: 'Karla_400Regular',
      light: 'Karla_300Light',
    },
  },
  plugins: [],
}
