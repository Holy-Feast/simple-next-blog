import normalizeCSS from 'normalize.css';
import '../app/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@emotion/cache';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  ${normalizeCSS}
`;
const theme = createTheme({
  // custom Material-UI theme configuration here
});

const cache = createEmotionCache({ key: 'css' });
export default function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </StyledThemeProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

