import { forEach } from 'lodash'
import React, { Component } from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker';
import { Button, Grid, Header, Segment, Dropdown } from 'semantic-ui-react'
import { ResponsiveContainer, CreateBrowserHistory } from '../../../commonComponents'
import {EntityForm} from '../../../utils/GenericForm'
import newTenderFields from '../constants/new-tender-fields'

const AppHeaderProps = {
  'headerRightActionText': 'Profile',
  'headerRightAction': () => {
    CreateBrowserHistory.push({
      pathname: "/client/Profile"
    })
  },
}

class NewTendor extends Component {
  componentWillMount() {
    this.setState({ mainCategorySelected:'', subCategorySelected:'', mainCategories:[], subCategories:[], endDate: moment().add(7, "days") })
  }

  componentDidMount() {
    const { getAllMainCategoriesDispatch } = this.props
    getAllMainCategoriesDispatch()
  }

  componentWillReceiveProps (newProps) {
    const { main_categories, sub_categories } = newProps
    this.setState({ mainCategories:main_categories, subCategories:sub_categories })
  }

  handleDateChange = (date) => this.setState({endDate: date})

  renderRoomFormWithSubmit = () => {
    const {mainCategorySelected, subCategorySelected, endDate} = this.state
    const endDateInUtc = endDate.toISOString() // 'tenderEnds'
    const { onNewTenderRequest, onNewTenderClick } = this.props
    const CreateForm =
    EntityForm({
        name: 'PostTender',
        onUpdate: (values) => onNewTenderRequest({...values, 'duration': endDateInUtc, 'mainCategoryId':mainCategorySelected, 'subCategoryId':subCategorySelected }),
        fields: newTenderFields
      })
    return (
      <Segment stacked>
        <CreateForm {...this.props} />
        <div style={{'marginBottom': 10}} className='form ui'>
          <DatePicker
            disabled={true}
            dateFormat="LL"
            selected={moment()}
            placeholderText={'Start Date'} />
        </div>
        <div style={{'marginBottom': 10}} className='form ui'>
          <DatePicker
            selected={this.state.endDate}
            onChange={this.handleDateChange}
            dateFormat="LL"
            minDate={moment().add(7, "days")}
            maxDate={moment().add(14, "days")}
            placeholderText={'End Date'} />
        </div>
        <Button fluid primary size='large' onClick={onNewTenderClick}> Post Tender </Button>
      </Segment>
    )
  }

  renderCategoryOption = (categories) => {
    var categoryOptions = []
    forEach(categories, function(category) {
      categoryOptions.push({ key: category.id, value: category.id, text: category.name })
    });
    return categoryOptions
  }

  onSelectMainCategory = (event, {name, value}) => {
    const { getAllSubCategoriesDispatch } = this.props
    this.setState({mainCategorySelected:value})
    getAllSubCategoriesDispatch(value)
  }

  onSelectSubCategory = (event, { name, value }) => {
    this.setState({subCategorySelected:value})
  }

  render() {
    const {mainCategorySelected, subCategorySelected, mainCategories, subCategories} = this.state
    return (
      <ResponsiveContainer AppHeaderProps={AppHeaderProps} location={'/client'} >
        <Grid
          columns={3}
          centered
          style={{ height: '100%', marginTop: 45 }}
          verticalAlign='middle' >
          <Grid.Row>
            <Header as='h2' color='teal' textAlign='center'> New Tendor </Header>
          </Grid.Row>
          <Grid.Row centered columns={3}>
            <Grid.Column>
              <Dropdown placeholder='Category' fluid search selection onChange={this.onSelectMainCategory} options={this.renderCategoryOption(mainCategories)} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            { ( mainCategorySelected ) ?
              <Grid.Column>
                <Dropdown placeholder='Sub-Category' fluid search selection onChange={this.onSelectSubCategory} options={this.renderCategoryOption(subCategories)} />
              </Grid.Column> : ''
            }
          </Grid.Row>
          <Grid.Column className='login-form-grid'>
          { ( mainCategorySelected && subCategorySelected ) ? this.renderRoomFormWithSubmit() : '' }
          </Grid.Column>
        </Grid>
      </ResponsiveContainer>
    )
  }

}

export default NewTendor;
