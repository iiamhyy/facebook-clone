/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts.jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "wrapper-color": "#242526",
        'hover': '#606770',
        'button': 'rgba(255,255,255,0.1)',
        'blue-1': '#1877F2',
        'blue-2':'#77A7FF',
        "blue-ina": "rgb(46,137,255)"
      },
      height: {
        '350px' : '300px'
      },
      width: {
        '350px' : '400px',

      },
      maxWidth: {
        "max-content": "1190px",
        "side": "490px"
      },
      spacing: {
        "18p": "18px",
        "16p": "16px"
      },
      textColor: theme => theme('colors'),
      textColor: {
        "primary": "rgb(228,230,235)",
        "blue-1": "rgb(46,137,255)",
        "green-1": "rgb(49,162,76)",
        "secondary": "rgb(176,179,184)"
      },
      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),

        'primary': '#606770'
      }),
      borderWidth: {
        DEFAULT: '1px',
        '0.5': '0.1px',
      },
      fontSize: {

      },
    },

  },
  plugins: [],
}
