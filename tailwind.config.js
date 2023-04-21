/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        hero: "281px",
        noteCard: "180px",
        buttonText: "16px",
      },
      width: {
        noteCard: "180px",
        desktop: "1366px",
      },
    },
    colors: {
      yellow: "#FFEB3A",
      black: "#000000",
      grey: "#9F9F9F",
      white: "#FFFFFF",
      lightGrey: "#DBDBDB",
    },
    boxShadow: {
      noteCard: "0px 0px 2px 0px rgba(0,0,0,0.2)",
    },
  },
  plugins: [],
};
