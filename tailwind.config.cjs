/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    colors: {
      none: "none",
      transparent: "transparent",
      black: "#131313",
      white: {
        100: "#ffffff",
        200: "#E5E5E5",
      },
      gray: "#808080",
      red: "#B33951",
      green: "#1DB954",
      yellow: "#FCA311",
    },

    filter: {
      none: "none",
      grayscale: "grayscale(1)",
      invert: "invert(1)",
      sepia: "sepia(1)",
    },

    fontFamily: {
      sans: [
        "Montserrat",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },

    fontSize: {
      14: "0.875rem", // 14px
      16: "1rem", // 16px
      18: "1.125rem", // 18px
      20: "1.25rem", // 20px
      24: "1.5rem", // 26px
      30: "1.875rem", // 30px
      36: "2.25rem", // 36px
      40: "2.5rem", // 40px
      50: "3.125rem", //50px
      70: "4.375rem", // 70px
      90: "5.625rem", // 90px
      120: "7.5rem", // 120px
    },

    fontWeight: {
      light: "300",
      medium: "500",
      bold: "700",
      black: "900",
    },

    extend: {
      spacing: {
        28: "7rem",
      },

      boxShadow: {
        "yellow-sm": "3px 3px 0px #FCA311",
        "yellow-lg": "-50px 50px 0px #FCA311",
      },
    },
  },
};
