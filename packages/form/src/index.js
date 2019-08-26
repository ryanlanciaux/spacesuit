/** @jsx jsx */
import React, { useContext } from "react";
import { Formik } from "formik";
import { jsx } from "@emotion/core";
import { Select } from "./select";
import { Input } from "./input";
import { RadioGroup, RadioOption } from "./radio";
import { CheckboxGroup, Checkbox } from "./checkbox";

const FormContext = React.createContext();

export function useFormProps() {
  return useContext(FormContext);
}

export function Form({ children, ...props }) {
  return (
    <Formik {...props}>
      {renderProps => (
        <form onSubmit={renderProps.handleSubmit}>
          <FormContext.Provider value={renderProps}>
            {children}
          </FormContext.Provider>
        </form>
      )}
    </Formik>
  );
}

export { Input, Select, RadioGroup, RadioOption, Checkbox, CheckboxGroup };
