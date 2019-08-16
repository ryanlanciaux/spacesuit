import React from "react";

import { storiesOf } from "@storybook/react";

import Flex from "@spacesuit/flex";

storiesOf("Flex", module).add("default", () => {
  return (
    <>
      <strong>Column</strong>
      <Flex flexDirection="column" mb={40}>
        <div>One</div>
        <div>Two</div>
      </Flex>
      <strong>Row</strong>
      <Flex flexDirection="row">
        <div>One</div>
        <div>Two</div>
      </Flex>
    </>
  );
});
