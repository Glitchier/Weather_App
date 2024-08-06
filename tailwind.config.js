/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: "Montserrat",
      backgroundImage: {
        bgImg: "url('./img/bg.jpg')",
      },
    },
  },
  plugins: [],
};
