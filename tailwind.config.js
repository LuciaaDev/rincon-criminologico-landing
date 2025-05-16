/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "767px" },
        md: { min: "768px" },
        lg: { min: "1024px" },
      },
      colors: {
        // BASE Colors
        // Blue
        baseRCBlueFirst: "#e7f1f7",
        baseRCBlueSecond: "#c1ddeb",
        baseRCBlueThird: "#9acadf",
        baseRCBlueForth: "#64adcc",
        baseRCBlueFifth: "#4093b7",
        baseRCBlueSixth: "#2f779a",
        baseRCBlueSeventh: "#275f7d",
        baseRCBlueEighth: "#245168",
        baseRCBlueNinth: "#224558",
        baseRCBlueTenth: "#172c3a",

        // Red / Garnet
        baseRCRedFirst: "#fbe9e8",
        baseRCRedSecond: "#f7d4d5",
        baseRCRedThird: "#f1b0b2",
        baseRCRedForth: "#e98389",
        baseRCRedFifth: "#dc5762",
        baseRCRedSixth: "#dc5762",
        baseRCRedSeventh: "#ab2a3e",
        baseRCRedEighth: "#8c2538",
        baseRCRedNinth: "#782335",
        baseRCRedTenth: "#430e18",

        // DISABLED - GREY colors
        colorDisabledBg: "#f0f0f0",
        colorDisabledText: "#989898",
        colorDisabledBorder: "#bdbdbd",

        // SUCCESS - GREEN colors
        colorSuccessBg: "#f6ffed",
        colorSuccessText: "#5fd40e",
        colorSuccessTextCont: "#285611",
        colorSuccessBorder: "#a2f85e",
        colorSuccessIcon: "#f6ffed",
        colorSuccessIconBg: "#5fd40e",

        // ERROR - RED colors
        colorErrorBg: "#fff1f0",
        colorErrorText: "#ff4d4f",
        colorErrorTextCont: "#820014",
        colorErrorBorder: "#ffa39e",
        colorErrorIcon: "#fff1f0",
        colorErrorIconBg: "#ff4d4f",

        // WARNING - ORANGE colors
        colorWarningBg: "#fffceb",
        colorWarningText: "#faad14",
        colorWarningTextCont: "#7a380d",
        colorWarningBorder: "#ffdc49",
        colorWarningIcon: "#fffceb",
        colorWarningIconBg: "#faad14",

        // GREEN colors
        baseGreen: "#f6ffed",
        baseGreenFirst: "#e3fec9",
        baseGreenSecond: "#c6fd99",
        baseGreenThird: "#a2f85e",
        baseGreenForth: "#7fee2d",
        baseGreenFifth: "#5fd40e",
        baseGreenSixth: "#46aa06",
        baseGreenSeventh: "#37810a",
        baseGreenEighth: "#2e650f",
        baseGreenNinth: "#285611",
        baseGreenTenth: "#113003",

        // RED colors
        baseRedFirst: "#fff1f0",
        baseRedSecond: "#ffccc7",
        baseRedThird: "#ffa39e",
        baseRedForth: "#ff7875",
        baseRedFifth: "#ff4d4f",
        baseRedSixth: "#f5222d",
        baseRedSeventh: "#cf1322",
        baseRedEighth: "#a8071a",
        baseRedNinth: "#820014",
        baseRedTenth: "#5c0011",

        // ORANGE colors
        baseOrange: "#fffceb",
        baseOrangeFirst: "#fff6c6",
        baseOrangeSecond: "#ffeb88",
        baseOrangeThird: "#ffdc49",
        baseOrangeForth: "#ffc920",
        baseOrangeFifth: "#faad14",
        baseOrangeSixth: "#dd7f02",
        baseOrangeSeventh: "#b75a06",
        baseOrangeEighth: "#95440b",
        baseOrangeNinth: "#7a380d",
        baseOrangeTenth: "#461d02",
      },
    },
  },
  plugins: [],
};
