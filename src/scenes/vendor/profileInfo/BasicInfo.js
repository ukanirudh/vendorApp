import React, { Component } from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react'
import {EntityForm} from '../../../utils/GenericForm'
import basicInfoFields from '../constants/basic-info-fields'

class BasicInfo extends Component {

  constructor(props) {
    super(props)
    this.CreateForm =
      EntityForm({
          name: 'VendorBasicDetailsForm',
          onUpdate: (values) => props.onUpdateBasicDetailsRequest({...values}),
          fields: basicInfoFields
        })
  }

  componentWillMount () {
    this.setState({currentUserData:{}})
  }

  componentDidMount () {
    const { getBasicDetailsDispatch } = this.props
    getBasicDetailsDispatch()
  }

  componentWillReceiveProps (nextProps) {
    const {current_user} = nextProps
    this.setState({currentUserData: current_user})
  }

  renderRoomVendorBasicDetailsFormWithSubmit = () => {
    const { onUpdateBasicDetailsClick } = this.props
    const {currentUserData} = this.state
    const CreateForm= this.CreateForm
    const newinitialValues = {initialValues: currentUserData}

    return (
      <div>
        <CreateForm {...newinitialValues} />
        <Button primary onClick={onUpdateBasicDetailsClick} fluid> UPDATE INFO </Button>
      </div>
    )
  }

  render() {
    const addRoomVendorBasicDetailsFormRendered = this.renderRoomVendorBasicDetailsFormWithSubmit()
    return (
      <Grid
        columns={3}
        centered
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column className='login-form-grid'>
          <Segment>
            {addRoomVendorBasicDetailsFormRendered}
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default BasicInfo;
