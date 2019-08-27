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
      fontSize: "5"
    }
  },
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
