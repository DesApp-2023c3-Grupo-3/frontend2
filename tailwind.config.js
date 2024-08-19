/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        20: 'repeat(20, minmax(0, 1fr))',
      },
      gridColumnEnd: {
        21: '21',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('tailwind-scrollbar'), require('@nextui-org/theme')],
};
