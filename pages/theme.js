import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const colorDegradado = "linear-gradient(0.25turn, #111121, #C0FEFC)";
const primaryColor = "#556cd6";
const secundaryColor = "#cccc";
const badgeColor = "linear-gradient(0.25turn, #f10707f7, #0606068c)";
const iconButtonColor = "white";

const containerHeight = "100vh"
const containerMaxWidth = "90vw"
const heightContainerNavbar = "4rem"
const heightContainerFooter = "6rem"

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secundaryColor,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  overrides: {
    MuiContainer: {
      root: {
        height: containerHeight,
        maxWidth: containerMaxWidth,
      },
    },
    MuiBadge: {
      badge: {
        background: badgeColor,
      },
    },
    MuiIconButton: {
      root: {
        color: iconButtonColor,
      },
    },
  },
  navBarColor: colorDegradado,
  heightContainerNavbar: heightContainerNavbar,
  heightContainerFooter: heightContainerFooter
});

export default theme;
