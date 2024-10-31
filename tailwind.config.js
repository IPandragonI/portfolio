/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ff923e',
        'secondary': '#f7f7f7',
        'tertiary': '#333',
        'section-1': '#F2E5BF',
        'section-2': '#257180',
        'section-3': '#FD8B51',
        'section-4': '#CB6040',
      },
    },
  },
  plugins: [],
}

