/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDarkBlue: '#001F3F',
        customBlue: '#3A6D8C',
        customLightBlue: '#6A9AB0',
        customBeige: '#EAD8B1'
      }
    },
  },
  plugins: [],
}
