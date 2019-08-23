import React from "react";
import { ComponentWithBackground } from "@spacesuit/box";

import { Flex as BassFlex } from "rebass";

export default function Flex(props) {
  return ComponentWithBackground({ ...props, Component: BassFlex });
}
