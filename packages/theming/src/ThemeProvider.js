import React from "react";
import { theme as defaultTheme } from "./theme";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

export function ThemeProvider({ theme, children }) {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
}

ThemeProvider.defaultProps = {
  theme: defaultTheme
};
