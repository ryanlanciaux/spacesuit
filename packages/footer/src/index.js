import React from "react";
import Box from "@spacesuit/box";
import styled from "@emotion/styled";
import { NavList, NavListItem } from "@spacesuit/navlist";

const BackgroundBox = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Content = styled(Box)`
  position: relative;
`;

export default function footer({ backgroundUrl, bg, ...props }) {
  return (
    <Box {...props} as="footer" style={{ position: "relative" }}>
      <BackgroundBox backgroundUrl={backgroundUrl} />
      <BackgroundBox bg={bg} />
      <Content>{props.children}</Content>
    </Box>
  );
}
