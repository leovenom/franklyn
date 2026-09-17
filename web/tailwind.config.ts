import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        franklyn: {
          canvas: "#FFFDF5",
          card: "#FFFFFF",
          ink: "#1E293B",
          muted: "#1E293B",
          subtle: "#94A3B8",
          surface: "#F1F5F9",
          accent: "#8B5CF6",
          secondary: "#F472B6",
          tertiary: "#FBBF24",
          quaternary: "#34D399",
          border: "#E2E8F0",
          ring: "#8B5CF6",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "72rem",
        prose: "36rem",
      },
      borderRadius: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        card: "16px",
        pill: "9999px",
      },
      boxShadow: {
        pop: "4px 4px 0px 0px #1E293B",
        "pop-hover": "6px 6px 0px 0px #1E293B",
        "pop-active": "2px 2px 0px 0px #1E293B",
        "pop-soft": "8px 8px 0px 0px #E2E8F0",
        "pop-pink": "8px 8px 0px 0px #F472B6",
        "pop-accent": "4px 4px 0px 0px #8B5CF6",
      },
      transitionTimingFunction: {
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
