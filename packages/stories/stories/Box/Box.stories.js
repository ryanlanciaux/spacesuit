import React from "react";

import { storiesOf } from "@storybook/react";

import Box from "@spacesuit/box";

storiesOf("Box", module).add("default", () => {
  return (
    <Box p={40} bg="#FAB">
      This is a box
    </Box>
  );
});
