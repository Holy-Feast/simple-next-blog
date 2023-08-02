import normalizeCSS from 'normalize.css';
import '../app/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from '../state/store';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0F111A',
    },
    primary: {
      main: '#1E90FF', // Adjust this color to your desired primary color
    },
    secondary: {
      main: '#FF6347', // Adjust this color to your desired secondary color
    },
  },
  // You can also customize other properties like typography, spacing, etc.
  typography: {
    // ...
  },
  // ...
});

const GlobalStyle = createGlobalStyle`
  ${normalizeCSS}
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: ${(props) => props.theme.palette.background.default};
    /* Add other global styles as needed */
  }
`;

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
