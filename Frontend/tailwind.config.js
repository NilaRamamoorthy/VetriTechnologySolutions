export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  safelist: [
    {
      pattern: /bi/,   // <-- FIXED: matches "bi", "bi-facebook", "bi-youtube", etc.
    },
  ],

  theme: {
    extend: {
      keyframes: {
        vtsSentence: {
          "0%": { opacity: "0" },
          "10%": { opacity: "1" },
          "78%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        vtsWord: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "12%": { opacity: "1", transform: "translateY(0px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },

      animation: {
        vtsSentence: "vtsSentence 4.6s ease-in-out infinite",
        vtsWord: "vtsWord 7.6s ease-out infinite",
      },

      colors: {
        "brand-purple": "#6621BA",
        "brand-orange": "#FF9C00",
        "brand-red": "#EF1400",
        "brand-blue": "#1877F2",
      },
    },
  },

  plugins: [],
};
