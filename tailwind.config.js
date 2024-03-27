/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Outfit", "sans-serif"],
        "userHeaderFont": ["Young Serif", "serif"],
      },
      colors: {
        userNutmeg: "hsl(14, 45%, 36%)",
        userDarkRaspberry: "hsl(332, 51%, 32%)",
        userWhite: "hsl(0, 0%, 100%)",
        userRoseWhite: "hsl(330, 100%, 98%)",
        userEggshell: "hsl(30, 54%, 90%)",
        userLightGrey: "hsl(30, 18%, 87%)",
        userWengeBrown: "hsl(30, 10%, 34%)",
        userDarkCharcoal: "hsl(24, 5%, 18%)",
      },
    },
  },
  plugins: [],
}