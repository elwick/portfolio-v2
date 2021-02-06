import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  colors: {
    white: "#FFF",
    grey200: "#BCBCBC",
    grey150: "#8B8B8B",
    grey80: "#4C4C4C",
    grey50: "#303030",
    grey40: "#2B2B2B",
    grey30: "#1E1E1E",
    black: "#000",
    primary: "#008DFF",
    danger: "#FF266E",
  },
  font: {
    size: {
      small: "14px",
      medium: "16px",
      large: "18px",
    },
    weight: {
      bold: "700",
      medium: "500",
      normal: "400",
      light: "300",
    },
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
