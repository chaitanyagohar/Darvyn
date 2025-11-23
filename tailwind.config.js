/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at top, rgba(56,189,248,0.12), transparent 60%), radial-gradient(circle at bottom, rgba(59,130,246,0.2), transparent 55%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        "float-slow": "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
