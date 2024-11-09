/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#031C3E',
        'secondary': '#137D97',
        'tertiary': '#333',
        'section-color': '#f1e9d9',
        'section-1': '#23627D',
        'section-2': '#137D97',
        'section-3': '#9DD9D2',
      },
    },
  },
  plugins: [],
}

