import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { isEmpty } from 'lodash'

/*routing and redux*/
import { connect } from "react-redux";
import { createNewTendorDispatch, getAllMainCategoriesDispatch,
  getAllSubCategoriesDispatch, onSetCurrentUserData } from "./root-reducers/Client_Actions_Reducer";
import { bindActionCreators } from "redux";

/*Imported components*/
import ClientHomePage from './ClientHome'
import NewTendor from './tendors/NewTendor'

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

class ClientContainer extends Component {

  componentWillMount() {
    //console.log(this.props)
    const {current_user} = this.props
    if(isEmpty(current_user)) {
      this.props.onSetCurrentUserData(JSON.parse(localStorage.getItem('userprofile')))
    }
  }

  render () {
    return (
      <div style={{ padding: '0px 10px' }}>
        <Route exact path="/client" component={ClientHomePage}></Route>
        <PropsRoute path='/client/newTendor' component={NewTendor} props={this.props} />
      </div>
    )
  }
}

//map store state to component state
function mapStateToProps(state) {
  //console.log(state.clientReducer)
  const { current_user, main_categories, sub_categories} = state.clientReducer
  return {
    current_user,
    main_categories,
    sub_categories
  };
}

//map store dispatch function to component props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      createNewTendorDispatch,
      getAllMainCategoriesDispatch,
      getAllSubCategoriesDispatch,
      onSetCurrentUserData
    }, dispatch);
}

//conect our component with store state and store dispatch functions
export default connect(mapStateToProps, mapDispatchToProps)(ClientContainer);
