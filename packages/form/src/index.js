/** @jsx jsx */
import React, { useContext, Fragment } from "react";
import { Formik } from "formik";
import { jsx } from "@emotion/core";
import { Select } from "./select";
import { Input } from "./input";
import { RadioGroup, RadioOption } from "./radio";
import { CheckboxGroup, Checkbox, CheckboxField } from "./checkbox";
import { ErrorSummary } from "./errorSummary";
const FormContext = React.createContext();

export function useFormProps() {
  return useContext(FormContext);
}

export function Form({
  children,
  errorSummaryProps,
  errorSummaryHeading,
  showErrorSummary = true,
  ...props
}) {
  return (
    <Formik {...props}>
      {renderProps => {
        const { submitCount } = renderProps;

        return (
          <Fragment>
            {submitCount > 0 && showErrorSummary && (
              <ErrorSummary
                {...errorSummaryProps}
                errors={renderProps.errors}
                summaryHeading={errorSummaryHeading}
              />
            )}
            <form onSubmit={renderProps.handleSubmit}>
              <FormContext.Provider value={renderProps}>
                {children}
              </FormContext.Provider>
            </form>
          </Fragment>
        );
      }}
    </Formik>
  );
}

export { Input, Select, RadioGroup, RadioOption, Checkbox, CheckboxGroup };
