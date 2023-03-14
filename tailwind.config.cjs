/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "3xl": { max: "2000px" },
      // => @media (max-width: 2000px) { ... }

      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "600px" },
      // => @media (max-width: 600px) { ... }

      "2sm": { max: "499px" },
      // => @media (max-width: 499px) { ... }
    },
    extend: {
      colors: {
        "my-primary": "#228B22",
        "my-primary-bg": "#FFFFFF",
        "my-primary-text": "#000000",
        "my-divider": "#EEE",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
