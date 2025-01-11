/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Albert Sans", "sans-serif"], // Custom primary font with fallback to 'sans-serif'.
        secondary: ["Castoro Titling", "serif"], // Custom secondary font with fallback to 'serif'.
      },
      colors: {
        primary: "#6F5011", // Custom primary color.
        secondary: "#EEE5DA", // Custom secondary color.
        "bgcolor": "#FAF9F7", // Custom background color.
        "fadedbrown": "#9F8B61", // Custom faded color.
      },
      container: {
        center: true, // Center the container horizontally.
        padding: { 
          DEFAULT: "1rem", // Default padding for all screen sizes.
          sm: "2rem",      // Padding for small screens.
          lg: "4rem",      // Padding for large screens.
          xl: "5rem",      // Padding for extra-large screens.
          "2xl": "6rem",   // Padding for 2x extra-large screens.
        },
      },
    },
  },
  plugins: [],
}

