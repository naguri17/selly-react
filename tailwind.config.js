/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#c36",
        side: "#384059",
      },
      maxWidth: {
        xxl: "1960px",
        suit: "1024px",
      },
    },
  },
  plugins: [],
};
