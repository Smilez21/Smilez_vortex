/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"General Sans"', "arial"],
      },
    },
  },
  fontFamily: {
    sans: ["General sans", "sans-serif"],
    serif: ["Merriweather", "serif"],
    monts: ["montserrat", "serif"],
    open: ["Open sans", "Arial"],
    poppins: ["poppins", "Arial"],
  },
  plugins: [],
};
