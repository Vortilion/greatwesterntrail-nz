/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./apps/gwt-nz_randomizer/src/**/*.{html,ts}'],
  theme: {
    extend: {
      screens: {
        xSmall: '600px',
      },
    },
  },
  plugins: [],
};
