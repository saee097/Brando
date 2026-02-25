/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // تمام React components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // example custom color
        secondary: "#F59E0B",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // example font
      },
    },
  },
  plugins: [],
};
