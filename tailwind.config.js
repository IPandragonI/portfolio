/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': '#f1c38d',
        'indicator-focus': '#ac4800',
        'section-color': '#f5e7d3',
      },
    },
  },
  plugins: [],
}

