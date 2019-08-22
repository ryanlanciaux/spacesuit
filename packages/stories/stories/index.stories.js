import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";
import Button from "@spacesuit/button";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <>
      <Button variant="outline" color="primary">
        Standard
      </Button>
      <Button uppercase>with upperCase prop</Button>
    </>
  ))
  .add("Without theme", () => <Button color="primary">Click</Button>);
