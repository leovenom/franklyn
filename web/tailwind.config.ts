import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        franklyn: {
          bg: "#faf9f7",
          surface: "#ffffff",
          ink: "#1a1a1a",
          muted: "#5c5c5c",
          accent: "#c45a2a",
          "accent-dark": "#9a4520",
          border: "#e8e4df",
          dark: "#0f1419",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
