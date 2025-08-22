// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundGradent: {
        "blue-purple": "linear-gradient(to bottom right, #3b82f6, #9333ea)",
      },
    },
  },
  plugins: [],
};
