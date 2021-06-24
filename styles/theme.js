import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { esES } from "@material-ui/core/locale";
import { BorderRight } from "@material-ui/icons";

const colorDegradado = "linear-gradient(0.25turn, #111121, #C0FEFC)";
const primaryColor = "#111121";
const secundaryColor = "#cccc";
const badgeColor = "linear-gradient(0.25turn, #f10707f7, #0606068c)";
const iconButtonColor = "white";

const containerHeight = "100vh";
const containerMaxWidth = "95vw";

// Create a theme instance.
const theme = createMuiTheme(
  {
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
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            "&::-webkit-scrollbar": {
              width: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#848383",
              borderRadius: "10px",
              borderRight: "2px solid #ecececd1",
            },
            backgroundColor: "#6f54541a",
            padding: 0,
            margin: 0,
            fontFamily: [
              "-apple-system",
              "BlinkMacSystemFont",
              '"Segoe UI"',
              "Roboto",
              '"Helvetica Neue"',
              "Arial",
              "sans-serif",
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(","),
          },
          footer: {
            background: colorDegradado,
            color: iconButtonColor,
          },
        },
      },
      MuiContainer: {
        root: {
          minHeight: containerHeight,
          maxWidth: containerMaxWidth,
          "&.containerApp": {
            background: "white",
            boxShadow: "0px 0px 15px 1px rgb(121 131 134 / 27%)",
          },
          "&.containerFooter": {
            minHeight: "7rem",
          },
          "&.containerNavBar": {
            minHeight: "4rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          },
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
          color: iconButtonColor,
          position: "relative",
          background: colorDegradado,
          "&$disabled": {
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
      MuiAppBar: {
        root: {
          background: colorDegradado,
        },
      },
    },
  },
  esES
);

export default theme;
