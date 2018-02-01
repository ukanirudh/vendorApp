import React, { Component } from 'react'
import { Route } from 'react-router-dom';

/*Imported components*/
import { AppHeader, AppFooter } from '../../commonComponents'
import LoginForm from './components/LoginForm'

class LoginFormContainer extends Component {

  render() {
    const { location } = this.props
    const urlParam = location && location.search.substr(1)
    const urlQuery = urlParam && urlParam.split('=')
    var type
    if(urlQuery) {
      type = urlQuery[1]
    }
    return (
      <div className='login-form'>
        <AppHeader />
        <LoginForm userType={type}/>
        <AppFooter />
      </div>
    )
  }
}

export default LoginFormContainer
