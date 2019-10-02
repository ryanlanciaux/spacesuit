/** @jsx jsx */
import React, { useRef } from "react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuLink
} from "@reach/menu-button";
import "@reach/menu-button/styles.css";

import Button from "@spacesuit/button";
import Box from "@spacesuit/box";
import { jsx } from "@emotion/core";

function DropdownButton(props) {
  return <Button as={MenuButton} {...props} />;
}

function DropdownLink(props) {
  return <MenuLink {...props} />;
}

export default function Dropdown({ toggleText, children, ...buttonProps }) {
  return (
    <Menu>
      <DropdownButton {...buttonProps}>{toggleText}</DropdownButton>
      <MenuList>{children}</MenuList>
    </Menu>
  );
}

Dropdown.Button = DropdownButton;
Dropdown.Item = MenuItem;
Dropdown.Link = MenuLink;
