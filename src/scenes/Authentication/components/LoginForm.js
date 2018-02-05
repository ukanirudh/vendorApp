import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

import { connect } from "react-redux";
import { submitLoginDispatch } from "../root-reducers/Login_Actions_Reducer";
import { bindActionCreators } from "redux";

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
  return { current_user_profile: state.current_user_profile };
}

//map store dispatch function to component props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitLoginDispatch }, dispatch);
}

//conect our component with store state and store dispatch functions
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
