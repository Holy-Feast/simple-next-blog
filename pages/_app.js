
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
      main: '#1E90FF',
    },
    secondary: {
      main: '#FF6347',
    },
  },
});

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.palette.background.default};
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
