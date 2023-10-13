/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        20: 'repeat(20, minmax(0, 1fr))',
      },
      gridColumnEnd: {
        21: '21',
      },
      stickyHeader: {
        'position': 'sticky',
        'top': '0',
        'backgroundColor': '#484848',
        'zIndex': '1',
      },
    },
  },
  plugins: [],
};
