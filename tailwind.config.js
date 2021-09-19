module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '35': "35px",
      },
      colors: {
        grey33: "#333"
      },
      // screens: {
      //   'tablet': '640px',
      //   // => @media (min-width: 640px) { ... }
  
      //   'laptop': '1024px',
      //   // => @media (min-width: 1024px) { ... }
  
      //   'desktop': '1280px',
      //   // => @media (min-width: 1280px) { ... }
      // },
    },
  },
  variants: {
    extend: {
      borderWidth: ['first'],
    }
  },
  plugins: [],
}
