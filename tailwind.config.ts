import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateAreas: {
        album: ["main main side-1", "main main side-2"],
      },
      colors: {
        "grey-1": "#E0E0E0",
        "grey-2": "#F2F2F2",
        "blue-accent": "#2F80ED",
        "background-light": "#F4F4F4",
        "text-dark": "#1A1A1A",
        "text-medium": "#181818",
        "text-light": "#4F4F4F",
        star: "#F2994A",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
export default config;
