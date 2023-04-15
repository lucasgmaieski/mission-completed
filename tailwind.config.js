/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-main': "url('../src/assets/bg.jpg')",
      }
    },
    fontFamily: {
      custom: ['pricedown_bl', 'sans-serif'],
    },
  },
  plugins: [],
}

