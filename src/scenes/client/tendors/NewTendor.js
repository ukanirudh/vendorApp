import tcombForm from 'tcomb-form'
import { forEach } from 'lodash'
import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment, Dropdown } from 'semantic-ui-react'

import { CreateBrowserHistory } from '../../../commonComponents'
import ResponsiveContainer from '../clientResponsiveComponents/ResponsiveContainer'
/*tcomb form setup*/
import templates from 'tcomb-form-templates-semantic'
tcombForm.form.Form.templates = templates;
const FormSchema = tcombForm.struct({
  quantity: tcombForm.Number,
  duration: tcombForm.Number,
})

class NewTendor extends Component {

  componentWillMount() {
    this.setState({ mainCategorySelected:'', subCategorySelected:'', mainCategories:[], subCategories:[] })
  }

  componentDidMount() {
    const { props } = this.props
    props.getAllMainCategoriesDispatch()
  }

  componentWillReceiveProps (newProps) {
    const { props } = newProps
    const { main_categories, sub_categories } = props
    this.setState({ mainCategories:main_categories, subCategories:sub_categories })
  }

  renderMainCategoryOption = () => {
    const { mainCategories } = this.state
    var mainCategoriesOptions = []
    forEach(mainCategories, function(mainCategory) {
      mainCategoriesOptions.push({ key: mainCategory.id, value: mainCategory.id, text: mainCategory.name })
    });

    return mainCategoriesOptions
  }

  renderSubCategoryOption = () => {
    const { subCategories } = this.state
    var subCategoriesOptions = []
    forEach(subCategories, function(subCategory) {
      subCategoriesOptions.push({ key: subCategory.id, value: subCategory.id, text: subCategory.name })
    });

    return subCategoriesOptions
  }

  onSelectMainCategory = (event, {name, value}) => {
    const { props } = this.props
    this.setState({mainCategorySelected:value})
    props.getAllSubCategoriesDispatch(value)
  }

  onSelectSubCategory = (event, { name, value }) => {
    this.setState({subCategorySelected:value})
  }

  onSubmit = (evt) => {
    const { props } = this.props
    const { current_user } = props
    evt.preventDefault()
    const value = this.refs.form.getValue()
    if (value) {
      const {mainCategorySelected, subCategorySelected } = this.state
      const {id} = current_user
      const payload = {
        'mainCategoryId': mainCategorySelected,
        'subCategoryId': subCategorySelected,
        'duration': value.duration,
        'quantity':value.quantity
      }
      this.props.props.createNewTendorDispatch(payload, id)
    }
  }

  onCancel = () => {
    CreateBrowserHistory.push({
      pathname: "/client",
    })
  }

  render() {
    const {mainCategorySelected, subCategorySelected} = this.state
    return (
      <ResponsiveContainer>
        <Grid
          columns={3}
          centered
          style={{ height: '100%', marginTop: 45 }}
          verticalAlign='middle'
        >
          <Grid.Row>
            <Header as='h2' color='teal' textAlign='center'>
              New Tendor
            </Header>
          </Grid.Row>
          <Grid.Row centered columns={3}>
            <Grid.Column>
              <Dropdown placeholder='Category' fluid search selection onChange={this.onSelectMainCategory} options={this.renderMainCategoryOption()} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            { ( mainCategorySelected ) ?
              <Grid.Column>
                <Dropdown placeholder='Sub-Category' fluid search selection onChange={this.onSelectSubCategory} options={this.renderSubCategoryOption()} />
              </Grid.Column> : ''
            }
          </Grid.Row>
          <Grid.Column className='login-form-grid'>
          {
            ( mainCategorySelected && subCategorySelected ) ?
            <Form size='large'>
              <Segment stacked>
                <form className='new-tendor-form' onSubmit={this.onSubmit}>
                  <tcombForm.form.Form ref="form" type={FormSchema} />
                </form>
                <Button primary size='large' onClick={this.onSubmit}>Submit the tendor</Button>
                <Button secondary size='large' onClick={this.onCancel}>Cancel</Button>
              </Segment>
            </Form> : ''
          }
          </Grid.Column>
        </Grid>
      </ResponsiveContainer>
    )
  }

}

export default NewTendor;
