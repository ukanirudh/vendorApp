import React, { Component } from 'react'

/*Imported components*/
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
        <LoginForm userType={type}/>
      </div>
    )
  }
}

export default LoginFormContainer
