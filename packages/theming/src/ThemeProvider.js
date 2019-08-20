import React from "react";
import { theme as defaultTheme } from "./theme";
import { ThemeProvider as StyledThemeProvider } from "emotion-theming";

export function ThemeProvider({ theme, children }) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}

ThemeProvider.defaultProps = {
  theme: defaultTheme
};
