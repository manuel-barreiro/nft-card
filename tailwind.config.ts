import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "softBlue": "hsl(215, 51%, 70%)",
        "customCyan": "hsl(178, 100%, 50%)",
        "bgDarkBlue": "hsl(217, 54%, 11%)",
        "cardDarkBlue": "hsl(216, 50%, 16%)",
        "lineDarkBlue": "hsl(215, 32%, 27%)",
      },
    },
  },
  plugins: [],
};
export default config;
