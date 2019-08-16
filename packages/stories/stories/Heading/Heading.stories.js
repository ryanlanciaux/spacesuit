import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { text } from "@storybook/addon-knobs";

import Heading from "@spacesuit/heading";

storiesOf("Heading", module).add("default", () => {
  const level = text("Level", 2);
  return <Heading level={2}>Hello</Heading>;
});
