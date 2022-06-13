/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["'DM Sans'", "sans-serif"],
        exo: ["'Exo'", "sans-serif"],
      },
      colors: {
        theme: "#170C17",
      },
      backgroundImage: {
        'footer-texture': "url('./images/footerImg.png')"
      }
    },
  },
  plugins: [],
};
