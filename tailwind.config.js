/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        acsGreen: '#2e7d32',
        acsDark: '#1b5e20',
      },
    },
  },
  plugins: [],
}