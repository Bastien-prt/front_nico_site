module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors :{
      "teeest": "#51A318"
    },

    fontSize :{
      "bigSize": "20rem",
      "mediumSize": "15rem"
    },
    textColor: {
      'skyBlue': '#D7EEFB',
      'lightGray' :'#6B7280',
    },
    letterSpacing: {
      tightest: '-0.12em',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#D7EEFB',
     }),

    spacing: {
      'sizeCard': '90rem',
      
    },

    screens: {
      
      'large': '900px',
      // => @media (min-width: 1024px) { ... }   
    },
    
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
