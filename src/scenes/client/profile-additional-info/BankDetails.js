import React, { Component } from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react'
import { ResponsiveContainer, CreateBrowserHistory } from '../../../commonComponents'
import {EntityForm} from '../../../utils/GenericForm'
import bankInfoFields from '../constants/bank-details-fields'

class BankDetails extends Component {

  constructor(props){
    super(props);
    const { props: renderedProps } = props
    this.CreateForm =
      EntityForm({
          name: 'PostBankInfo',
          onUpdate: (values) => renderedProps.onUpdateBankDetailsrRequest({...values}),
          fields: bankInfoFields
        })
  }

  componentWillMount () {
    this.setState({currentUserData:{}})
  }

  componentDidMount () {
    const { props } = this.props
    props.getBankDetailsDispatch()
  }

  componentWillReceiveProps (nextProps) {
    const {props:{current_user}} = nextProps
    this.setState({currentUserData: current_user})
  }

  renderRoomFormWithSubmit = () => {
    const { props } = this.props
    const {currentUserData} = this.state
    const CreateForm= this.CreateForm
    const newinitialValues = {initialValues: currentUserData}

    return (
      <div>
        <CreateForm {...newinitialValues} />
        <Button primary onClick={props.onUpdateBankDetailsClick} fluid> UPDATE INFO </Button>
      </div>
    )
  }

  render() {
    const addRoomFormRendered = this.renderRoomFormWithSubmit()
    return (
      <Grid
        columns={3}
        centered
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column className='login-form-grid'>
          <Segment>
            {addRoomFormRendered}
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}


export default BankDetails;
