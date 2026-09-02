import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#14201E",
          soft: "#1C2B28",
        },
        paper: {
          DEFAULT: "#F7F5F1",
          dim: "#EFEBE3",
        },
        pine: {
          50: "#EEF3F1",
          100: "#D7E3DE",
          200: "#AFC7BE",
          300: "#87AB9E",
          400: "#5F8F7D",
          500: "#3E6259",
          600: "#334F48",
          700: "#293F3A",
          800: "#1F2F2B",
          900: "#16211E",
        },
        amber: {
          DEFAULT: "#B8863B",
          soft: "#D9AE72",
        },
        slate: {
          soft: "#5B6663",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 0 rgba(20,32,30,0.06), 0 12px 24px -16px rgba(20,32,30,0.25)",
        lift: "0 20px 40px -20px rgba(20,32,30,0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
