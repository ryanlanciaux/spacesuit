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
  checked,
  ...props
}) {
  return (
    <Flex {...props} variant="checkboxContainer">
      <Box
        as="input"
        onChange={onChange}
        id={id}
        type="checkbox"
        variant="checkbox"
        name={fieldName}
        value={id}
        checked={checked}
        {...inputProps}
      />
      <Box as="label" variant="label" htmlFor={id} {...labelProps}>
        {text}
      </Box>
    </Flex>
  );
}

Checkbox.defaultProps = {
  labelProps: {
    ml: "2"
  },
  inputProps: {
    fontSize: 40
  }
};

export function CheckboxGroup({
  children,
  field,
  name,
  description,
  fieldsetProps,
  containerProps,
  showFieldset,
  ...props
}) {
  return (
    <FieldArray name={name}>
      {({ push, remove, form }) => {
        const { errors, touched, values } = form;
        const isArray = children.length >= 1;

        return (
          <Flex
            flexDirection="column"
            my="3"
            variant="checkboxGroup"
            {...props}
            {...containerProps}
            as={isArray && showFieldset ? "fieldset" : "div"}
          >
            {isArray && <legend>{description}</legend>}
            {Children.map(children, child => {
              return cloneElement(child, {
                onChange: e => {
                  if (!isArray) {
                    values[name] = e.target.checked;
                    return;
                  }
                  if (e.target.checked) {
                    push(child.props.id);
                  } else {
                    const idx = values[name].indexOf(child.props.id);
                    remove(idx);
                  }
                }
              });
            })}
            {errors[name] && touched[name] ? (
              <Box variant="error" {...props.errorTextProps}>
                {errors[name]}
              </Box>
            ) : null}
          </Flex>
        );
      }}
    </FieldArray>
  );
}

CheckboxGroup.defaultProps = {
  showFieldset: true,
  errorTextProps: {
    fontSize: "2"
  }
};
