import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { submitLoginDispatch } from "../root-reducers/Login_Actions_Reducer";
import {clearNotificationsMesaage} from '../../../notificationsModule/Notifications_Reducer'

import Notifications from '../../../notificationsModule/Notifications'
import { CreateBrowserHistory } from '../../../commonComponents'

class LoginForm extends Component {

  componentWillMount () {
    this.setState({ userType: '', username:'', password:'' })
  }

  componentDidMount () {
    const { userType } = this.props
    this.setState({ userType })
  }

  onLogin = () => {
    const { username, password, userType } = this.state
    const payloadData = { username, password, type: userType }
    this.props.submitLoginDispatch(payloadData)
  }

  componentWillReceiveProps (newProps) {
    //console.log(newProps)
    const { registrationSuccessStatus, userType} = newProps
    if(registrationSuccessStatus) {
      if(userType === 'vendor') {
        CreateBrowserHistory.push({
          pathname: "/vendor",
        })
      } else {
        CreateBrowserHistory.push({
          pathname: "/client",
        })
      }
    }
  }

  handleFormValuesChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    const { username, password } = this.state
    const {toast_message} = this.props
    return (
      <Grid
        columns={3}
        centered
        style={{ height: '100%', marginTop: 45 }}
        verticalAlign='middle'
      >
        <Notifications msg={toast_message} {...this.props} />
        <Grid.Row>
          <Header as='h2' color='teal' textAlign='center'>
            Log-in to your account
          </Header>
        </Grid.Row>
        <Grid.Column className='login-form-grid'>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                name='username'
                value={username}
                iconPosition='left'
                placeholder='E-mail address'
                onChange={this.handleFormValuesChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                name='password'
                value={password}
                placeholder='Password'
                type='password'
                onChange={this.handleFormValuesChange}
              />
              <Button color='teal' fluid size='large' onClick={this.onLogin}>Login</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

//map store state to component state
function mapStateToProps(state) {
  const { LoginModule, notifications } = state
  const { registrationSuccessStatus } = LoginModule
  const { toast_message, toast_type } = notifications
  return ({ registrationSuccessStatus, toast_message, toast_type })
}

//map store dispatch function to component props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitLoginDispatch, clearNotificationsMesaage }, dispatch);
}

//conect our component with store state and store dispatch functions
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
