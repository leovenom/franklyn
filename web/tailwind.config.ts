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
          navy: "#0a192f",
          gold: "#d4a853",
        },
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(196,90,42,0.08), transparent), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(10,25,47,0.06), transparent)",
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
