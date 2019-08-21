import React from "react";
import Box from "@spacesuit/box";

export default function footer({ children, ...props }) {
  return (
    <Box as="footer" {...props}>
      {children}
    </Box>
  );
}
