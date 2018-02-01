import React, { Component } from 'react'
import { Route } from 'react-router-dom';

/*Imported components*/
import { AppHeader, AppFooter } from '../../commonComponents'
import VendorSignUpForm from './components/VendorSignUpForm'
import ClientSignUpForm from './components/ClientSignUpForm'

class SignUpFormContainer extends Component {

  render() {
    return (
      <div className='login-form'>
        <AppHeader />
        <Route path="/signup/vendor" component={VendorSignUpForm}/>
        <Route path="/signup/client" component={ClientSignUpForm}/>
        <AppFooter />
      </div>
    )
  }
}

export default SignUpFormContainer
