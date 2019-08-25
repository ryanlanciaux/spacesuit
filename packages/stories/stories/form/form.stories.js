import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { select } from "@storybook/addon-knobs";

import { Form, Select } from "@spacesuit/spacesuit";

console.log(Form.Form);
storiesOf("form", module).add("default", () => {
  return (
    <Form>
      <Select name="one" labelText="Hello">
        <option value="one">One</option>
        <option value="two">two</option>
      </Select>
    </Form>
  );
});
