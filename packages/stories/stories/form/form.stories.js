import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { select } from "@storybook/addon-knobs";
import * as Yup from "yup";
import {
  Form,
  Select,
  Button,
  Input,
  RadioGroup,
  RadioOption
} from "@spacesuit/spacesuit";

const TestSchema = Yup.object().shape({
  select: Yup.string().required("Please make a selection"),
  firstThing: Yup.string().required("First thing is a required field"),
  secondThing: Yup.number("This must be a number").typeError("Must be a number")
});

storiesOf("form", module).add("default", () => {
  return (
    <Form
      validationSchema={TestSchema}
      initialValues={{ select: "one", firstThing: "", favoriteMovie: "" }}
      onSubmit={values => {
        action("SUBMIT")(values);
      }}
    >
      <Input name="firstThing" labelText="First thing" />
      <Select name="select" labelText="Works?" value="Please select one">
        <option value="one">One</option>
        <option value="two">two</option>
      </Select>
      <Input name="secondThing" labelText="Second thing" />
      <RadioGroup description="Favorite Movie">
        <RadioOption fieldName="favoriteMovie" id="a_new_hope">
          Star Wars IV
        </RadioOption>
        <RadioOption fieldName="favoriteMovie" id="the_empire_strikes_back">
          Star Wars V
        </RadioOption>
        <RadioOption fieldName="favoriteMovie" id="return_of_the_jedi">
          Star Wars VI
        </RadioOption>
      </RadioGroup>
      <Button>SUBMIT</Button>
    </Form>
  );
});
