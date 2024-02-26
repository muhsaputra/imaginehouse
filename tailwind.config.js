/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "index_portfolio.html"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-main": "url('dist/img/main_bg.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
