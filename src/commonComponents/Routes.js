import React from 'react';
import { Route, Switch } from 'react-router-dom';
/**
 * Import all page components here
 */
import App from '../App';
import Login from '../scenes/Authentication/LoginForm';

const Routes = () => {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={App}/>
        </Switch>
        <Switch>
          <Route path='/login' component={Login}/>
        </Switch>
      </main>
    );
}
export default Routes;
