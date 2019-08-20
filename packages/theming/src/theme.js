export const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
  fontFamily: "sans-serif",
  colors: {
    white: "#FFF",
    primary: "#07c",
    gray: "#f6f6ff",
    navLink: "primary"
  },
  space: [0, 4, 8, 16, 32, 64],
  variants: {
    navLink: {
      color: "white",
      fontSize: [0, 3],
      textTransform: "uppercase",
      textDecoration: "none"
    }
  },
  link: {
    primary: {
      display: "block",
      fontSize: "100px",
      color: "white",
      bg: "primary"
    },
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 2px"
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
