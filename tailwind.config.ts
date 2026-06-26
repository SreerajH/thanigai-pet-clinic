import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FDFAF5",
        surface: "#F0EBE1",
        primary: "#2D6A4F",
        "primary-dark": "#1F4D39",
        "primary-light": "#E8F2EC",
        accent: "#F4A261",
        "accent-dark": "#D4813A",
        "text-dark": "#1A1A1A",
        "text-muted": "#6B6B6B",
        border: "#E2DAD0",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        util: ["var(--font-util)", "monospace"],
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(26,26,26,0.04), 0 18px 40px -22px rgba(26,26,26,0.16)",
        nav: "0 1px 0 0 rgba(26,26,26,0.08)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseWa: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.04)" },
        },
        drawIn: {
          "0%": { strokeDashoffset: "200" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s cubic-bezier(0.2,0.8,0.2,1) forwards",
        pulseWa: "pulseWa 2s ease-in-out infinite",
        drawIn: "drawIn 1s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
