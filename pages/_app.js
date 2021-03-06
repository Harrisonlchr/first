import { useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import { CssBaseline, Container } from "@material-ui/core";
import theme from "../styles/theme";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
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
      <Container fixed={false} maxWidth={false} className="containerApp">
        <Component {...pageProps} />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
