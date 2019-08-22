import React from "react";
import { Button as BassButton } from "rebass";

export default function Button(props) {
  const content =
    props.uppercase && typeof props.children === "string"
      ? props.children.toUpperCase()
      : props.children;

  return <BassButton {...props}>{content}</BassButton>;
}
