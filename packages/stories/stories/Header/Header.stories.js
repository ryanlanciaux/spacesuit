import React from "react";

import { storiesOf } from "@storybook/react";

import Header from "@spacesuit/header";
import Flex from "@spacesuit/flex";

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
        <Flex width={[1, 1 / 2]} justifyContent="space-between">
          <Header.Nav>
            <Header.NavItem href="#">One</Header.NavItem>
            <Header.NavItem href="#">Two</Header.NavItem>
            <Header.NavItem href="#">Three</Header.NavItem>
            <Header.NavItem href="#">Four</Header.NavItem>
            <Header.NavItem href="#">Five</Header.NavItem>
          </Header.Nav>
        </Flex>
      </Flex>
    </Header>
  );
});
