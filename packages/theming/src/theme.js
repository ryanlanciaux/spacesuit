const navLink = {
  color: "white",
  fontSize: [0, 3],
  textTransform: "uppercase",
  textDecoration: "underline"
};

export const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
  fonts: ["sans-serif"],
  colors: {
    white: "#FFF",
    primary: "#07c",
    active: "#47FF54",
    gray: "#f6f6ff",
    borderGray: "#777",
    grayMid: "#EDEDED",
    navLink: "primary",
    error: "#F00"
  },
  space: [0, 4, 8, 16, 32, 64],
  variants: {
    navLink,
    navLinkActive: {
      ...navLink,
      color: "active"
    },
    labelField: {
      fontSize: 300
    },
    fieldset: {
      mb: "2",
      fontSize: "3"
    },
    select: {
      fontSize: "3"
    },
    input: {
      fontSize: "3"
    },
    checkboxGroup: {
      mb: "2",
      fontSize: "3"
    },
    checkboxContainer: {
      flexDirection: "row",
      alignItems: "center"
    },
    checkbox: {
      zoom: 1.75
    },
    label: {
      fontSize: "3",
      fontFamily: "sans-serif",
      mb: "2"
    },
    error: {
      fontSize: "2",
      mt: "1",
      fontFamily: "sans-serif",
      color: "error"
    }
  },
  text: {},
  buttons: {
    primary: {
      color: "white",
      bg: "primary"
    },
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 2px"
    }
  }
};
