import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment,Checkbox} from 'semantic-ui-react'


class ClientSignUpForm extends Component {

  onClientSignUp = () => {
      console.log('ClientSignUpForm')
  }

   handleChange() {
    this.setState({
      checked: !this.state.checked
    })
  } 

  
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    console.log(this.props)
    return (
      <Grid
        columns={3}
        centered
        style={{ height: '100%', marginTop: 45 }}
        verticalAlign='middle'
      >
        <Grid.Row>
          <Header as='h2' color='teal' textAlign='center'>
            Cliet signup
          </Header>
        </Grid.Row>
        <Grid.Column className='login-form-grid'>
          <Form size='large' >
            <Segment stacked>
              <Form.Input
                fluid
                icon='mail'
                iconPosition='left'
                placeholder='E-mail address'
              />
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Name'
              />
              <Form.Input
                fluid
                icon='phone'
                iconPosition='left'
                placeholder='Phone Number'
              />
              <Form.Field
              checked={ this.state.checked } 
              onChange={ this.handleChange } 
              control={Checkbox}
              label={<label>I agree to the Terms and Conditions</label>}
              />

              <Button disabled = {! this.state.checked} color='teal' fluid size='large' onClick={this.onClientSignUp}>Sing Up!</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default ClientSignUpForm
