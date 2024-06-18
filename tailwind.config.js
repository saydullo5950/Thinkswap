/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"roboto"', "sans-serif"],
      },
      colors: {
        "color-blue": "#457EF8",
        "color-grey": "#56586F",
        "color-greys": "#FAFAFF",
        "color-gray": "#1B2344",
        "color-grayt": "#E8FFF7",
        "color-grayts": "#FFF4FC",
        "color-grays": "#E6F6FF",
        "color-grayy": "#FEF8ED",
        "color-grayyy": "#07123F",
        "color-100": "#F8F8FF",
        brend: {
          gray: {
            100: '#1B234478',
            200: '#2D3254C7',
            300: '#1B234414',
            400: '#56586F',
            500: '#878DA2',
            600: '#F6F6FF'
          },
          blue: {
            100: '#457EF8',
            200: '#457EF80D',
            300: '#E8FFF7',
            400: '#E6F6FF',
            500: '#17ACFF'
          },
          black: {
            100: '#1B2344',
            200: '#F8F8FF',
            300: '#07123F',
            400: '#07123F14'
          },
          green: {
            100: '#29A47A'
          },
          pink: {
            100: '#FFF4FC',
            200: '#FEF8ED',
            300: '#FF56D1',
          },
          yellow: {
            100: '#FFA500'
          }
        }
      }
    },
  },
  plugins: [],
}

