/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content: {
        'eye': 'url("/eye-slash-regular.svg")',
        'close': 'url("/eye-regular.svg")',
      }
    },
  },
  plugins: [],
}

