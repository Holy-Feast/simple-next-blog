import normalizeCSS from 'normalize.css';
import '../app/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from '../state/store';
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

    <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <StyledThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </StyledThemeProvider>
    </ThemeProvider>
    </Provider>
  );
}
