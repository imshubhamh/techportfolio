export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  plugins: [require("@tailwindcss/line-clamp")],
  theme: {
    extend: {
      colors: {
        primary: "#facc15",
        darkBg: "#0f0f11",
        card: "#1a1a1d",
      },
    },
    
  },
  plugins: [],
};