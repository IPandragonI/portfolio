/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indicator-focus': '#137D97',
        'section-color': '#a1e3e3',
      },
    },
  },
  plugins: [],
}

