/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'secondary': 'var(--color-secondary)',
        'tertiary': 'var(--color-tertiary)',
        'section-color': 'var(--color-section)',
        'text-color': 'var(--text-color)',
      },
    },
  },
  plugins: [],
}

