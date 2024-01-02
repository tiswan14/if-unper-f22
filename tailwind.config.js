/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'cek': ['Press Start 2P'],
        'Montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': '#004731',
        'whites': '#E4E4E4',
      },
    },
  },
  plugins: [],
}
