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
      },
      keyframes: {
        blink: {
          '0%, 100%': { color: '#fff'},
          '50%': { color: 'orange'},
        }
      },
      animation: {
        blinkk: 'blink 1s ease-in-out 1',
      }
    },
    fontFamily: {
      custom: ['pricedown_bl', 'sans-serif'],
    },
  },
  plugins: [],
}

