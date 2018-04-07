import React, { Component } from 'react'
import { Switch } from 'react-router-dom';
import {submit} from 'redux-form'

/*routing and redux*/
import { connect } from "react-redux";
import { getAllMainCategoriesDispatch, getAllSubCategoriesDispatch,
  updateBasicDetailsDispatch, updateBankDetailsDispatch, getBasicDetailsDispatch,
  getBankDetailsDispatch } from "./root-reducers/Client_Actions_Reducer"
import {getTenderDetailsDispatch, createNewTendorDispatch, getClientAllTendorsDispatch} from './root-reducers/Tender_Actions_Reducer'
import {clearNotificationsMesaage} from '../../notificationsModule/Notifications_Reducer'
import { bindActionCreators } from "redux";

/*Imported components*/
import ClientHomePage from './ClientHome'
import NewTendor from './tendors/NewTendor'
import YourTendors from './tendors/YourTendors'
import TenderDetails from './tendors/TenderDetails'
import Profile from './profileInfo/Profile'
import {PropsRoute} from '../../utils/PropsRouteComponent'
import Notifications from '../../notificationsModule/Notifications'

class ClientContainer extends Component {
  componentWillMount() {}

  render () {
    const {toast_message} = this.props
    return (
      <div style={{ padding: '0px 10px' }}>
        <Switch>
          <PropsRoute exact path='/client' component={ClientHomePage} {...this.props} />
          <PropsRoute path='/client/newTendor' component={NewTendor} {...this.props} />
          <PropsRoute path='/client/yourTendors' component={YourTendors} {...this.props} />
          <PropsRoute path='/client/Profile' component={Profile} {...this.props} />
          <PropsRoute path='/client/tenderDetails/:id' component={TenderDetails} {...this.props} />
        </Switch>
        <Notifications msg={toast_message} {...this.props} />
      </div>
    )
  }
}

//map store state to component statetoast_message
function mapStateToProps(state) {
  const {clientReducer, tenderReducer, notifications} = state
  const { current_user, main_categories, sub_categories} = clientReducer
  const { toast_message, toast_type } = notifications
  const { tender_details, all_client_tendors } = tenderReducer
  return {
    current_user,
    main_categories,
    sub_categories,
    all_client_tendors,
    tender_details,
    toast_message,
    toast_type
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
    clearNotificationsMesaage,
    getTenderDetailsDispatch,
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
