import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment, Dropdown } from 'semantic-ui-react'
import {forEach} from 'lodash'

class VendorSignUpForm extends Component {

  componentWillMount() {
    this.setState({ full_name: '', username: '', password: '', phoneNumber: '',
     confimPassword:'', isLoading: false, mainCategoryId:'', mainCategories:[], })
  }

  componentDidMount() {
    const { getAllMainCategoriesDispatch } = this.props
    getAllMainCategoriesDispatch()
  }

  componentWillReceiveProps(nextProps) {
    const {main_categories, isInProgress} = nextProps
    this.setState({isLoading: isInProgress, mainCategories: main_categories})
  }

  renderCategoryOption = (categories) => {
    var categoryOptions = []
    forEach(categories, function(category) {
      categoryOptions.push({ key: category.id, value: category.id, text: category.name })
    });
    return categoryOptions
  }

  onVendorRegistration = () => {
    const { username='', password='',full_name='', phoneNumber= '', mainCategoryId} = this.state
    const data = { username, password, name: full_name, phoneNumber, mainCategoryId, type:'vendor' }
    this.props.submitVendorSingUpDispatch(data)
  }

  handleFormValuesChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    const { full_name='', username='', password='', phoneNumber='', isLoading, mainCategories } = this.state
    return (
        <Grid
          columns={3}
          centered
          style={{ height: '100%', marginTop: 45 }}
          verticalAlign='middle'
        >
          <Grid.Row>
            <Header as='h2' color='teal' textAlign='center'> Vendor Sign up </Header>
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
                name='phoneNumber'
                value={phoneNumber}
                placeholder='Phone Number'
                onChange={this.handleFormValuesChange}
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
                <Dropdown name='mainCategoryId' placeholder='Main Category' fluid search selection onChange={this.handleFormValuesChange} options={this.renderCategoryOption(mainCategories)} />
                <Button loading={isLoading} color='teal' fluid size='large' onClick={this.onVendorRegistration}>Send registration request</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
    )
  }
}

export default VendorSignUpForm
