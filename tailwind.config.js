/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#3A4495",
      purple: "#3A2667",
      green: "#213D49",
      black: "#030303",
      white: "#FBFDFD",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
