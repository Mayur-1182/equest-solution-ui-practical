/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "450px",
      },
      fontFamily: {
        avenir: ["Avenir Next", "sans-serif"],
        caslon: ["Big Caslon", "serif"],
      },
      gridTemplateColumns: {
        "3fr-2fr": "3fr 2fr",
      },
    },
  },
  plugins: [],
};
