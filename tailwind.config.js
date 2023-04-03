/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#040B11",
        secondary: "#141B22",
        tertiary: "#C2C3C5",
        accent: "#21E786",
        accentDarken: "#14be6b",
        fontColor: "#ffffff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bakbakOne: ["Bakbak One", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
