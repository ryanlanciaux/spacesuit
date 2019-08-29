import React from "react";

import { storiesOf } from "@storybook/react";

import {
  Carousel,
  CarouselImageContent as ImageContent,
  CarouselControls
} from "@spacesuit/spacesuit";

import styled from "@emotion/styled";

const CircleButton = props => (
  <button
    onClick={props.onClick}
    style={{
      width: 60,
      height: 60,
      borderRadius: 30,
      marginLeft: props.showLeft ? -25 : 0,
      marginRight: !props.showLeft ? -25 : 0
    }}
  >
    {props.children}
  </button>
);

const Next = onNext => <CircleButton onClick={onNext}>Next</CircleButton>;

const Previous = onNext => (
  <CircleButton onClick={onNext} showLeft>
    Previous
  </CircleButton>
);

const Example = () => (
  <div style={{ margin: 30, width: 400, height: 400, position: "relative" }}>
    <Carousel
      height="400px"
      width="400px"
      next={Next}
      previous={Previous}
      autoScroll={true}
      controlsStyle={{ bottom: 40, width: "100%" }}
    >
      <ImageContent
        imgSrc="http://www.placecage.com/300/300"
        caption="Nicolas Cage @ 300x300"
        description="First Nicolas Cage image"
        descriptionId="first"
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "rgba(255, 120, 0, .20)",
            flexGrow: "1",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <h1>This is a test</h1>
          <button onClick={() => alert("It works.")}>Click this</button>
        </div>
      </ImageContent>
      <ImageContent
        imgSrc="http://www.fillmurray.com/300/300"
        caption="Bill Murray @ 300x300"
        description="First Bill Murray image"
        descriptionId="second"
      />
      <ImageContent
        imgSrc="http://www.placecage.com/400/400"
        caption="Nicolas Cage @ 400x400"
        description="Second Nicolas Cage image"
        descriptionId="third"
      />
      <ImageContent
        imgSrc="http://www.fillmurray.com/400/400"
        caption="Bill Murray @ 400x400"
        description="Second Bill Murray image"
        descriptionId="fourth"
      />
      <ImageContent
        imgSrc="http://www.placecage.com/500/500"
        caption="Nicolas Cage @ 500x500"
        description="Third Nicolas Cage image"
        descriptionId="fifth"
      />
      <ImageContent
        imgSrc="http://www.fillmurray.com/500/500"
        caption="Bill Murray @ 500x500"
        description="Third Bill Murray image"
        descriptionId="sixth"
      />
    </Carousel>
    <p>
      Sit officia voluptate adipisicing officia reprehenderit duis in magna id
      in id. Deserunt consequat cillum mollit sit quis in ullamco laboris
      proident. Consectetur non aute cupidatat labore sint culpa officia. Magna
      consectetur sit sunt esse amet elit pariatur amet Lorem veniam Lorem
      voluptate. In aliqua cillum et labore fugiat eu amet proident irure
      consectetur commodo nisi proident voluptate.
    </p>
  </div>
);

export default Example;
storiesOf("Carousel", module).add("default", () => {
  return <Example />;
});
