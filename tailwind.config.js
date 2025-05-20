module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5733",
        secondary: "#C70039",
      },
      fontFamily: {
        pre: ["Pretendard", "sans-serif"],
        cafe: ["Cafe24Decobox", "sans-serif"],
        one: ["ONE-Mobile-Title"],
        yajalnan: ["yg-jalnan"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
