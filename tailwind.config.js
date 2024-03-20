/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        niramit: ['Niramit', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
      colors: {
        brand: {
          primaryColor: '#0152A8',
          secondaryColor: '#00DCA8',
          textWhite: '#ffffff',
          textBold: '#3D3D3D',
          textGray: '#8E8E8E',
          textYellow: '#D48F05',
          textGreen: '#108608',
          textSky: '#0FBBBB',
          textBlue: '#3071C9',
          textRed: '#FF000F',
          textLight: '#97B2D1',
          textPurple: '#873AFF',
          borderColor: '#C5D0DD'
        }
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      borderWidth: ['responsive', 'first', 'last'],
      borderRadius: ['first', 'last'],
      margin: ['first', 'last'],
    },
  },
  plugins: [],
}

