/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        grey:"#808080",
        yellow:" #FFFF00",
        "dark-yellow":"#FFD700",
        orange:"#FFA500"
      }
    },
  },
  plugins: [],
}

