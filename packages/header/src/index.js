import React from "react";
import Box from "@spacesuit/box";
import { NavList, NavListItem } from "@spacesuit/navlist";

function Header({ backgroundUrl, ...props }) {
  return <Box {...props} backgroundUrl={backgroundUrl} as="header" />;
}

export default Header;
