/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Field } from "formik";
import Box from "@spacesuit/box";
import Flex from "@spacesuit/flex";
import Text from "@spacesuit/text";

export function RadioOption({
  id,
  children: text,
  fieldName,
  labelProps,
  inputProps,
  onChange,
  ...props
}) {
  return (
    <Flex {...props}>
      <Box
        as="input"
        onChange={onChange}
        id={id}
        type="radio"
        name={fieldName}
        value={id}
        {...inputProps}
      />
      <Box as="label" htmlFor={id} {...labelProps}>
        {text}
      </Box>
    </Flex>
  );
}

RadioOption.defaultProps = {
  mb: "1",
  flexDirection: "row",
  alignItems: "center",
  labelProps: {
    ml: "2"
  },
  inputProps: {
    fontSize: "6"
  }
};

export function RadioGroup({
  children,
  field,
  name,
  description,
  fieldsetProps,
  containerProps,
  ...props
}) {
  return (
    <Field name={name}>
      {({ field, form }) => {
        const { errors, touched, handleChange } = form;

        return (
          <Flex flexDirection="column" my="3" {...props} {...containerProps}>
            <Box as="fieldset" {...props} {...fieldsetProps}>
              <legend>{description}</legend>
              {React.Children.map(children, child => {
                return React.cloneElement(child, { onChange: handleChange });
              })}
            </Box>
            {errors[name] && touched[name] ? (
              <Text color="error" mt="1" {...props} {...props.errorTextProps}>
                {errors[name]}
              </Text>
            ) : null}
          </Flex>
        );
      }}
    </Field>
  );
}

RadioGroup.defaultProps = {
  fieldsetProps: {
    mb: "2",
    fontSize: "3"
  },
  errorTextProps: {
    fontSize: "2"
  }
};
