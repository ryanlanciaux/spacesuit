import React from "react";

import { storiesOf } from "@storybook/react";

import Header from "@spacesuit/header";
import Flex from "@spacesuit/flex";
import Link from "@spacesuit/link";

storiesOf("Header", module).add("default", () => {
  return (
    <Header
      bg="primary"
      backgroundUrl="https://source.unsplash.com/random/800x600"
      backgroundOpacity=".3"
      py={60}
    >
      <Flex flexDirection={["column", "row"]}>
        <Flex mx={32} width={[1, 1 / 2]}>
          <img src="https://fakeimg.pl/300x100/?text=SomeLogo" />
        </Flex>
        <Flex width={[1, 1 / 2]}>
          <Link href="#">One</Link>
          <Link href="#">Two</Link>
          <Link href="#">Three</Link>
          <Link href="#">Four</Link>
          <Link href="#">Five</Link>
        </Flex>
      </Flex>
    </Header>
  );
});
