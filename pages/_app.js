import "../styles/globals.css";
import { StyledFooter } from "../components/homeStyles/StyledIndex";
import GlobalStyle from "../themes/GlobalStyle";
import Theme from "../themes/Theme";
import { ThemeProvider } from "styled-components";
import Header from "../components/header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <StyledFooter>
          Design and implementation by Daniel Martinez Lara
        </StyledFooter>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
