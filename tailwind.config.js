/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#24AAF7",
        "secondary": "#FF9157"
      }
    },
  },
  plugins: [],
}