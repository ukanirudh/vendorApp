import React, { Component } from 'react';
import { Route } from 'react-router-dom';

/*Import components*/
import ApplicationHomePage from './applicationHomePage/ApplicationHomePage'
import AuthenticationModule from './scenes/Authentication';
import AboutUs from './applicationHomePage/AboutUs'
import VendorHome from './scenes/vendor/';
import ClientHome from './scenes/client/';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={ApplicationHomePage}/>
        <Route path='/about' component={AboutUs} />
        <Route path="/authorization" component={AuthenticationModule}></Route>
        <Route path="/vendor" component={VendorHome}></Route>
        <Route path="/client" component={ClientHome}></Route>
      </div>
    );
  }
}

export default App;
