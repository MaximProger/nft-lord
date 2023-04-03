/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#040B11",
        secondary: "#141B22",
        accent: "#21E786",
        accentDarken: "#14be6b",
        fontColor: "#ffffff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bakbakOne: ["Bakbak One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
