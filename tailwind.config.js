/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indicator-focus': '#6D8FFF',
        'section-color': '#FAF7F5',
      },
    },
  },
  plugins: [],
}

