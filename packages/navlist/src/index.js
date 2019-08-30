/** @jsx jsx **/
import React from "react";
import Link from "@spacesuit/link";
import Flex from "@spacesuit/flex";
import Box from "@spacesuit/box";
import { jsx } from "@emotion/core";

export function NavItem({ active, listItemProps, ...props }) {
  return (
    <Box as="li" mr="4" {...listItemProps}>
      <Link {...props} variant={active ? "navLinkActive" : "navLink"} />
    </Box>
  );
}

export function Nav({ listProps, children, ...props }) {
  return (
    <Flex as="nav" width="100%" alignItems="center" {...props}>
      <Flex
        as="ul"
        width="100%"
        justifyContent="flex-start"
        sx={{ listStyleType: "none" }}
        flexDirection="row"
        {...listProps}
      >
        {children}
      </Flex>
    </Flex>
  );
}
