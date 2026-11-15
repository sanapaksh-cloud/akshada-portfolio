import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lilac: "#BDA6FF",
        butter: "#FFF0A3",
        acid: "#D3F36B",
        tomato: "#F2452B",
        ink: "#16120F",
        paper: "#FBF8F0",
      },
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", "serif"],
        serif: ['"Fraunces Variable"', "Georgia", "serif"],
        sans: ['"Space Grotesk Variable"', "system-ui", "sans-serif"],
        hand: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
