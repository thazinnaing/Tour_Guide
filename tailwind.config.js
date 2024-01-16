/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#24AAF7",
        secondary: "#FF9157",
      },
      boxShadow: {
        custom: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
      screens: {
        'xs' : '480px',
        '2xs' : '300px',
        '2xl' : '1440px',
        '3xl:' : '1536px'
      },
      height: {
        '120': '30rem',
      },
      fontSize: {
        '2xs': '0.5rem'
      }
    },
  },
  plugins: [],
};
