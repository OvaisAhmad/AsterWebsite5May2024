/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{html,js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{html,js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "aster-green": "#03a885",
        "aster-blue": "#1d428b",
        "paragraph-text": "rgba(30, 30, 30, 0.5)",
        "blue-light": "#cfdfff",
        grey: "#656565",
        gray: {
          "100": "#1e1e1f",
          "200": "rgba(255, 255, 255, 0.4)",
          "300": "rgba(30, 30, 30, 0.8)",
        },
        mediumaquamarine: "#03a885",
        mediumaquamarine: {
          "100": "#04aa86",
          "200": "#04a885",
          "300": "#03a885",
        },
        whitesmoke: "#f2f3f4",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        poppins: "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
        "heading-01": "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
        "work-sans": "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      "2xl": "21px",
      xl: "20px",
      "5xl": "24px",
      "37xl": "56px",
      lg: "18px",
      "46xl": "65px",
      "56xl": "75px",
      "3xl": "22px",
      base: "14px",
      "49xl": "68px",
      "9xl": "28px",
      "15xl":"36px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
        min:"320px",
      },
      xl: "1210px",
      xxl:"1430px",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
