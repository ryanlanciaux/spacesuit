import React from "react";
import { Heading as BassHeading } from "rebass";

const getLevelString = level => {
  if (!Number.isInteger(level) || level < 0 || level > 6) {
    throw "Invalid number passed to heading";
  }

  return `h${level}`;
};

export default function Heading({ level, children, uppercase, ...props }) {
  return (
    <BassHeading as={getLevelString(level)} {...props}>
      {uppercase && typeof children === "string"
        ? children.toUpperCase()
        : children}
    </BassHeading>
  );
}
