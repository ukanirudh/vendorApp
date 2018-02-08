import tcombForm from 'tcomb-form'
import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment, Select } from 'semantic-ui-react'

import { connect } from "react-redux";
import { createNewTendorDispatch } from "../root-reducers/Client_Actions_Reducer";
import { bindActionCreators } from "redux";

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
    this.setState({mainCategorySelected:'', subCategorySelected:''})
  }

  onSelectMainCategory = (event, data) => {
    console.log(event)
    const {target: {value}} = event;
    console.log(event.target.value)
    this.setState({mainCategorySelected:event.target.value})
  }

  onSubmit = (evt) => {
    evt.preventDefault()
    const value = this.refs.form.getValue()
    if (value) {
      console.log(value)
    }
  }

  render() {
    const tempOp =[{ key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }]
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
        <Grid.Row>
          <Select placeholder='Select your country' value={this.state.mainCategorySelected} options={tempOp} onChange={this.onSelectMainCategory}/>
        </Grid.Row>
        <Grid.Column className='login-form-grid'>
        {
          ( this.state.mainCategorySelected || this.state.subCategorySelected ) ?
          <Form size='large'>
            <Segment stacked>
              <form className='new-tendor-form' onSubmit={this.onSubmit}>
                <tcombForm.form.Form ref="form" type={FormSchema} />
              </form>
              <Button color='teal' fluid size='large' onClick={this.onSubmit}>Submit the tendor</Button>
            </Segment>
          </Form> : ''
        }
        </Grid.Column>
      </Grid>
    )
  }

}

//map store state to component state
function mapStateToProps(state) {
  return { current_user: state.current_user };
}

//map store dispatch function to component props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createNewTendorDispatch }, dispatch);
}

//conect our component with store state and store dispatch functions
export default connect(mapStateToProps, mapDispatchToProps)(NewTendor);
