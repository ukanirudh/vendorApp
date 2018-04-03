import React, { Component } from 'react'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { submitVendorSingUpDispatch, submitClientSingUpDispatch } from './root-reducers/SignUp_Actions_Reducer'
import {clearNotificationsMesaage} from '../../notificationsModule/Notifications_Reducer'

/*Imported components*/
import VendorSignUpForm from './components/VendorSignUpForm'
import ClientSignUpForm from './components/ClientSignUpForm'
import Notifications from '../../notificationsModule/Notifications'
import {PropsRoute} from '../../utils/PropsRouteComponent'

class SignUpFormContainer extends Component {

  render() {
    const {toast_message} = this.props
    return (
      <div className='login-form'>
        <PropsRoute path="/authorization/signup/vendor" component={VendorSignUpForm} {...this.props} />
        <PropsRoute path="/authorization/signup/client" component={ClientSignUpForm} {...this.props} />
        <Notifications msg={toast_message} {...this.props} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {notifications} = state
  const {toast_message, toast_type} = notifications
  return ({ toast_message, toast_type })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitVendorSingUpDispatch, submitClientSingUpDispatch, clearNotificationsMesaage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpFormContainer);
