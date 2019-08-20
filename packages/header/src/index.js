import React from "react";
import Box from "@spacesuit/box";
import { Nav, NavItem } from "./Navigation";

function Header({ backgroundUrl, ...props }) {
  return <Box {...props} backgroundUrl={backgroundUrl} as="header" />;
}

Header.Nav = Nav;
Header.NavItem = NavItem;

export default Header;
