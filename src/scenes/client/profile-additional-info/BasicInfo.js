import React, { Component } from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react'
import {EntityForm} from '../../../utils/GenericForm'
import basicInfoFields from '../constants/basic-info-fields'
import { toast } from 'react-toastify';

class BasicInfo extends Component {

  constructor(props) {
    super(props);
    const { props: renderedProps } = props
    this.CreateForm =
      EntityForm({
          name: 'PostBasicInfo',
          onUpdate: (values) => renderedProps.onUpdateBasicDetailsrRequest({...values}),
          fields: basicInfoFields
        })
  }

  componentWillMount () {
    this.setState({currentUserData:{}})
  }

  componentDidMount () {
    const { props } = this.props
    props.getBasicDetailsDispatch()
  }

  componentWillReceiveProps (nextProps) {
    const {props:{current_user}} = nextProps
    //console.log(nextProps.props)
    if(nextProps.props.registrationSuccessStatus) {
      this.notify(nextProps.props.notificationMsg)
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
    const { props } = this.props
    const CreateForm= this.CreateForm
    const {currentUserData} = this.state
    const newinitialValues = {initialValues: currentUserData}

    return (
      <div>
        <CreateForm {...newinitialValues} />
        <Button primary onClick={props.onUpdateBasicDetailsClick} fluid> UPDATE INFO </Button>
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
