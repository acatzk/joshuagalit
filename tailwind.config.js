const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        "dark-dim": "#15202B",
        "blue-twitter": "#1DA1F2",
        grey: {
          100: "#F5F7FA",
          1000: "#1F2933",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: ".50rem",
      },
      typography(theme) {
        return {
          DEFAULT: {
            css: {
              pre: {
                color: theme("colors.grey.1000"),
                backgroundColor: theme("colors.grey.100"),
              },
              "pre code::before": {
                "padding-left": "unset",
              },
              "pre code::after": {
                "padding-right": "unset",
              },
              code: {
                color: "#DD1144",
                fontWeight: "400",
                "border-radius": "0.25rem",
              },
              "code::before": {
                content: '""',
                "padding-left": "0.25rem",
              },
              "code::after": {
                content: '""',
                "padding-right": "0.25rem",
              },
            },
          },
          dark: {
            css: {
              color: theme("colors.gray.300"),
              '[class~="lead"]': {
                color: theme("colors.gray.400"),
              },
              strong: {
                color: theme("colors.gray.100"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.700"),
              },
              hr: {
                borderColor: theme("colors.gray.800"),
              },
              blockquote: {
                color: theme("colors.gray.100"),
                borderLeftColor: theme("colors.gray.800"),
              },
              h1: {
                color: theme("colors.gray.100"),
              },
              h2: {
                color: theme("colors.gray.100"),
              },
              h3: {
                color: theme("colors.gray.100"),
              },
              h4: {
                color: theme("colors.gray.100"),
              },
              code: {
                color: theme("colors.gray.100"),
              },
              "a code": {
                color: theme("colors.gray.100"),
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.gray.100"),
                borderBottomColor: theme("colors.gray.700"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.800"),
              },
            },
          },
        };
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      animation: {
        blob: "blob 7s infinite",
      },
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
      opacity: ["disabled"],
      backgroundColor: ["group-focus"],
      scale: ["active", "group-hover"],
      ringOffsetWidth: ["hover", "active"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
