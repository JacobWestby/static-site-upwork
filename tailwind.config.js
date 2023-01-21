/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/public/*.{html,js}", "/src/*.js", "/public/*/*.{html,js}", "/src/*/*.css"],
  theme: {
    extend: {},
    colors: {
      primary: "#36C2FD",
      secondary: "#323232",
      accent: "#D88637",
      white: "#FFFEFD",
      black: "#000607",
      overlay: "rgba(30, 30, 30, 0.79)",
    }
  },
  plugins: [],
}