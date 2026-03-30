import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        "background-alt": "#0a0a1a",
        primary: "#E07A5F",
        "primary-dim": "rgba(224, 122, 95, 0.15)",
        "text-main": "#ffffff",
        "text-muted": "#999999",
        "text-dim": "#666666",
        "card-bg": "rgba(255, 255, 255, 0.06)",
        "card-border": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
