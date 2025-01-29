import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-focus": "oklch(var(--primary-focus) / <alpha-value>)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "--primary-focus": "85% 0.1 250",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes").dark,
          "--primary-focus": "45% 0.3 275",
        },
      },
      {
        cupcake: {
          ...require("daisyui/src/theming/themes").cupcake,
          "--primary-focus": "60% 0.35 310",
        },
      },
      {
        bumblebee: {
          ...require("daisyui/src/theming/themes").bumblebee,
          "--primary-focus": "70% 0.4 80",
        },
      },
      {
        emerald: {
          ...require("daisyui/src/theming/themes").emerald,
          "--primary-focus": "60% 0.4 150",
        },
      },
      {
        corporate: {
          ...require("daisyui/src/theming/themes").corporate,
          "--primary-focus": "55% 0.3 220",
        },
      },
      {
        synthwave: {
          ...require("daisyui/src/theming/themes").synthwave,
          "--primary-focus": "55% 0.4 280",
        },
      },
      {
        retro: {
          ...require("daisyui/src/theming/themes").retro,
          "--primary-focus": "70% 0.25 40",
        },
      },
      {
        cyberpunk: {
          ...require("daisyui/src/theming/themes").cyberpunk,
          "--primary-focus": "80% 0.6 90",
        },
      },
      {
        valentine: {
          ...require("daisyui/src/theming/themes").valentine,
          "--primary-focus": "65% 0.4 350",
        },
      },
      {
        halloween: {
          ...require("daisyui/src/theming/themes").halloween,
          "--primary-focus": "75% 0.5 30",
        },
      },
      {
        garden: {
          ...require("daisyui/src/theming/themes").garden,
          "--primary-focus": "65% 0.3 140",
        },
      },
      {
        forest: {
          ...require("daisyui/src/theming/themes").forest,
          "--primary-focus": "55% 0.4 120",
        },
      },
      {
        aqua: {
          ...require("daisyui/src/theming/themes").aqua,
          "--primary-focus": "70% 0.5 200",
        },
      },
      {
        lofi: {
          ...require("daisyui/src/theming/themes").lofi,
          "--primary-focus": "80% 0.1 250",
        },
      },
      {
        pastel: {
          ...require("daisyui/src/theming/themes").pastel,
          "--primary-focus": "85% 0.15 310",
        },
      },
      {
        fantasy: {
          ...require("daisyui/src/theming/themes").fantasy,
          "--primary-focus": "75% 0.3 270",
        },
      },
      {
        wireframe: {
          ...require("daisyui/src/theming/themes").wireframe,
          "--primary-focus": "55% 0.05 250",
        },
      },
      {
        black: {
          ...require("daisyui/src/theming/themes").black,
          "--primary-focus": "20% 0 0",
        },
      },
      {
        luxury: {
          ...require("daisyui/src/theming/themes").luxury,
          "--primary-focus": "40% 0.25 280",
        },
      },
      {
        dracula: {
          ...require("daisyui/src/theming/themes").dracula,
          "--primary-focus": "45% 0.3 290",
        },
      },
      {
        cmyk: {
          ...require("daisyui/src/theming/themes").cmyk,
          "--primary-focus": "50% 0.3 340",
        },
      },
      {
        autumn: {
          ...require("daisyui/src/theming/themes").autumn,
          "--primary-focus": "45% 0.35 30",
        },
      },
      {
        business: {
          ...require("daisyui/src/theming/themes").business,
          "--primary-focus": "45% 0.4 240",
        },
      },
      {
        acid: {
          ...require("daisyui/src/theming/themes").acid,
          "--primary-focus": "60% 0.5 110",
        },
      },
      {
        lemonade: {
          ...require("daisyui/src/theming/themes").lemonade,
          "--primary-focus": "65% 0.5 85",
        },
      },
      {
        night: {
          ...require("daisyui/src/theming/themes").night,
          "--primary-focus": "35% 0.1 250",
        },
      },
      {
        coffee: {
          ...require("daisyui/src/theming/themes").coffee,
          "--primary-focus": "40% 0.1 250",
        },
      },
      {
        winter: {
          ...require("daisyui/src/theming/themes").winter,
          "--primary-focus": "55% 0.3 220",
        },
      },
      {
        dim: {
          ...require("daisyui/src/theming/themes").dim,
          "--primary-focus": "35% 0.15 250",
        },
      },
      {
        nord: {
          ...require("daisyui/src/theming/themes").nord,
          "--primary-focus": "45% 0.3 210",
        },
      },
      {
        sunset: {
          ...require("daisyui/src/theming/themes").sunset,
          "--primary-focus": "55% 0.45 20",
        },
      },
    ],
  },
};
