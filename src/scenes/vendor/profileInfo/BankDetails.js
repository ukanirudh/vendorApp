import React, { Component } from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react'
import { ResponsiveContainer, CreateBrowserHistory } from '../../../commonComponents'
import {EntityForm} from '../../../utils/GenericForm'
import bankInfoFields from '../constants/bank-details-fields'

class BankDetails extends Component {

  constructor(props){
    super(props)
    const { onUpdateBankDetailsRequest } = props
    this.CreateForm =
      EntityForm({
          name: 'VendorBankDetailsForm',
          onUpdate: (values) => onUpdateBankDetailsRequest({...values}),
          fields: bankInfoFields
        })
  }

  componentWillMount () {
    this.setState({currentUserData:{}})
  }

  componentDidMount () {
    const { getBankDetailsDispatch } = this.props
    getBankDetailsDispatch()
  }

  componentWillReceiveProps (nextProps) {
    const {current_user} = nextProps
    this.setState({currentUserData: current_user})
  }

  renderRoomVendorBankDetailsFormWithSubmit = () => {
    const { onUpdateBankDetailsClick } = this.props
    const {currentUserData} = this.state
    const CreateForm= this.CreateForm
    const newinitialValues = {initialValues: currentUserData}

    return (
      <div>
        <CreateForm {...newinitialValues} />
        <Button primary onClick={onUpdateBankDetailsClick} fluid> UPDATE INFO </Button>
      </div>
    )
  }

  render() {
    const addRoomVendorBankDetailsFormRendered = this.renderRoomVendorBankDetailsFormWithSubmit()
    return (
      <Grid
        columns={3}
        centered
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column className='login-form-grid'>
          <Segment>
            {addRoomVendorBankDetailsFormRendered}
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}


export default BankDetails;
