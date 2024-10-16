import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-figtree)'
      },
      colors: {
        yellow: "#F4D04E",
        gray: {
          950: "#111111",
          500: "#6B6B6B"
        },
        white: "#FFFFFF"
      },
    },
  },
  plugins: [],
};
export default config;
