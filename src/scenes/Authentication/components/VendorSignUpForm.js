import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

import { connect } from "react-redux";
import { submitVendorSingUpDispatch } from "../root-reducers/SignUp_Actions_Reducer";
import { bindActionCreators } from "redux";

class VendorSignUpForm extends Component {

  componentWillMount() {
    this.setState({
      full_name: '', username: '', password: '', phone: '', confimPassword:''
    })
  }

  onVendorRegistration = () => {
    const { username='', password='' } = this.state
    const data = {
      username,
      password,
      type:'vendor'
    }
    this.props.submitVendorSingUpDispatch( data );
  }

  handleFormValuesChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    const { full_name='', username='', password='', phone='' } = this.state
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
                  name='username'
                  iconPosition='left'
                  value={username}
                  placeholder='E-mail address/username'
                  onChange={this.handleFormValuesChange}
                />
                <Form.Input
                  fluid
                  icon='building'
                  name='full_name'
                  iconPosition='left'
                  value={full_name}
                  placeholder='Name of the company'
                  onChange={this.handleFormValuesChange}
                />
                <Form.Input
                  fluid
                  icon='phone'
                  iconPosition='left'
                  placeholder='Phone Number'
                />
                <Form.Input
                  fluid
                  icon='protect'
                  iconPosition='left'
                  value={password}
                  name='password'
                  placeholder='Password'
                  onChange={this.handleFormValuesChange}
                />
                <Button color='teal' fluid size='large' onClick={this.onVendorRegistration}>Send registration request</Button>
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
  return bindActionCreators({ submitVendorSingUpDispatch }, dispatch);
}

//conect our component with store state and store dispatch functions
export default connect(mapStateToProps, mapDispatchToProps)(VendorSignUpForm);
