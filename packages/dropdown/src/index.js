/** @jsx jsx */
import React from "react";
import Downshift from "downshift";
import Button from "@spacesuit/button";
import Box from "@spacesuit/box";
import { jsx } from "@emotion/core";

const DefaultDropdownContainer = React.forwardRef((props, ref) => (
  <Box
    as="ul"
    mt="2"
    mx="0"
    p="2"
    bg="dropdownBg"
    lineHeight="2"
    ref={ref}
    sx={{
      display: "flex",
      flexShrink: "1",
      width: 300,
      flexDirection: "column"
    }}
    {...props}
  />
));

export default function dropdown({
  containerStyle,
  items,
  buttonComponent,
  onChange,
  dropdownContainerComponent = DefaultDropdownContainer
}) {
  return (
    <Downshift onChange={onChange}>
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        getToggleButtonProps,
        isOpen,
        highlightedIndex,
        selectedItem
      }) => {
        const toggleProps = getToggleButtonProps();
        const menuProps = getMenuProps();

        return (
          <div style={containerStyle}>
            <Button
              as={buttonComponent}
              {...getToggleButtonProps()}
              suppressRefError={true}
            >
              Open
            </Button>
            {isOpen ? (
              <Box
                as={dropdownContainerComponent}
                {...menuProps}
                suppressRefError={true}
              >
                {items.map((item, index) => (
                  <Box
                    as="li"
                    sx={{
                      listStyleType: "none",
                      mx: 0,
                      fontWeight: highlightedIndex === index ? "800" : "400"
                    }}
                    {...getItemProps({ key: item.value, item, index })}
                  >
                    {item.node}
                  </Box>
                ))}
              </Box>
            ) : null}
          </div>
        );
      }}
    </Downshift>
  );
}
