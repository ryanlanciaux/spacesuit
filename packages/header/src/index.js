import React from "react";
import Box from "@spacesuit/box";

export default function header({ backgroundUrl, ...props }) {
  return <Box {...props} backgroundUrl={backgroundUrl} as="header" />;
}
