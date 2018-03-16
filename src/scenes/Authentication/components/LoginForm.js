import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { ToastContainer, toast } from 'react-toastify';
import { connect } from "react-redux";
import { submitLoginDispatch, setErrorFlag } from "../root-reducers/Login_Actions_Reducer";
import { bindActionCreators } from "redux";

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

  notify = (message) => {
    const options = {
      //onOpen: props => console.log(props.foo),
      onClose: () => {
        const { setErrorFlag } = this.props
        setErrorFlag(false)
      },
      autoClose: false,
      type: toast.TYPE.ERROR,
    };
    return toast(message,options)
  }

  componentWillReceiveProps (newProps) {
    //console.log(newProps)
    const {current_user, registrationSuccessStatus, hasError, registrationMessage, userType} = newProps
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
    if(hasError) {
      this.notify(registrationMessage)
    }
  }

  handleFormValuesChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    const { username, password } = this.state
    return (
      <Grid
        columns={3}
        centered
        style={{ height: '100%', marginTop: 45 }}
        verticalAlign='middle'
      >
        <Grid.Row>
          <ToastContainer />
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
  const { LoginModule } = state
  const { current_user, registrationSuccessStatus, registrationMessage, hasError } = LoginModule
  return ({ current_user, registrationSuccessStatus, registrationMessage, hasError })
}

//map store dispatch function to component props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitLoginDispatch, setErrorFlag }, dispatch);
}

//conect our component with store state and store dispatch functions
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
