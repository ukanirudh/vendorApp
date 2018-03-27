import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import {submit} from 'redux-form'
import { ToastContainer } from 'react-toastify';

/*routing and redux*/
import { connect } from "react-redux";
import { getAllMainCategoriesDispatch, updateBasicDetailsDispatch,
  updateBankDetailsDispatch, getBasicDetailsDispatch, getBankDetailsDispatch,
   setErrorFlag } from './root-reducers/Vendor_Actions_Reducer'
import { getTenderDetailsDispatch, getAllSubscribedTendersDispatch, postBidDispatch,
  getOngoingTendersDispatch } from './root-reducers/Tender_Actions_Reducer'
import { bindActionCreators } from "redux";

/*Imported components*/
import VendorHomePage from './VendorHome'
import AllCategoryTenders from './bids/AllCategoryTenders'
import Profile from './profileInfo/Profile'
import TenderDetails from './bids/TenderDetails'

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

class VendorContainer extends Component {

  componentWillMount() {}

  render () {
    return (
      <div style={{ padding: '0px 10px' }}>
      <Switch>
        <PropsRoute exact path="/vendor" component={VendorHomePage} {...this.props}></PropsRoute>
        <PropsRoute path='/vendor/Profile' component={Profile} {...this.props} />
        <PropsRoute path='/vendor/tenderlist' component={AllCategoryTenders} {...this.props} />
        <PropsRoute path='/vendor/tender/:id' component={TenderDetails} {...this.props} />
        <ToastContainer />
      </Switch>
      </div>
    )
  }
}

//map store state to component state
function mapStateToProps(state) {
  //console.log(state.vendorReducer)
  const {tenderReducer, vendorReducer} = state
  const { current_user, main_categories, registrationSuccessStatus, notificationMsg} = vendorReducer
  const { tender_details, subscribed_category_tenders, on_going_tenders, isLoading, post_bid } = tenderReducer
  return {
    current_user,
    main_categories,
    subscribed_category_tenders,
    on_going_tenders,
    isLoading,
    registrationSuccessStatus,
    tender_details,
    post_bid,
    notificationMsg
  };
}

//map store dispatch function to component props
function mapDispatchToProps(dispatch) {
   const actions = bindActionCreators(Object.assign({},
    {
      getAllMainCategoriesDispatch,
      getAllSubscribedTendersDispatch,
      updateBasicDetailsDispatch,
      updateBankDetailsDispatch,
      getBasicDetailsDispatch,
      getBankDetailsDispatch,
      getTenderDetailsDispatch,
      getOngoingTendersDispatch,
      postBidDispatch,
      setErrorFlag,
      onUpdateBasicDetailsClick: () => dispatch(submit('VendorBasicDetailsForm')),
      onUpdateBankDetailsClick: () => dispatch(submit('VendorBankDetailsForm')),
    }), dispatch)

  return Object.assign({}, actions, {
    onUpdateBasicDetailsRequest:(v) => dispatch(updateBasicDetailsDispatch(v)),
    onUpdateBankDetailsRequest:(v) => dispatch(updateBankDetailsDispatch(v)),
  })
}

//conect our component with store state and store dispatch functions
export default connect(mapStateToProps, mapDispatchToProps)(VendorContainer);
