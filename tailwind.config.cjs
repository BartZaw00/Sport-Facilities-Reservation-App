/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-primary": "#228B22",
        "my-primary-bg": "#FFFFFF",
        "my-primary-text": "#000000",
        "my-divider": "#EEE",
        "my-category-border": "#CCC",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
