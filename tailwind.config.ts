import type { Config } from "tailwindcss";

const px0To10 = {
  ...Array.from(Array(11)).reduce(
    (acc, _, i) => ({ ...acc, [i]: `${i}px` }),
    {},
  ),
}

const px0To100 = {
  ...Array.from(Array(101)).reduce(
    (acc, _, i) => ({ ...acc, [i]: `${i}px` }),
    {},
  ),
}

const px0To1000 = {
  ...Array.from(Array(1001)).reduce(
    (acc, _, i) => ({ ...acc, [i]: `${i}px` }),
    {},
  ),
}

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      width: px0To1000,
      height: px0To1000,
      borderWidth: px0To10,
      fontSize: px0To100,
      lineHeight: px0To100,
      minWidth: px0To1000,
      minHeight: px0To1000,
      spacing: px0To1000,
      borderRadius: { ...px0To100, button: '6px' },
    },
    
  },
  plugins: [],
};
export default config;
