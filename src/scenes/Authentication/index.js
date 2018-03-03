import React, { Component } from 'react'
import { Route } from 'react-router-dom';

/*Imported components*/
import AuthenticationHomePage from './AuthenticationHomePage'
import LoginFormContainer from './LoginFormContainer';
import SignUpContainer from './SignUpFormContainer';

/*Imported components*/
import { AppFooter, ResponsiveContainer, CreateBrowserHistory } from '../../commonComponents'

/*routing and redux*/
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import authenticationAndRegistration from "./root-reducers";

import './authentication.css'

const AuthenticationStore = createStore(authenticationAndRegistration, applyMiddleware(thunk))

const AppHeaderProps = {
  'headerRightActionText': 'Login/Signup',
  'headerRightAction': () => {
    CreateBrowserHistory.push({
      pathname: "/authorization"
    })
  },
}

class Authentication extends Component {
  render () {
    return (
      <Provider store={AuthenticationStore}>
        <ResponsiveContainer AppHeaderProps={AppHeaderProps} location={this.props.location} >
          <Route exact path="/authorization" component={AuthenticationHomePage}></Route>
          <Route path="/authorization/login" component={LoginFormContainer}></Route>
          <Route path="/authorization/signup" component={SignUpContainer}></Route>
          <AppFooter />
        </ResponsiveContainer>
      </Provider>
    )
  }
}

export default Authentication
