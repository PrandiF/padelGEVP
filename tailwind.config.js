/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "black-to-transparent":
          "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        "headerResponsive-gradient":
          "linear-gradient(to bottom, #00000000 0%, #1c48a7 5%, #163986 50%, #102c69 70%, #0d275e 100%)",
        "blue-gradient":
          "linear-gradient(to right, #01497c 0%, #163986 50%, #0d275e 100%)",
        "white-gradient":
          "linear-gradient(to right, #dee2e6 0%, #e9ecef 50%, #dee2e6 100%)",
      },

      fontFamily: {
        titilliumWeb: ["Titillium Web"], // Define un nombre para tu fuente
      },
    },
  },
  plugins: [],
};
