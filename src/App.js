import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'semantic-ui-react';
import './App.css';
import LoginForm from './authentication/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Button secondary>Secondary</Button>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LoginForm />
      </div>
    );
  }
}

export default App;
