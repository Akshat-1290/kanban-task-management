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
        'calc-100vh-minus-5rem': 'calc(100vh - 5rem)',
      },
      transitionProperty : {
        "mobileSidebar" : "top , background , visibility" ,
        "sidebar" : "left , visibility"

      },
      transitionDuration : {
        "mobileSidebar" : "300ms , 1000ms , 300ms",
        "sidebar" : "800ms , 850ms "
      }
    },
  },
  plugins: [],
}

