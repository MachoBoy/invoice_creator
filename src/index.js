import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const store = createStore(reducers);

store.subscribe(() => console.log(store.getState())); // get status by subscribe
//const unsubscribe = store.subscribe(() => console.log(store.getState())); // unsubscribe
// store.dispatch(action.create());

const ThemeProvider = () => (
  <MuiThemeProvider>
      <Provider store={store}>
          <App />
      </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(
    <ThemeProvider />,
  document.getElementById('root')
);
