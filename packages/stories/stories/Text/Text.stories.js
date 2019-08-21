import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { select } from "@storybook/addon-knobs";

import { Text } from "@spacesuit/spacesuit";

storiesOf("Text", module).add("default", () => {
  return <Text>This is some text</Text>;
});
