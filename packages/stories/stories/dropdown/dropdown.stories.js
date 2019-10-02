import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { select } from "@storybook/addon-knobs";
import Dropdown from "@spacesuit/dropdown";
import { Text } from "@spacesuit/spacesuit";

storiesOf("dropdown", module).add("default", () => {
  return (
    <>
      <Dropdown toggleText="Open">
        <Dropdown.Item
          onSelect={() => {
            alert("FIRST");
          }}
        >
          First
        </Dropdown.Item>
        <Dropdown.Item
          onSelect={() => {
            alert("SECOND");
          }}
        >
          Second
        </Dropdown.Item>
        <Dropdown.Item
          onSelect={() => {
            alert("THIRD");
          }}
        >
          Third
        </Dropdown.Item>
      </Dropdown>
      <div style={{ backgroundColor: "#BAD", width: 600, height: 600 }} />
    </>
  );
});
/*const items = [
  {
    value: "one",
    node: "FIRST ONE"
  },
  {
    value: "two",
    node: <Text>SECOND ONE</Text>
  },
  {
    value: "three",
    node: "THIRD ONE!"
  }
];
const DropdownButton = props => {
  return (
    <button
      style={{ backgroundColor: "#CCC", color: "#222", padding: 20 }}
      {...props}
    />
  );
};
storiesOf("dropdown", module).add("default", () => {
  return (
    <>
      <Dropdown
        buttonComponent={DropdownButton}
        items={items}
        onChange={action("SELECT")}
      >
        Open this dropdown
      </Dropdown>
    </>
  );
});*/
