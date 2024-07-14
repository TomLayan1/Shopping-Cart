/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px'
    },
    extend: {
      boxShadow: {
        customShadow: '0 0 7px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
}