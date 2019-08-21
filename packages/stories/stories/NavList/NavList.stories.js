import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { select } from "@storybook/addon-knobs";

import { NavList, NavListItem } from "@spacesuit/spacesuit";

storiesOf("NavList", module).add("default", () => {
  return (
    <div style={{ background: "#777" }}>
      <NavList p={5}>
        <NavListItem href="#">One</NavListItem>
        <NavListItem href="#">Two</NavListItem>
        <NavListItem href="#">Three</NavListItem>
        <NavListItem href="#">Four</NavListItem>
        <NavListItem href="#">Five</NavListItem>
      </NavList>
    </div>
  );
});
