import React from "react";
import { Box as BassBox } from "rebass";
import ComponentWithBackground from "./ComponentWithBackground";

export default function Box(props) {
  return ComponentWithBackground({ ...props, Component: BassBox });
}

export { ComponentWithBackground };
