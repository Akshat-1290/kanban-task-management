import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
      height : {
        'calc-100vh-minus-5rem': 'calc(100vh - 5.1rem)',
        'calc-100vh-minus-6rem': 'calc(100vh - 6rem)',
      },
    },
  },
  plugins: [],
}

