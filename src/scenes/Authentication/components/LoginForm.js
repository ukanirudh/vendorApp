import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'


class LoginForm extends Component {

  componentWillMount () {
    this.setState({ userType: '' })
  }

  componentDidMount () {
    const { userType } = this.props
    this.setState({ userType })
  }

  onLogin = () => {
  }

  render() {
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
                iconPosition='left'
                placeholder='E-mail address'
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />
              <Button color='teal' fluid size='large' onClick={this.onLogin}>Login</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default LoginForm
