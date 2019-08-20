import React from "react";

import { storiesOf } from "@storybook/react";

import Link from "@spacesuit/link";

storiesOf("Link", module).add("default", () => {
  return (
    <div style={{ background: "#EDEDED", width: 600, height: 600 }}>
      <Link href="#">SOmething</Link>
    </div>
  );
});
