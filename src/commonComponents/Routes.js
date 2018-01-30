import React from 'react';
import { Route, Switch } from 'react-router-dom';
/**
 * Import all page components here
 */
import App from '../App';
import Login from '../scenes/Authentication/LoginForm';
import VendorSignUpForm from '../scenes/Authentication/VendorSignUpForm'

const Routes = () => {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </main>
    );
}
export default Routes;
