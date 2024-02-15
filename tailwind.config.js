/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#60a5fa",
          secondary: "#4338ca",
          accent: "#ffed7a",
          neutral: "#2b3c8c",
          "base-100": "#d5daf5",
          info: "#00daff",
          success: "#4ade80",
          warning: "#fb923c",
          error: "#db2777",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
