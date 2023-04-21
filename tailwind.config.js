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
          '50%': { color: 'orange', textShadow: '0 0 2px orange'},
        }
      },
      animation: {
        blinkk: 'blink .5s ease-in-out 2',
      }
    },
    fontFamily: {
      custom: ['pricedown_bl', 'sans-serif'],
    },
  },
  plugins: [],
}

