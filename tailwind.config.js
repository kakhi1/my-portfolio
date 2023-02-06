/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyfont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#191919",
        textColor: "rgba(255,255,255,0.85)",
        designColor: "#00ff77",
        titleRoundBg:
          "linear-gradient(288deg, rgba(12,240,211,1) 31%, rgba(0,255,4,0.9920343137254902) 62%)",
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "reverse-spin": "reverse-spin 15s linear infinte",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
      boxShadow: {
        greenShadow: "0px 0px 188px -14px #9DD487",
        testShadow: "11px 0px 13px -15px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
