import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { css } from "@emotion/core";
import { linkTo } from "@storybook/addon-links";
import { select } from "@storybook/addon-knobs";
import * as Yup from "yup";
import {
  Form,
  Select,
  Button,
  Input,
  RadioGroup,
  RadioOption,
  Checkbox,
  CheckboxGroup,
  useFormProps
} from "@spacesuit/spacesuit";

const TestSchema = Yup.object().shape({
  select: Yup.string().required("Please make a selection"),
  firstThing: Yup.string().required("First thing is a required field"),
  secondThing: Yup.number("This must be a number").typeError(
    "Must be a number"
  ),
  agreeToTerms: Yup.boolean().oneOf([true], "Must agree to terms")
});

function Blah() {
  const { values } = useFormProps();
  console.log("VALUES", values);
  return null;
}
storiesOf("form", module).add("default", () => {
  return (
    <Form
      validationSchema={TestSchema}
      initialValues={{
        select: "one",
        firstThing: "",
        favoriteMovie: "",
        otherMovie: [],
        agreeToTerms: false
      }}
      errorSummaryProps={{
        css: css`
          a:hover {
            color: #badbad;
          }
        `
      }}
      errorSummaryHeading={
        <h1 style={{ margin: 0 }}>There were a couple of issues</h1>
      }
      onSubmit={values => {
        action("SUBMIT")(values);
      }}
    >
      <Blah />
      <Input name="firstThing" labelText="First thing" />
      <Select name="select" labelText="Works?" value="Please select one">
        <option value="one">One</option>
        <option value="two">two</option>
      </Select>
      <Input name="secondThing" labelText="Number password" type="password" />
      <RadioGroup description="Favorite Movie" showFieldset="false">
        <RadioOption name="favoriteMovie" id="a_new_hope">
          Star Wars IV
        </RadioOption>
        <RadioOption name="favoriteMovie" id="the_empire_strikes_back">
          Star Wars V
        </RadioOption>
        <RadioOption name="favoriteMovie" id="return_of_the_jedi">
          Star Wars VI
        </RadioOption>
      </RadioGroup>
      <CheckboxGroup name="otherMovie" description="Other movies">
        <Checkbox name="otherMovie" id="other_a_new_hope">
          Star Wars IV
        </Checkbox>
        <Checkbox name="otherMovie" id="other_empire">
          Star Wars V
        </Checkbox>
        <Checkbox name="otherMovie" id="other_return_of_the_jedi">
          Star Wars VI
        </Checkbox>
      </CheckboxGroup>
      <Input
        name="comments"
        labelText="Comments"
        as="textarea"
        inputProps={{ rows: 7, cols: 50 }}
      />
      <CheckboxGroup name="agreeToTerms">
        <Checkbox name="agreeToTerms" id="agreeToTerms">
          Agree to terms and conditions
        </Checkbox>
      </CheckboxGroup>
      <Button>SUBMIT</Button>
    </Form>
  );
});
