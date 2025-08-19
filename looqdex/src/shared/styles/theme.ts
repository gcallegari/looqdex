import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    bg: "#0b0f1a",
    text: "#e6e6f0",
    primary: "#6F4FF2",
    surface: "#11192a",
    border: "#223047",
  },
  radius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    pill: "999px",
  },
  space: (n) => `${n * 4}px`,
};
