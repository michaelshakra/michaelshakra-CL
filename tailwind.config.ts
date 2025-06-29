import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        emea: {
          light: "#f7fafc",
          dark: "#1a202c"
        }
      }
    }
  },
  plugins: []
};

export default config;
