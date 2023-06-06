import normalizeCSS from 'normalize.css';
import '../app/globals.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@emotion/cache';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  ${normalizeCSS}
`;
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const cache = createEmotionCache({ key: 'css' });
export default function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={darkTheme}>
        <StyledThemeProvider theme={darkTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </StyledThemeProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

