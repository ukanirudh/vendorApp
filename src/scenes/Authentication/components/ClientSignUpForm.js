import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment,Checkbox} from 'semantic-ui-react'
import { connect } from "react-redux";
import { submitClientSingUpDispatch } from "../root-reducers/SignUp_Actions_Reducer";
import { bindActionCreators } from "redux";


class ClientSignUpForm extends Component {
  onClientSignUp = () => {
      const { name, username, password, phone } = this.state
      //console.log(name, username, password, phone)
      const data = {
      username,
      password,
      type:'client'
    }
    this.props.submitClientSingUpDispatch( data );
  }

  handleChangeForTerms = () => {
       this.setState({
      checked: !this.state.checked
    })
  }


  componentWillMount() {
    this.setState({

      name: '', username: '',password: '',phone: '', confimPassword:'',checked: false,
    })
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    //console.log(this.props)
    const { name= '', username= '',password= '',confimPassword='',phone= '',checked= false} = this.state
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
          <Form size='large'>
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
                name= 'username'
                value={username}
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
              checked={ checked }
              onChange={ this.handleChangeForTerms }
              name= 'checked'
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

//map store state to component state
function mapStateToProps(state) {
  return { current_user_profile: state.current_user_profile };
}



//map store dispatch function to component props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitClientSingUpDispatch }, dispatch);
}



//conect our component with store state and store dispatch functions

export default connect(mapStateToProps, mapDispatchToProps)(ClientSignUpForm);
