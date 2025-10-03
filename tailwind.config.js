// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
  backgroundImage: {
    "meta-water": "linear-gradient(90deg, rgba(240,245,255,1) 60%, rgba(245,241,255,0.7) 75%, rgba(255,240,240,0.5) 100%)",
  },
    },
  },
  plugins: [],
};