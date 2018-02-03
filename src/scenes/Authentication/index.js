import React, { Component } from 'react'
import { Route } from 'react-router-dom';

/*Imported components*/
import AuthenticationHomePage from './AuthenticationHomePage'
import LoginFormContainer from './LoginFormContainer';
import SignUpContainer from './SignUpFormContainer';

/*Imported components*/
import { AppHeader, AppFooter } from '../../commonComponents'

import './authentication.css'

class Authentication extends Component {
  render () {
    return (
    <div style={{ padding: '0px 10px' }}>
      <AppHeader />
      <Route path="/authorization/home" component={AuthenticationHomePage}></Route>
      <Route path="/authorization/login" component={LoginFormContainer}></Route>
      <Route path="/authorization/signup" component={SignUpContainer}></Route>
      <AppFooter />
    </div>
    )
  }
}

export default Authentication
