import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "18rem",
        "2xl": "26rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "noise-pattern": "url(/noise.png)",
      },
    },
  },
} as Options;
