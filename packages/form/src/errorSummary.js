/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

import Box from "@spacesuit/box";

export function ErrorSummary({ errors, summaryHeading, ...props }) {
  return errors && Object.keys(errors).length > 0 ? (
    <Box p="3" {...props}>
      {summaryHeading}

      <Box as="ul" m="0" px="3">
        {Object.keys(errors).map(key => (
          <Box as="li" p7="1">
            <a href={`#${key}`}>{errors[key]}</a>
          </Box>
        ))}
      </Box>
    </Box>
  ) : null;
}

ErrorSummary.defaultProps = {
  bg: "grayMid"
};
