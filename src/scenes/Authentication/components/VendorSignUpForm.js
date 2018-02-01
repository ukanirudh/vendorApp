import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'


class VendorSignUpForm extends Component {

  onVendorRegistration = () => {
      console.log('vendorSignup')
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
              Vendor Sign up
            </Header>
          </Grid.Row>
          <Grid.Column className='login-form-grid'>
            <Form size='large'>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='mail'
                  iconPosition='left'
                  placeholder='E-mail address'
                />
                <Form.Input
                  fluid
                  icon='building'
                  iconPosition='left'
                  placeholder='Name of the company'
                />
                <Form.Input
                  fluid
                  icon='phone'
                  iconPosition='left'
                  placeholder='Phone Number'
                />
                <Button color='teal' fluid size='large' onClick={this.onVendorRegistration}>Send registration request</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
    )
  }
}

export default VendorSignUpForm
