/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#fdf100", // Jaune Carambar
        pink: "#e1007a", // Rose Carambar
        dark: "#5D5C61", // Gris foncé
        white: "#fff", // Blanc
        red: "#e74c3c", // Rouge erreur
      },
    },
  },
  plugins: [],
}

