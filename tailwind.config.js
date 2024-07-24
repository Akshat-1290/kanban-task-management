import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
      height: {
        "calc-100vh-minus-5rem": "calc(100vh - 5rem)",
        "calc-100vh-minus-6rem": "calc(100vh - 6rem)",
        "calc-100vh-plus-4rem": "calc(100vh + 4rem)",
      },
      colors: {
        neutral: {
          400: "hsl(216deg, 15%, 57%)",
          600: "hsl(236deg, 11%, 27%)",
          700: "hsl(235deg, 12%, 19%)",
          800: "hsl(235deg, 16%, 15%)",
          900: "hsl(237deg, 100%, 4%)",
        },
        red: {
          300: "hsl(0deg, 100%, 80%)",
          600: "hsl(0deg, 78%, 63%)",
        },
      },
    },
  },
  plugins: [],
};
