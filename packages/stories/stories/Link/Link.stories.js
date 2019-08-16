import React from "react";

import { storiesOf } from "@storybook/react";

import Link from "@spacesuit/link";

storiesOf("Link", module).add("default", () => {
  return <Link href="#">LOL</Link>;
});
