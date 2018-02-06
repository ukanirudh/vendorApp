import React, { Component } from 'react'
import { Route } from 'react-router-dom';

/*Imported components*/
import AuthenticationHomePage from './AuthenticationHomePage'
import LoginFormContainer from './LoginFormContainer';
import SignUpContainer from './SignUpFormContainer';

/*Imported components*/
import { AppHeader, AppFooter } from '../../commonComponents'

/*routing and redux*/
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import authenticationAndRegistration from "./root-reducers";

import './authentication.css'

const AuthenticationStore = createStore(authenticationAndRegistration, applyMiddleware(thunk))
class Authentication extends Component {
  render () {
    return (
    <Provider store={AuthenticationStore}>
      <div style={{ padding: '0px 10px' }}>
        <AppHeader />
        <Route exact path="/authorization" component={AuthenticationHomePage}></Route>
        <Route path="/authorization/login" component={LoginFormContainer}></Route>
        <Route path="/authorization/signup" component={SignUpContainer}></Route>
        <AppFooter />
      </div>
    </Provider>
    )
  }
}

export default Authentication
