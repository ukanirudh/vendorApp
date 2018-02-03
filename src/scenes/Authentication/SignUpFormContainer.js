import React, { Component } from 'react'
import { Route } from 'react-router-dom';

/*Imported components*/
import VendorSignUpForm from './components/VendorSignUpForm'
import ClientSignUpForm from './components/ClientSignUpForm'

class SignUpFormContainer extends Component {

  render() {
    return (
      <div className='login-form'>
        <Route path="/authorization/signup/vendor" component={VendorSignUpForm}/>
        <Route path="/authorization/signup/client" component={ClientSignUpForm}/>
      </div>
    )
  }
}

export default SignUpFormContainer
