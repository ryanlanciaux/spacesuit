import React from "react";

import { storiesOf } from "@storybook/react";

import { Footer } from "@spacesuit/spacesuit";

storiesOf("Footer", module).add("default", () => {
  return (
    <Footer
      bg="rgba(65, 152, 132, .4)"
      color="gray"
      p={4}
      backgroundUrl="https://source.unsplash.com/random/800x600"
    >
      <p>
        Quis aliquip Lorem aute id incididunt culpa velit do tempor consequat
        elit exercitation excepteur. Id qui duis elit incididunt nulla ex sit
        anim. Sunt et laborum Lorem laboris magna commodo dolore. Nisi cupidatat
        velit nisi amet Lorem aute esse sunt adipisicing excepteur nostrud.
        Laboris commodo excepteur laboris ipsum culpa cupidatat sit veniam
        ullamco nostrud fugiat ullamco. Exercitation dolor ullamco fugiat magna
        aute.
      </p>
    </Footer>
  );
});
