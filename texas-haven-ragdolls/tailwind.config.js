/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dust: {
          50:  '#f0f5f9',
          100: '#dce9f3',
          200: '#b8d0e8',
          300: '#8eb4d8',
          400: '#6497c4',
          500: '#4a7fa5',
          600: '#3a6585',
          700: '#2c4d66',
          800: '#1e3547',
          900: '#111f2b',
        },
        cream: {
          50:  '#faf8f5',
          100: '#f3efe8',
          200: '#e8e0d2',
        }
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", 'Georgia', 'serif'],
        sans:  ["'DM Sans'", 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
