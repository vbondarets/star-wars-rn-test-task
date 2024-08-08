/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        abel: ['Abel-Regular', 'sans-serif'],
      },
      height: {
        34: '139px',
      },
      borderRadius: {
        default: '20px',
      },
      colors: {
        alabaster: '#F7F7F7',
        'wild-sand': '#F5F5F5',
        'dusty-gray': '#979797',
        'silver-chalice': '#9D9D9D',
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
      },
    },
  },
  plugins: [],
}
