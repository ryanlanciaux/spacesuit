/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Field } from "formik";
import Box from "@spacesuit/box";
import Flex from "@spacesuit/flex";
import Text from "@spacesuit/text";

export function Select({ field, name, labelText, ...props }) {
  return (
    <Field name={name}>
      {({ field, form }) => {
        const { errors, touched } = form;
        console.log("ERRORS", errors, touched, name);
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
            <Box as="select" fontSize="3" {...field} {...props} />
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

Select.defaultProps = {
  labelProps: {
    mb: "2"
  },
  errorTextProps: {
    fontSize: "2"
  }
};