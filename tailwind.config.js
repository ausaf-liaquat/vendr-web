/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        'node_modules/preline/dist/*.js',

  ],
  theme: {
      extend: {
          fontFamily: {
              sans: ["Roboto", "cursive"],
          },
          colors: {
              'primary': {
                  50: '#fdedf1',
                  100: '#fac8d4',
                  200: '#f9b5c5',
                  300: '#f7a3b7',
                  400: '#f591a9',
                  500: '#f47e9a',
                  600: '#f26c8c',
                  700: '#f1597d',
                  800: '#ef476f',
              },
              'secondary': {
                  50: '#d2d8e3',
                  100: '#bbc4d5',
                  200: '#a5b0c7',
                  300: '#8e9db9',
                  400: '#7789aa',
                  500: '#61759c',
                  600: '#4a618e',
                  700: '#344e80',
                  800: '#1d3a72',
              },
             
             

          },
      },
  },
  plugins: [
      require('preline/plugin'),
  ],
}
