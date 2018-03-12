import React, { Component } from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react'
import {EntityForm} from '../../../utils/GenericForm'
import basicInfoFields from '../constants/basic-info-fields'

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

  renderRoomFormWithSubmit = () => {
    const { props } = this.props
    const {current_user:{email}} = props
    const CreateForm= this.CreateForm
    const newinitialValues = {initialValues: {username:email}}

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
