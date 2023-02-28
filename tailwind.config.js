/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "campo-cinza":"url('/images/campo_cinza.svg')",
      }
    },
  },
  plugins: [],
}
