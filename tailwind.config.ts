import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nature palette
        forest: {
          50: "#f3f7f2",
          100: "#e3ece1",
          200: "#c7d9c3",
          300: "#9fbd98",
          400: "#729a69",
          500: "#527d49",
          600: "#3e6337",
          700: "#33502e",
          800: "#2b4027",
          900: "#243522",
          950: "#121d10",
        },
        moss: {
          DEFAULT: "#7e9a6a",
          light: "#a7bd92",
          dark: "#5c7549",
        },
        earth: {
          50: "#faf6f0",
          100: "#f2e8d8",
          200: "#e4d0b3",
          300: "#d2b183",
          400: "#c08f57",
          500: "#b07342",
          600: "#985c36",
          700: "#7c4830",
          800: "#653c2c",
          900: "#553328",
          950: "#2f1a13",
        },
        cream: {
          DEFAULT: "#f7f3ea",
          dark: "#efe8d8",
          paper: "#fbf9f3",
        },
        ink: "#1c2620",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
