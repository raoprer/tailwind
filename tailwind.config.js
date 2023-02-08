/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        black: '#000000',
        richBlack: '#0C1821',
        oxfordBlue: '#1B2A41',
        charcoal: '#324A5F'
      }
    },
  },
  plugins: [],
}
