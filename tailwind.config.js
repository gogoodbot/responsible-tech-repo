/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    extend: {
      colors: {
        goodbot: {
          primary: {
            teal: "#3155F4",
            yellow: "#FEDA10",
            skyBlue: "#06BADB",
            starryNightBlack: "#242424",
            offWhite: "#F1E7DD",
            gray: "#f4f4f5",
          },
          secondary: {
            neonGreen: "#96EA61",
            lightBlue: "#A3E2EC",
          },
        },
      },
      fontFamily: {
        poppins: ["Poppins"],
        openSans: ["Open Sans"],
      },
    },
    screens: {
      xs: "475px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
