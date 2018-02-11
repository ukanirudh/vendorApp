import tcombForm from 'tcomb-form'
import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment, Dropdown } from 'semantic-ui-react'
import { CreateBrowserHistory } from '../../../commonComponents'

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

  componentDidMount() {
    console.log(this.props)
    //this.props.createNewTendorDispatch()
  }

  onSelectMainCategory = (event, { name, value }) => {
    //console.log(name, value)
    this.setState({mainCategorySelected:value})
  }

  onSelectSubCategory = (event, { name, value }) => {
    //console.log(name, value)
    this.setState({subCategorySelected:value})
  }

  onSubmit = (evt) => {
    evt.preventDefault()
    const value = this.refs.form.getValue()
    if (value) {
      console.log(value)
    }
  }

  onCancel = () => {
    CreateBrowserHistory.push({
      pathname: "/client",
    })
  }

  render() {
    const tempOp =[{ key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }]
    const {mainCategorySelected, subCategorySelected} = this.state
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
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <Dropdown placeholder='Category' fluid search selection onChange={this.onSelectMainCategory} options={tempOp} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          { ( mainCategorySelected ) ?
            <Grid.Column>
              <Dropdown placeholder='Sub-Category' fluid search selection onChange={this.onSelectSubCategory} options={tempOp} />
            </Grid.Column> : ''
          }
        </Grid.Row>
        <Grid.Column centered className='login-form-grid'>
        {
          ( mainCategorySelected && subCategorySelected ) ?
          <Form size='large'>
            <Segment stacked>
              <form className='new-tendor-form' onSubmit={this.onSubmit}>
                <tcombForm.form.Form ref="form" type={FormSchema} />
              </form>

                <Button primary size='large' onClick={this.onSubmit}>Submit the tendor</Button>
                <Button secondary size='large' onClick={this.onCancel}>Cancel</Button>

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
//export default connect(mapStateToProps, mapDispatchToProps)(NewTendor);
export default NewTendor;
