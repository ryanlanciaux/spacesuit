import React from "react";
import { ThemeProvider, theme } from "@spacesuit/theming";

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
