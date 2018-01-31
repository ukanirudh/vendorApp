import React from 'react';
import { Route, Switch } from 'react-router-dom';
/**
 * Import all page components here
 */
import App from '../App';
import LoginContainer from '../scenes/Authentication/LoginFormContainer';
import SignUpContainer from '../scenes/Authentication/SignUpFormContainer';

const Routes = () => {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path="/login" component={LoginContainer}></Route>
          <Route path="/signup" component={SignUpContainer}></Route>
        </Switch>
      </main>
    );
}
export default Routes;
