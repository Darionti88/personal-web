module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#082032",
        background400: "#2F3B56",
        primary: {
          orange: "#F0A500",
          salmon: "#FF6584",
        },
        text: "#F9FAFA",
        secondText: "#cabea3",
      },
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
        roboto: ["roboto mono", "monospace"],
      },
    },
  },
  plugins: [],
};
