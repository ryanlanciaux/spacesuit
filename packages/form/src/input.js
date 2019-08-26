/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Field } from "formik";
import Box from "@spacesuit/box";
import Flex from "@spacesuit/flex";
import Text from "@spacesuit/text";

export function Input({ field, name, labelText, type, inputProps, ...props }) {
  return (
    <Field name={name}>
      {({ field, form }) => {
        const { errors, touched } = form;

        return (
          <Flex
            flexDirection="column"
            my="3"
            {...props}
            {...props.containerProps}
          >
            <Text as="label" htmlFor={name} {...props} {...props.labelProps}>
              {labelText}
            </Text>
            <Box
              as={type}
              type="text"
              fontSize="3"
              {...field}
              {...inputProps}
              {...props}
            />
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

Input.defaultProps = {
  type: "input",
  labelProps: {
    mb: "2",
    fontSize: "3"
  },
  errorTextProps: {
    fontSize: "2"
  }
};
