import { forEach } from 'lodash'
import 'react-datepicker/dist/react-datepicker.css';
import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment, Dropdown } from 'semantic-ui-react'

import { ResponsiveContainer, CreateBrowserHistory } from '../../../commonComponents'
import {EntityForm} from '../../../utils/GenericForm'
import newTenderFields from '../constants/new-tender-fields'

const AppHeaderProps = {
  'headerRightActionText': 'Profile',
  'headerRightAction': () => {
    // CreateBrowserHistory.push({
    //   pathname: "/authorization"
    // })
  },
}

class NewTendor extends Component {

  constructor(props) {
    super(props)
  }

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

  renderRoomFormWithSubmit = () => {
    const {mainCategorySelected, subCategorySelected } = this.state
    const { props } = this.props
    const {current_user} = props
    const {id} = current_user
    const CreateForm =
    EntityForm({
        name: 'PostTender',
        onUpdate: (values) => props.onNewTenderRequest({...values, 'duration': 3, 'mainCategoryId':mainCategorySelected, 'subCategoryId':subCategorySelected }),
        fields: newTenderFields
      })
    return (
      <div>
        <CreateForm {...this.props} />
        <Button primary onClick={props.onNewTenderClick}> Post Tender </Button>
      </div>
    )
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

  onCancel = () => {
    CreateBrowserHistory.push({
      pathname: "/client",
    })
  }

  render() {
    const addRoomFormRendered = this.renderRoomFormWithSubmit()
    const {mainCategorySelected, subCategorySelected} = this.state
    return (
      <ResponsiveContainer AppHeaderProps={AppHeaderProps} location={this.props.location} >
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
              <Segment stacked>
                {addRoomFormRendered}
                <Button secondary size='large' onClick={this.onCancel}>Cancel</Button>
             </Segment> : ''
          }
          </Grid.Column>
        </Grid>
      </ResponsiveContainer>
    )
  }

}

export default NewTendor;
