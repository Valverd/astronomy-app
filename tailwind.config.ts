module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        nav: "0px 10px 20px rgba(0, 0, 0, 0.24)",
      },
    },
  },
  plugins: [],
};
