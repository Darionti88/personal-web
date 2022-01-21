module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030d13",
        background400: "#1f263a",
        primary: {
          orange: "#F0A500",
          salmon: "#FF6584",
          salmon100: "#e5a4bf",
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
