import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import VendorSignUpForm from './VendorSignUpForm'
import ClientSignUpForm from './ClientSignUpForm'

class LoginForm extends Component {

  render() {
    return (
      <div className='login-form'>
        <Route path="/login/vendor" component={VendorSignUpForm}/>
        <Route path="/login/client" component={ClientSignUpForm}/>
      </div>
    )
  }
}

export default LoginForm
