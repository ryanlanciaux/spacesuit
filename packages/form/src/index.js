/** @jsx jsx */
import React, { useContext } from "react";
import { Formik, Field } from "formik";
import Box from "@spacesuit/box";
import Text from "@spacesuit/text";
import { jsx } from "@emotion/core";
const FormContext = React.createContext();

export function useFormProps() {
  return useContext(FormContext);
}

export function Form({ children, ...props }) {
  return (
    <Formik {...props}>
      {renderProps => (
        <FormContext.Provider value={renderProps}>
          {React.Children.map(children, item => (
            <Field name={item.props.name}>
              {({ field, form }) => React.cloneElement(item, { field, form })}
            </Field>
          ))}
        </FormContext.Provider>
      )}
    </Formik>
  );
}

export function Select({ field, name, labelText, ...props }) {
  const { errors, values } = useFormProps();

  console.log("FIELD", field);
  return (
    <Box {...props.containerProps}>
      <Text as="label" htmlFor={name} {...props.labelProps}>
        {labelText}
      </Text>
      <Box as="select" {...field} {...props} />
      {errors[name] && touched[name] ? (
        <Text color="error" {...props.errorTextProps}>
          {errors[name]}
        </Text>
      ) : null}
    </Box>
  );
}
