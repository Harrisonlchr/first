import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";
import NavBar from "../components/navBar";
import { CssBaseline, Container } from "@material-ui/core";
import theme from "./theme";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <NavBar />
        <Container maxWidth="lg" disableGutters>
          <Component {...pageProps} />
        </Container>
        <footer>footer</footer>
      </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
