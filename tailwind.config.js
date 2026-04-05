/** @type {import('tailwindcss').Config} */
export default {
  // Specify all files Tailwind should scan for class names
  content: [
    "./index.html",          // Main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // All React components
  ],

  // Enable class-based dark mode
  darkMode: "class", // You can toggle dark mode by adding 'dark' class to <html>

  theme: {
    extend: {
      // Optional: extend default Tailwind theme here
      colors: {
        // Example: custom brand colors
        primary: "#1E40AF", // blue-800
        secondary: "#FACC15", // yellow-400
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },

  plugins: [],
};