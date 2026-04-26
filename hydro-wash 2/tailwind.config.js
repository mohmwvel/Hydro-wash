/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#b8c3ff",  // Electric Blue
          dark: "#0e0e0e",     // Background
          surface: "#1f1f1f",  // Cards
          outline: "#434656",  // Borders
        }
      },
      fontFamily: {
        headline: ["Noto Serif", "serif"],
      },
    },
  },
  plugins: [],
}