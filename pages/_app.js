import { createGlobalStyle } from 'styled-components';
import normalizeCSS from 'normalize.css';
import '../app/globals.css'
const GlobalStyle = createGlobalStyle`
  ${normalizeCSS}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
