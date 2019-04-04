import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Provider } from './store/store';
import { reducer, initialState } from './store/reducer';
import theme from '_Utils_/themes/themes';

import App from './App';



ReactDOM.render(
  (
    <Provider reducer={reducer} initialState={initialState}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </Provider>
  ),
  document.getElementById('root'),
);

module.hot.accept();
