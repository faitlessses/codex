import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0b0e1a",
        neon: {
          pink: "#ff3d81",
          cyan: "#33f0ff",
          lime: "#c6ff5d"
        }
      },
      fontFamily: {
        sans: ["'Inter var'", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(51, 240, 255, 0.25)",
        neon: "0 0 60px rgba(255, 61, 129, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
