import React, { Component } from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react'
import {EntityForm} from '../../../utils/GenericForm'
import basicInfoFields from '../constants/basic-info-fields'
import { toast } from 'react-toastify';

class BasicInfo extends Component {

  constructor(props) {
    super(props)

    this.CreateForm =
      EntityForm({
          name: 'PostBasicInfo',
          onUpdate: (values) => props.onUpdateBasicDetailsrRequest({...values}),
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
    const {current_user, registrationSuccessStatus, notificationMsg} = nextProps
    if(registrationSuccessStatus) {
      this.notify(notificationMsg)
    }
    this.setState({currentUserData: current_user})
  }

  notify = (message) => {
    const options = {
      //onOpen: props => console.log(props.foo),
      onClose: () => {
        const { props } = this.props
        const { setErrorFlag } = props
        setErrorFlag(false)
      },
      autoClose: false,
      type: toast.TYPE.SUCCESS,
    };
    return toast(message,options)
  }

  renderRoomFormWithSubmit = () => {
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

export default BasicInfo;
