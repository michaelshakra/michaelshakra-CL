import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        emea: {
          light: "#E9F5F2",
          medium: "#2EB49F",
          dark: "#0C3D36",
          highlight: "#F5A623",
          gray: "#F0F0F0",
        },
      },
    },
  },
  plugins: [],
};

export default config;
