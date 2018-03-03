import tcombForm from 'tcomb-form'
import { forEach } from 'lodash'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment, Dropdown } from 'semantic-ui-react'

import { ResponsiveContainer, CreateBrowserHistory } from '../../../commonComponents'
import {EntityForm} from '../../../utils/GenericForm'
import addRoomFields from '../constants/new-tender-fields'
/*tcomb form setup*/
import templates from 'tcomb-form-templates-semantic'
tcombForm.form.Form.templates = templates;
const FormSchema = tcombForm.struct({
  quantity: tcombForm.Number,
  startDate:tcombForm.Date,
  endDate:tcombForm.Date,
  description:tcombForm.String
})

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
    const { props:props2 } = this.props
    this.CreateForm = EntityForm({name: 'PostTender', onUpdate: props2.onNewTenderRequest, fields: addRoomFields})
  }
  componentWillMount() {
    this.setState({ mainCategorySelected:'', subCategorySelected:'', mainCategories:[], subCategories:[],startDate: moment(),endDate: moment()})
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
    const CreateForm = this.CreateForm
    const { props } = this.props
    const { current_user:{id} } = props
    return (
      <div>
        <CreateForm {...this.props} initialValues = {{activities: [], cliendId:id}}/>
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

  onSubmit = (evt) => {
    const { props } = this.props
    const { current_user } = props
    evt.preventDefault()
   // Check for the empty value

      const {mainCategorySelected, subCategorySelected,startDate,endDate,quantity,description} = this.state
      const {id} = current_user
      const payload = {
        'mainCategoryId': mainCategorySelected,
        'subCategoryId': subCategorySelected,
        'startDate': startDate,
        'endDate': endDate,
        'quantity':quantity,
        'description':description
      }
      this.props.props.createNewTendorDispatch(payload, id)

  }
  handleChangeStartDate(date) {
    this.setState({
      startDate: date
    });
  }
  handleChangeEndDate(date) {
    this.setState({
      endDate: date
    });
  }

handleChange = (e, { name, value }) => this.setState({ [name]: value });
  onCancel = () => {
    CreateBrowserHistory.push({
      pathname: "/client",
    })
  }
  render() {
    const addRoomFormRendered = this.renderRoomFormWithSubmit()
    const {mainCategorySelected, subCategorySelected, startDate, endDate ,quantity, description} = this.state
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
                <Form size='large' className='new-tendor-form' onSubmit={this.onSubmit}>
                <Segment stacked>
                  <Form.Input
                    fluid
                    placeholder='Quantity'
                    name='quantity'
                    value={quantity}
                    onChange={this.handleChange}
                  />
                   <Form.Group  >
                      <Form.Field fluid >
                        <DatePicker
                        label='Start Date'
                        selected={startDate}
                        value={startDate}
                        onChange={this.handleChangeStartDate.bind(this)}
                        name='startDate'
                        />
                      </Form.Field>
                      <Form.Field fluid label ='To'>
                      </Form.Field>
                      <Form.Field fluid >
                        <DatePicker
                          selected={endDate}
                          value={endDate}
                          name='endDate'
                          label='End Date'
                          onChange={this.handleChangeEndDate.bind(this)}
                         />
                      </Form.Field>
                   </Form.Group>
                  <Form.TextArea
                    fluid
                    rows={2}
                    placeholder='Description'
                    name='description'
                    value={description}
                    onChange={this.handleChange}
                  />
                <Button primary size='large' onClick={this.onSubmit}>Submit the tendor</Button>
                <Button secondary size='large' onClick={this.onCancel}>Cancel</Button>
             </Segment>
            </Form> : ''
          }
          </Grid.Column>
          <Grid.Row>
            <Grid.Column>
              {addRoomFormRendered}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </ResponsiveContainer>
    )
  }

}

export default NewTendor;
