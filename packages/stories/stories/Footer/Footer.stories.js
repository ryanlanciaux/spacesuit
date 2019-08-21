import React from "react";

import { storiesOf } from "@storybook/react";

import { Footer } from "@spacesuit/spacesuit";

storiesOf("Footer", module).add("default", () => {
  return <Footer bg="primary" color="gray" p={4} />;
});
