/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

import Box from "@spacesuit/box";

export function ErrorSummary({ errors, summaryHeading, ...props }) {
  console.log("ERRORS", errors, !!errors);
  debugger;
  return errors ? (
    <Box {...props}>
      {summaryHeading}

      {Object.keys(errors).map(key => (
        <a href={`#${key}`}>{errors[key]}</a>
      ))}
    </Box>
  ) : null;
}

ErrorSummary.defaultProps = {
  bg: "grayMid"
};
