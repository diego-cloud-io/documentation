const slate = {
  25: "#F8F9F9",
  50: "#EAECED",
  100: "#D6D8DB",
  200: "#C1C5C9",
  300: "#ACB1B7",
  400: "#999EA6",
  500: "#818791",
  600: "#646B78",
  700: "#414B59",
  800: "#2D3847",
  900: "#182434",
  950: "#151F2D",
};

const red = {
  50: "#FDE8E6",
  100: "#FCD6D3",
  200: "#FAB1AD",
  300: "#F78D86",
  400: "#F56960",
  500: "#F2372B",
  600: "#D71A0E",
  700: "#A2130A",
  800: "#6E0D07",
  900: "#390704",
};

const amber = {
  50: "#FDF2E2",
  100: "#FCEBD1",
  200: "#FBDDAF",
  300: "#F9CE8D",
  400: "#F7C06B",
  500: "#F4A731",
  600: "#DC8A0C",
  700: "#A26609",
  800: "#684106",
  900: "#2E1D02",
};

const blue = {
  25: "#F3FCFF",
  50: "#D0F2FF",
  100: "#BBEDFF",
  200: "#93E2FF",
  300: "#6AD7FF",
  400: "#41CCFF",
  500: "#09BDFF",
  600: "#0098D0",
  700: "#006F98",
  800: "#004660",
  900: "#001D27",
};

const purple = {
  50: "#F9F9FD",
  100: "#DCDCEB",
  200: "#BEBEDA",
  300: "#A1A1C8",
  400: "#8283B6",
  500: "#6A6FA0",
  600: "#565A88",
  700: "#424570",
  800: "#333557",
  900: "#252747",
};

const green = {
  50: "#F5FAEF",
  100: "#EBF5DF",
  200: "#D7ECBF",
  300: "#C3E3A0",
  400: "#B0D980",
  500: "#9CD061",
  600: "#81C039",
  700: "#64952C",
  800: "#47691F",
  900: "#2A3E12",
};

const lime = {
  50: "#EFFCD7",
  100: "#E6FAC2",
  200: "#D5F698",
  300: "#C4F26D",
  400: "#B3EF43",
  500: "#A2EB19",
  600: "#83C011",
  700: "#63910D",
  800: "#436209",
  900: "#233404",
};
/**
 * @type {import("tailwindcss").Config}
 */

const config = {
  content: [
    "./index.html",
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "tw-",
  theme: {
    extend: {
      colors: {
        slate,
        red,
        amber,
        blue,
        purple,
        green,
        lime,
      },
      fontFamily: {
        sans: ["OutfitVariable", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        sm: "0.15625rem", // 2.5px
        DEFAULT: "0.3125rem", // 5px
        md: "0.46875rem", // 7.5px
        lg: "0.625rem", // 10px
      },
      margin: {
        17: "4.25rem",
        34: "8.5rem",
        37: "9.25rem",
      },
      padding: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        15: "3.75rem",
        17: "4.25rem",
        23: "5.75rem",
      },
      brightness: {
        80: "0.8",
      },
      transitionProperty: {
        // also transition rings and outlines
        // ring-green-500/70 wouldn't have a transition if this is not set, for example
        colors:
          "color, background-color, border-color, text-decoration-color, fill, stroke, box-shadow, outline-color",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-expo": "cubic-bezier(0.7, 0, 0.84, 0)",
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      width: {
        em: "1em",
        4.5: "1.125rem",
        8.5: "2.125rem",
        30: "7.5rem",
        65: "16.25rem",
      },
      height: {
        em: "1em",
        4.5: "1.125rem",
        8.5: "2.125rem",
        10.5: "2.625rem",
        19: "4.75rem",
        26: "6.5rem",
      },
      backgroundImage: {
        "gradient-160": "linear-gradient(160deg, var(--tw-gradient-stops))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      opacity: {
        7: "0.07",
      },
      fontSize: {
        "2xs": "0.625rem",
        "4xl": ["2.5rem", { lineHeight: "2.875rem" }],
        "6xl": ["3.625rem", { lineHeight: "1" }],
      },
      zIndex: {
        "-1": "-1",
        1: "1",
      },
      maxWidth: {
        "6xl": "73.75rem",
      },
      gap: {
        inherit: "inherit",
        7: "1.75rem",
      },
      spacing: { 9.5: "2.375rem" },
    },
  },
  plugins: [],
};

module.exports = config;
