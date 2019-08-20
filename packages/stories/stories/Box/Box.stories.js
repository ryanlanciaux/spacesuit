import React from "react";

import { storiesOf } from "@storybook/react";

import Box from "@spacesuit/box";

storiesOf("Box", module)
  .add("default", () => {
    return (
      <Box p={40} bg="#FAB">
        This is a box
      </Box>
    );
  })
  .add("With background", () => (
    <Box
      p={40}
      bg="#BADBAD"
      backgroundOpacity=".2"
      backgroundUrl="https://source.unsplash.com/random/800x600"
    >
      This is a box
    </Box>
  ));
