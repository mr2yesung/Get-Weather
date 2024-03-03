/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scaling: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.2)" },
        },
      },
      animation: {
        scaling: "scaling 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
