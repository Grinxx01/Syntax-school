/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Menambahkan Roboto sebagai font default
      },
      colors: {
        primary : '#226597',
        second : '#113F67'
      },
    },
  },
  plugins: [],
}