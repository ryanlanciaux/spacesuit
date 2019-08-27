/** @jsx jsx **/
import React from "react";
import { Box as BassBox } from "rebass";
import styled from "@emotion/styled";
import { jsx, css } from "@emotion/core";

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

// Doing this for now which isn't ideal
// https://github.com/emotion-js/emotion/issues/1306
// https://github.com/storybookjs/storybook/issues/7540
const backgroundCss = (backgroundOpacity, backgroundUrl) => `
   position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: #000;
  background: url("${backgroundUrl}");
  opacity: ${backgroundOpacity};
  background-size: cover;

`;

export default function Box({
  backgroundUrl,
  backgroundOpacity,
  children,
  ...props
}) {
  if (backgroundUrl) {
    return (
      <BassBox
        {...props}
        css={css`
          position: relative;
        `}
      >
        <div css={css(backgroundCss(backgroundOpacity, backgroundUrl))} />
        <Content>{children}</Content>
      </BassBox>
    );
  }

  return <BassBox {...props}>{children}</BassBox>;
}
