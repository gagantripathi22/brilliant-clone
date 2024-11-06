/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JSX and TSX files in src folder
  ],
  theme: {
    extend: {
      colors: {
        // green
        'custom-green-btn': '#24BB3A',
        'custom-green-btn-bg': '#199C26',
        'custom-green-btn-hover': '#52bf5d',
        // black
        'custom-black-btn': '#212121',
        'custom-black-btn-bg': '#010101',
        'custom-black-btn-hover': '#424242',
      }
    },
  },
  plugins: [],
}

