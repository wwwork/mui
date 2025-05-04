import { createTheme, colors } from "@mui/material";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  status: {
    danger: "#ffcc00",
  },
  cssVariables: true,
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: colors.orange[500],
    },
    defaultSecondary: {
      main: colors.grey[500],
      darker: colors.grey[900],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
