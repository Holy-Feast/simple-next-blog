import normalizeCSS from 'normalize.css';
import '../app/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from 'styled-components';
const GlobalStyle = createGlobalStyle`
  ${normalizeCSS}
`;
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <StyledThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </StyledThemeProvider>
    </ThemeProvider>
  );
}
