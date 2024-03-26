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
        album: ["main"],
        album_mid: ["main main", "side-1 side-2"],
        album_full: ["main main side-1", "main main side-2"],
      },
      colors: {
        "grey-1": "#E0E0E0",
        "grey-2": "#F2F2F2",
        "grey-3": "#828282",
        "grey-4": "#333333",
        "grey-5": "#EBEBEB",
        "blue-accent": "#2F80ED",
        "blue-accent-5%": "rgba(47, 128, 237, 0.05)",
        "background-light": "#F4F4F4",
        "text-dark": "#1A1A1A",
        "text-medium": "#181818",
        "text-light": "#4F4F4F",
        star: "#F2994A",
        "tag-red": "#EB5757",
        "tag-yellow": "#F2994A",
        "tag-green": "#219653",
      },
    },
  },
  plugins: [
    require("@savvywombat/tailwindcss-grid-areas"),
    require("@tailwindcss/forms"),
  ],
};
export default config;
