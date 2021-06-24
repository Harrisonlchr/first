import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { esES } from '@material-ui/core/locale';

const colorDegradado = "linear-gradient(0.25turn, #111121, #C0FEFC)";
const primaryColor = "#111121";
const secundaryColor = "#cccc";
const badgeColor = "linear-gradient(0.25turn, #f10707f7, #0606068c)";
const iconButtonColor = "white";

const containerHeight = "100vh";
const containerMaxWidth = "90vw";
const heightContainerNavbar = "4rem";
const heightContainerFooter = "6rem";

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
    MuiButton: {
      root: {
        borderRadius: "3px",
        margin: "1rem",
        textTransform: "uppercase",
        padding: "0.5rem 1.5rem",
        color:iconButtonColor,
        position: "relative",
        background: colorDegradado,
        '&$disabled': {
          background: secundaryColor,
        },
      },
    },
    MuiCircularProgress: {
      root: {
        position: "absolute",
      },
      colorPrimary: {
        color: primaryColor,
      },
    },
  },
  navBarColor: colorDegradado,
  heightContainerNavbar: heightContainerNavbar,
  heightContainerFooter: heightContainerFooter,
}, esES);

export default theme;
