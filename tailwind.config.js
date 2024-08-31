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
              sans: ["Baloo Da 2", "cursive"],
          },
          colors: {
              'primary': {
                  50: '#d1d8da',
                  100: '#bac5c8',
                  200: '#a3b1b5',
                  300: '#8d9ea3',
                  400: '#768a90',
                  500: '#5f777e',
                  600: '#48636b',
                  700: '#315059',
                  800: '#1a3c46',
              },
              'secondary': {
                  50: '#fdfbf3',
                  100: '#fcf9ec',
                  200: '#fbf7e6',
                  300: '#faf5e0',
                  400: '#f9f3da',
                  500: '#f8f1d4',
                  600: '#f7efcd',
                  700: '#f6edc7',
                  800: '#f5ebc1',
              },

          },
      },
  },
  plugins: [
      require('preline/plugin'),
  ],
}
