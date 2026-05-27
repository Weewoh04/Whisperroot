import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        moss: {
          950: "#07130f",
          900: "#0d2018",
          800: "#173425",
          700: "#245138",
          500: "#4d8b5a"
        },
        root: "#c98343",
        amberglow: "#f4c66a",
        violetcap: "#9d7bd8",
        creamcap: "#efe4c6",
        deepteal: "#0d3b3e"
      },
      boxShadow: {
        glow: "0 0 36px rgba(244, 198, 106, 0.18)",
        violet: "0 0 28px rgba(157, 123, 216, 0.18)"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
