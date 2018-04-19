import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

/*Import components*/
import ApplicationHomePage from './applicationHomePage/ApplicationHomePage'
import AuthenticationModule from './scenes/Authentication';
import VendorHome from './scenes/vendor/';
import ClientHome from './scenes/client/';

/*Import footer components*/
import AboutUs from './footerActions/AboutUs'
import ReachUs from './footerActions/ReachUs'
import OurVision from './footerActions/OurVision'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' component={ApplicationHomePage}/>
        <Route path='/about' component={AboutUs} />
        <Route path='/reachus' component={ReachUs} />
        <Route path='/ourvision' component={OurVision} />
        <Route path="/authorization" component={AuthenticationModule}></Route>
        <Route path="/vendor" component={VendorHome}></Route>
        <Route path="/client" component={ClientHome}></Route>
      </Switch>
      </div>
    );
  }
}

export default App;
