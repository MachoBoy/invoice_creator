import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';

const ThemeProvider = () => (
  <MuiThemeProvider>
      <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <ThemeProvider />,
  document.getElementById('root')
);
