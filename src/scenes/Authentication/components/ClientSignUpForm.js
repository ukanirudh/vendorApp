import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment,Checkbox} from 'semantic-ui-react'


class ClientSignUpForm extends Component {

  onClientSignUp = () => {
      console.log('ClientSignUpForm');
      const { name, email, password, phone } = this.state
      console.log(name, email, password, phone)
  }

  handleChangeForTerms = () => {
    this.setState({
      checked: !this.state.checked
    })
  } 
  componentWillMount() {
    this.setState({
      checked: false,
      name: '', email: '',password: '',phone: '', confimPassword:''
    })
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    //console.log(this.props)
    const { name= '', email= '',password= '',confimPassword='',phone= '' } = this.state
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
          <Form size='large'
            onSubmit={this.onClientSignUp}
           >
            <Segment stacked>

            <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Name'
                name='name' 
                value={name} 
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                icon='mail'
                iconPosition='left'
                name= 'email'
                value={email}
                placeholder='E-mail address'
                onChange={this.handleChange}
              />
              
              <Form.Input
                fluid
                icon='phone'
                iconPosition='left'
                name='phone'
                value={phone}
                placeholder='Phone Number'
                onChange={this.handleChange}
              />
              
              <Form.Input
                fluid
                icon='protect'
                iconPosition='left'
                value={password}
                name='password'
                placeholder='Password'
                onChange={this.handleChange}
              />

              <Form.Input
                fluid
                icon='protect'
                iconPosition='left'
                name ='confimPassword'
                value={confimPassword}
                placeholder='Confim Password'
                onChange={this.handleChange}
              />
              <Form.Field
              checked={ this.state.checked } 
              onChange={ this.handleChangeForTerms } 
              control={Checkbox}
              label={<label>I agree to the Terms and Conditions</label>}
              />

              

              <Button disabled = {! this.state.checked} color='teal' fluid size='large' onClick={this.onClientSignUp}  >Sign Up!</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default ClientSignUpForm
