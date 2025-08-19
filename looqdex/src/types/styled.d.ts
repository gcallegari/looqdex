import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      text: string;
      primary: string;
      surface: string;
      border: string;
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
      pill: string;
    };
    space: (n: number) => string;
  }
}
