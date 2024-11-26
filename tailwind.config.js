/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6D8FFF',
        'primary-hover': '#afc5ff',
        'secondary': '#E284EB',
        'section-color': '#FAF7F5',
      },
    },
  },
  plugins: [],
}

