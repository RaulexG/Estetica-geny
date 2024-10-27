/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'gray-custom': '#5B5A5B', 
        'gray-bg': '#343032',
      },
    },
  },
  plugins: [],
}

