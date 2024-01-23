/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],


  theme: {
  

      colors : {
        'midnight': '#dcdcdc',
        'green' : 'rgb(46,125,56)',
        'white' : 'white',
        'black' : 'black',
        'light-green' : 'rgba(200,230,201,255)',
        'gray' : 'gray'
  
      },

      extend: {
      screens: {
        'sm': '850px',
        'xsm': '200px',
      
  
      }
    },
  },
  plugins: [],
}

