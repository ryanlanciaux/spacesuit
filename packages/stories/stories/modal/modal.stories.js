import React, { useState } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { select } from "@storybook/addon-knobs";

import { Modal } from "@spacesuit/spacesuit";

storiesOf("modal", module)
  .add("default", () => {
    return (
      <>
        <p>
          Ipsum minim aliqua excepteur amet proident proident commodo ullamco et
          ut. Esse est enim occaecat pariatur eu exercitation labore cillum
          cillum. Nulla dolor in consectetur amet ipsum sit esse pariatur
          commodo ut cupidatat tempor sint. Ad minim duis ad et cillum et ut.
        </p>
        <p>
          Exercitation proident tempor duis labore exercitation est tempor
          veniam voluptate. Dolore est deserunt nulla velit sint consequat
          officia elit ea nisi est cupidatat exercitation consectetur. Fugiat
          nisi mollit fugiat et adipisicing. Consectetur minim aute voluptate ex
          elit veniam amet esse magna cupidatat quis excepteur ea.
        </p>
        <Modal isOpen={true} onClose={action("ON CLOSE")}>
          <h1 style={{ margin: 0 }}>Hi</h1>
          <p>
            Exercitation proident tempor duis labore exercitation est tempor
            veniam voluptate. Dolore est deserunt nulla velit sint consequat
            officia elit ea nisi est cupidatat exercitation consectetur. Fugiat
            nisi mollit fugiat et adipisicing. Consectetur minim aute voluptate
            ex elit veniam amet esse magna cupidatat quis excepteur ea.
          </p>
        </Modal>
      </>
    );
  })
  .add("with no padding", () => {
    return (
      <>
        <p>
          Ipsum minim aliqua excepteur amet proident proident commodo ullamco et
          ut. Esse est enim occaecat pariatur eu exercitation labore cillum
          cillum. Nulla dolor in consectetur amet ipsum sit esse pariatur
          commodo ut cupidatat tempor sint. Ad minim duis ad et cillum et ut.
        </p>
        <p>
          Exercitation proident tempor duis labore exercitation est tempor
          veniam voluptate. Dolore est deserunt nulla velit sint consequat
          officia elit ea nisi est cupidatat exercitation consectetur. Fugiat
          nisi mollit fugiat et adipisicing. Consectetur minim aute voluptate ex
          elit veniam amet esse magna cupidatat quis excepteur ea.
        </p>
        <Modal
          isOpen={true}
          showClose={false}
          contentProps={{ p: "0" }}
          onClose={action("ON_CLOSE")}
        >
          <div
            style={{
              width: "100%",
              height: 64,
              backgroundColor: "#BAD",
              paddingTop: 12
            }}
          >
            <h1 style={{ margin: 0 }}>Hi</h1>
          </div>
          <p>
            Exercitation proident tempor duis labore exercitation est tempor
            veniam voluptate. Dolore est deserunt nulla velit sint consequat
            officia elit ea nisi est cupidatat exercitation consectetur. Fugiat
            nisi mollit fugiat et adipisicing. Consectetur minim aute voluptate
            ex elit veniam amet esse magna cupidatat quis excepteur ea.
          </p>
        </Modal>
      </>
    );
  });
