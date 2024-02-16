import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens:{

      'vsm':{'max':'400px'},

      'msm':{'max':'500px'},

      'm':'500px',

      'smm' : {'max':'599px'},

      'sm': '640px',

      'navShow':{'max':'680px'},

      'mm': {'min': '600px', 'max': '734px'},

      // => @media (min-width: 640px) { ... }
      'md': {'min': '735px', 'max': '959px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      'mc': {'min': '960px', 'max': '1023px'},

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
      'lgg' : {'min' :"1024px"},

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
      '2xl': {'min': '1280px'},
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],

};
export default config;

