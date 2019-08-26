/** @jsx jsx */
import { Children, cloneElement } from "react";
import { FieldArray } from "formik";
import { jsx } from "@emotion/core";
import Box from "@spacesuit/box";
import Flex from "@spacesuit/flex";
import Text from "@spacesuit/text";

export function Checkbox({
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
        type="checkbox"
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

Checkbox.defaultProps = {
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

export function CheckboxGroup({
  children,
  field,
  name,
  description,
  fieldsetProps,
  containerProps,
  ...props
}) {
  return (
    <FieldArray name={name}>
      {({ push, remove, form }) => {
        const { errors, touched, values } = form;

        return (
          <Flex flexDirection="column" my="3" {...props} {...containerProps}>
            <Box as="fieldset" {...props} {...fieldsetProps}>
              <legend>{description}</legend>
              {Children.map(children, child => {
                return cloneElement(child, {
                  onChange: e => {
                    debugger;
                    if (e.target.checked) {
                      push(child.props.id);
                    } else {
                      const idx = values[name].indexOf(child.props.id);
                      remove(idx);
                    }
                  }
                });
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
    </FieldArray>
  );
}

CheckboxGroup.defaultProps = {
  fieldsetProps: {
    mb: "2",
    fontSize: "3"
  },
  errorTextProps: {
    fontSize: "2"
  }
};
