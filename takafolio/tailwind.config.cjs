/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      'sans': ['Rubik', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'main-gradient': 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(19,17,17,1) 27%, rgba(44,46,47,1) 86%, rgba(51,55,56,1) 93%)'
      }
    },
  },
  plugins: [],
}
