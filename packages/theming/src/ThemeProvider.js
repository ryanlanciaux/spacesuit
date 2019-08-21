import React from "react";
import { theme as defaultTheme } from "./theme";
import { ThemeProvider as StyledThemeProvider } from "emotion-theming";
import merge from "deepmerge";

export function ThemeProvider({ theme, themeOverrides, children }) {
  let localTheme = theme;

  if (themeOverrides) {
    localTheme = merge(theme, themeOverrides);
  }

  return (
    <StyledThemeProvider theme={localTheme}>{children}</StyledThemeProvider>
  );
}

ThemeProvider.defaultProps = {
  theme: defaultTheme
};
