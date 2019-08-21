/** @jsx jsx **/
import React from "react";
import { Link } from "rebass";
import Flex from "@spacesuit/flex";
import { jsx } from "@emotion/core";

export function NavItem({ active, ...props }) {
  return <Link {...props} variant={active ? "navLinkActive" : "navLink"} />;
}

export function Nav({ listProps, children, ...props }) {
  return (
    <Flex as="nav" width="100%" alignItems="center" padding={5} {...props}>
      <Flex
        as="ul"
        width="100%"
        justifyContent="space-between"
        flexDirection="row"
      >
        {children}
      </Flex>
    </Flex>
  );
}