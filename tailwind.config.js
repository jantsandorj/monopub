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
    extend: {
      fontFamily: {
        title: ["MBC1961"],
        preten: ["Pretendard"],
      },
      boxShadow: {
        button:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
      },
    },
  },
  plugins: [],
};
