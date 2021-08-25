import { createTheme } from "@material-ui/core";

//overrids default breakpoints where the grid breaks
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1060,
      lg: 1380,
      xl: 1920,
    },
  },
  colors: {
    tint: {
      primary: "#00000099",
      secondary: "#000000e0",
    },
  },
});

export default theme;
