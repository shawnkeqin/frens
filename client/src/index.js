import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
let theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#edf2ff',
      },
    },
  });
  
  theme = createTheme(theme, {
    palette: {
      info: {
        main: theme.palette.primary.main,
      },
    },
  });


ReactDOM.render(
    <ThemeProvider theme={theme}>
<Provider store={store}>
<CssBaseline />
    <App /></Provider>  </ThemeProvider>, document.getElementById("root"));
