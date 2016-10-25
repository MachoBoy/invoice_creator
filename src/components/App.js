import React, { Component } from 'react';
import Home from './Home';
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

class App extends Component {
    render(){
        return (
          <div>
            <Home />
          </div>
        );
    }
}

export default App;
