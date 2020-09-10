/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Field } from "formik";
import Box from "@spacesuit/box";
import Flex from "@spacesuit/flex";

export function Input({
  field,
  name,
  labelText,
  as,
  type,
  inputProps,
  component,
  ...props
}) {
  return (
    <Field component={component} name={name}>
      {({ field, form }) => {
        const { errors, touched } = form;

        return (
          <Flex
            flexDirection="column"
            my="3"
            {...props}
            {...props.containerProps}
          >
            <Box
              as="label"
              variant="label"
              htmlFor={name}
              {...props}
              {...props.labelProps}
            >
              {labelText}
            </Box>
            <Box
              as={as}
              type={type}
              variant="input"
              {...field}
              {...inputProps}
              {...props}
            />
            {errors[name] && touched[name] ? (
              <Box variant="error" {...props} {...props.errorTextProps}>
                {errors[name]}
              </Box>
            ) : null}
          </Flex>
        );
      }}
    </Field>
  );
}

Input.defaultProps = {
  as: "input",
};
