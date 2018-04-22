import React, { Component } from 'react'
import { Switch } from 'react-router-dom';
import { submit } from 'redux-form'

/*routing and redux*/
import { connect } from "react-redux";
import { getAllMainCategoriesDispatch, updateBasicDetailsDispatch, updateBankDetailsDispatch,
  getBasicDetailsDispatch, getBankDetailsDispatch} from './root-reducers/Vendor_Actions_Reducer'
import { getTenderDetailsDispatch, getTenderBidDetailsDispatch, getAllSubscribedTendersDispatch,
  postBidDispatch, getOngoingTendersDispatch } from './root-reducers/Tender_Actions_Reducer'
  import {clearNotificationsMesaage} from '../../notificationsModule/Notifications_Reducer'
import { bindActionCreators } from "redux";

/*Imported components*/
import {PropsRoute} from '../../utils/PropsRouteComponent'
import Notifications from '../../notificationsModule/Notifications'
import VendorHomePage from './VendorHome'
import AllCategoryTenders from './bids/AllCategoryTenders'
import Profile from './profileInfo/Profile'
import TenderDetails from './bids/TenderDetails'
import TenderBidDetailsComp from './bids/TenderBidDetailsComp'

class VendorContainer extends Component {
  componentWillMount() {}

  render () {
    const {toast_message} = this.props
    return (
      <div style={{ padding: '0px 10px' }}>
        <Switch>
          <PropsRoute exact path="/vendor" component={VendorHomePage} {...this.props}></PropsRoute>
          <PropsRoute path='/vendor/Profile' component={Profile} {...this.props} />
          <PropsRoute path='/vendor/tenderlist' component={AllCategoryTenders} {...this.props} />
          <PropsRoute path='/vendor/tender/:id' component={TenderDetails} {...this.props} />
          <PropsRoute path='/vendor/tender_bids/:id' component={TenderBidDetailsComp} {...this.props} />
        </Switch>
        <Notifications msg={toast_message} {...this.props} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  //console.log(state.vendorReducer)
  const {tenderReducer, vendorReducer, notifications} = state
  const {current_user, main_categories} = vendorReducer
  const {tender_details, subscribed_category_tenders, on_going_tenders, completed_tenders,
    isLoading, post_bid} = tenderReducer
  const {toast_message, toast_type} = notifications
  return {
    current_user,
    main_categories,
    subscribed_category_tenders,
    on_going_tenders,
    completed_tenders,
    isLoading,
    tender_details,
    post_bid,
    toast_message,
    toast_type
  };
}

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
      getTenderBidDetailsDispatch,
      getOngoingTendersDispatch,
      postBidDispatch,
      clearNotificationsMesaage,
      onUpdateBasicDetailsClick: () => dispatch(submit('VendorBasicDetailsForm')),
      onUpdateBankDetailsClick: () => dispatch(submit('VendorBankDetailsForm')),
    }), dispatch)

  return Object.assign({}, actions, {
    onUpdateBasicDetailsRequest:(v) => dispatch(updateBasicDetailsDispatch(v)),
    onUpdateBankDetailsRequest:(v) => dispatch(updateBankDetailsDispatch(v)),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(VendorContainer);
