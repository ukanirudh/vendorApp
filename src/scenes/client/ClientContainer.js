import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import {submit} from 'redux-form'
import { ToastContainer } from 'react-toastify';

/*routing and redux*/
import { connect } from "react-redux";
import { createNewTendorDispatch, getAllMainCategoriesDispatch,
  getAllSubCategoriesDispatch, getClientAllTendorsDispatch,
  updateBasicDetailsDispatch, updateBankDetailsDispatch, getBasicDetailsDispatch,getTopThreeBidsDispatch,
  getBankDetailsDispatch, setErrorFlag } from "./root-reducers/Client_Actions_Reducer";
import { bindActionCreators } from "redux";

/*Imported components*/
import ClientHomePage from './ClientHome'
import NewTendor from './tendors/NewTendor'
import YourTendors from './tendors/YourTendors'
import TopThreeBids from './tendors/TopThreeBids'
import Profile from './profileInfo/Profile'

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

  componentWillMount() {}

  render () {
    return (
      <div style={{ padding: '0px 10px' }}>
        <PropsRoute exact path='/client' component={ClientHomePage} {...this.props} />
        <PropsRoute path='/client/newTendor' component={NewTendor} {...this.props} />
        <PropsRoute path='/client/yourTendors' component={YourTendors} {...this.props} />
        <PropsRoute path='/client/Profile' component={Profile} {...this.props} />
        <PropsRoute path='/client/TopThreeBids/:tenderId' component={TopThreeBids} {...this.props} />
        <ToastContainer />
      </div>
    )
  }
}

//map store state to component state
function mapStateToProps(state) {
  //console.log(state.clientReducer)
  const { current_user, main_categories, sub_categories, all_client_tendors, top_three_bids,registrationSuccessStatus, notificationMsg} = state.clientReducer
  return {
    current_user,
    main_categories,
    sub_categories,
    all_client_tendors,
    top_three_bids,
    registrationSuccessStatus,
    notificationMsg
  };
}

//map store dispatch function to component props
function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(Object.assign({}, {
    createNewTendorDispatch,
    getAllMainCategoriesDispatch,
    getAllSubCategoriesDispatch,
    getClientAllTendorsDispatch,
    updateBasicDetailsDispatch,
    updateBankDetailsDispatch,
    getBasicDetailsDispatch,
    getBankDetailsDispatch,
    getTopThreeBidsDispatch,
    setErrorFlag,
    onNewTenderClick: () => dispatch(submit('PostTender')),
    onUpdateBasicDetailsClick: () => dispatch(submit('PostBasicInfo')),
    onUpdateBankDetailsClick: () => dispatch(submit('PostBankInfo')),
  }), dispatch)

  return Object.assign({}, actions, {
    onNewTenderRequest: (v) => dispatch(createNewTendorDispatch(v)),
    onUpdateBasicDetailsrRequest:(v) => dispatch(updateBasicDetailsDispatch(v)),
    onUpdateBankDetailsrRequest:(v) => dispatch(updateBankDetailsDispatch(v)),
  })
}

//conect our component with store state and store dispatch functions
export default connect(mapStateToProps, mapDispatchToProps)(ClientContainer);
