import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "#ff6e40",
        blue: "#1e3d59",
        "blue-dark": "#162e45",
        "blue-muted": "#1a3450",
        purple: "#63588F",
        yellow: "#ffc13b",
        "custom-white": "#f5f0e1",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-limelight)", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
