import React, { useState } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { select } from "@storybook/addon-knobs";

import { Wizard, wizardContext, Flex, Button } from "@spacesuit/spacesuit";

const FillMurray = ({
  hasPrevious,
  onCompleteStep,
  onPrevious,
  setWizardState
}) => (
  <Flex flexDirection="column">
    <img src="https://www.fillmurray.com/800/600" />
    <br />
    <Flex
      flexDirection="row"
      justifyContent={hasPrevious ? "space-between" : "flex-end"}
      mt="4"
    >
      {hasPrevious && <Button onClick={onPrevious}>Go back</Button>}

      <Button
        onClick={() => {
          onCompleteStep({ billMurray: true });
        }}
      >
        Next
      </Button>
    </Flex>
  </Flex>
);

const PlaceCage = ({
  hasPrevious,
  onCompleteStep,
  onPrevious,
  setWizardState
}) => (
  <Flex flexDirection="column">
    <img src="https://www.placecage.com/800/600" />
    <Flex
      flexDirection="row"
      justifyContent={hasPrevious ? "space-between" : "flex-end"}
      mt="4"
    >
      {hasPrevious && <Button onClick={onPrevious}>Go back</Button>}
      <Button
        onClick={() => {
          onCompleteStep({ placeCage: true });
        }}
      >
        NEXT
      </Button>
    </Flex>
  </Flex>
);

const StevenSeagallery = ({
  hasPrevious,
  onCompleteStep,
  onPrevious,
  setWizardState
}) => (
  <Flex flexDirection="column">
    <img src="https://www.stevensegallery.com/800/600" />
    <Flex
      flexDirection="row"
      justifyContent={hasPrevious ? "space-between" : "flex-end"}
      mt="4"
    >
      {hasPrevious && <Button onClick={onPrevious}>Go back</Button>}
      <Button
        onClick={() => {
          onCompleteStep({ stevenSegallery: true });
        }}
      >
        NEXT
      </Button>
    </Flex>
  </Flex>
);

const Example = () => {
  const [isFinished, setIsFinished] = useState(false);

  return isFinished ? (
    <h1>FINISHED!</h1>
  ) : (
    <Wizard
      onComplete={data => {
        action("DATA")(data);
        setIsFinished(true);
      }}
    >
      <FillMurray />
      <StevenSeagallery />
      <PlaceCage />
    </Wizard>
  );
};
storiesOf("Wizard", module).add("default", () => {
  return <Example />;
});
