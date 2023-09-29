/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./public/*.{html,js,jsx}",
    "./src/**/*.{html,js,jsx}",
    "./src/views/*.{html,js,jsx}",
  ],
  purge: [
    "./public/**/*.html",
    "./src/**/*.{html,js,jsx}",
    "./src/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
