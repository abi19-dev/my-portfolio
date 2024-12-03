// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          1000: '#161616', // Custom brown color shade
          // Add more shades if needed, like 100, 200, etc.
        },
        myYellow: {
          1000: "#FFEA00"
        },
        myGrey: {
          1000: "#575757"
        }
      },
    },
  },
  plugins: [],
};