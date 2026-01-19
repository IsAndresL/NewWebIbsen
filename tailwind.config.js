/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700", // Amarillo Banano
        secondary: "#2E7D32", // Verde Follaje
        accent: "#29B6F6", // Azul Caribe
        neutral: "#4E342E", // Marrón Tambor
      },
      fontFamily: {
        sans: ["Open Sans", "Roboto", "sans-serif"],
        display: ["Montserrat", "Poppins", "sans-serif"],
        script: ["Great Vibes", "cursive"], // Example script font, need to import
      },
    },
  },
  plugins: [],
};
