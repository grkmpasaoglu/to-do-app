/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellowCustom: '#022162',
        redCustom: '#470A5D',
        orangeCustom: "#FF5845"
      },
    },
  },
  plugins: [],
}
