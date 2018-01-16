import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import AuthenticationModule from './scenes/Authentication';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthenticationModule />
      </div>
    );
  }
}

export default App;
