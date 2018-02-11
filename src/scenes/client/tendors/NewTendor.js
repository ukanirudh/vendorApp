import tcombForm from 'tcomb-form'
import { forEach } from 'lodash'
import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment, Dropdown } from 'semantic-ui-react'
import { CreateBrowserHistory } from '../../../commonComponents'

/*tcomb form setup*/
import templates from 'tcomb-form-templates-semantic'
tcombForm.form.Form.templates = templates;
const FormSchema = tcombForm.struct({
  requirementDetails: tcombForm.String,         // a required string
  //age: tcombForm.maybe(tcombForm.Number), // an optional number
  durationOfTendor: tcombForm.Number, // an optional number
})

class NewTendor extends Component {

  componentWillMount() {
    this.setState({ mainCategorySelected:'', subCategorySelected:'', mainCategories:[] })
  }

  componentDidMount() {
    const { props } = this.props
    props.getAllMainCategoriesDispatch()
  }

  componentWillReceiveProps (newProps) {
    //console.log(newProps)
    const { props } = newProps
    const { main_categories } = props
    this.setState({ mainCategories:main_categories })
  }

  renderMainCategoryOption = () => {
    const { mainCategories } = this.state
    var mainCategoriesOptions = []
    forEach(mainCategories, function(mainCategory) {
      mainCategoriesOptions.push({ key: mainCategory.id, value: mainCategory.name, text: mainCategory.name })
    });

    return mainCategoriesOptions
  }

  onSelectMainCategory = (event, { name, value }) => {
    //console.log(name, value)
    this.setState({mainCategorySelected:value})
  }

  onSelectSubCategory = (event, { name, value }) => {
    //console.log(name, value)
    this.setState({subCategorySelected:value})
  }

  onSubmit = (evt) => {
    evt.preventDefault()
    const value = this.refs.form.getValue()
    if (value) {
      console.log(value)
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
              <Dropdown placeholder='Sub-Category' fluid search selection onChange={this.onSelectSubCategory} options={this.renderMainCategoryOption()} />
            </Grid.Column> : ''
          }
        </Grid.Row>
        <Grid.Column centered className='login-form-grid'>
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
    )
  }

}

export default NewTendor;
