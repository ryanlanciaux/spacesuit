/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Field } from "formik";
import Box from "@spacesuit/box";
import Flex from "@spacesuit/flex";

export function Select({ field, name, labelText, ...props }) {
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
            <Box
              as="label"
              variant="label"
              htmlFor={name}
              {...props}
              {...props.labelProps}
            >
              {labelText}
            </Box>
            <Box as="select" variant="select" {...field} {...props} />
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

Select.defaultProps = {};
