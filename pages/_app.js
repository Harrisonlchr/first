import "../styles/globals.css";
import NavBar from "../components/navBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <footer>footer</footer>
    </>
  );
}

export default MyApp;
