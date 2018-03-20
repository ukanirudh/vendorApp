import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import {submit} from 'redux-form'
import { isEmpty } from 'lodash'
import { ToastContainer } from 'react-toastify';


/*routing and redux*/
import { connect } from "react-redux";
import { getAllMainCategoriesDispatch,
  getAllSubscribedTendersDispatch, onSetCurrentUserData,updateBasicDetailsDispatch, updateBankDetailsDispatch, getBasicDetailsDispatch,
  getBankDetailsDispatch, setErrorFlag } from "./root-reducers/Vendor_Actions_Reducer";
import { bindActionCreators } from "redux";

/*Imported components*/
import VendorHomePage from './VendorHome'
import AllCategoryTenders from './bids/AllCategoryTenders'
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

class VendorContainer extends Component {

  componentWillMount() {
    const {current_user} = this.props
    if(isEmpty(current_user)) {
      this.props.onSetCurrentUserData(JSON.parse(localStorage.getItem('userprofile')))
    }
  }

  render () {
    return (
      <div style={{ padding: '0px 10px' }}>
        <Route exact path="/vendor" component={VendorHomePage}></Route>
        <PropsRoute path='/vendor/tenderlist' component={AllCategoryTenders} props={this.props} />
        <PropsRoute path='/vendor/Profile' component={Profile} {...this.props} />
        <ToastContainer />
      </div>
    )
  }
}

//map store state to component state
function mapStateToProps(state) {
  //console.log(state.vendorReducer)
  const { current_user, main_categories, subscribed_category_tenders,registrationSuccessStatus,isLoading,notificationMsg} = state.vendorReducer
  return {
    current_user,
    main_categories,
    subscribed_category_tenders,
    isLoading,
    registrationSuccessStatus,
    notificationMsg
  };
}

//map store dispatch function to component props
function mapDispatchToProps(dispatch) {
   const actions = bindActionCreators(Object.assign({},
    {
      getAllMainCategoriesDispatch,
      getAllSubscribedTendersDispatch,
      onSetCurrentUserData,
      updateBasicDetailsDispatch,
      updateBankDetailsDispatch,
      getBasicDetailsDispatch,
      getBankDetailsDispatch,
      setErrorFlag,
      onUpdateBasicDetailsClick: () => dispatch(submit('PostBasicInfo')),
      onUpdateBankDetailsClick: () => dispatch(submit('PostBankInfo')),
    }), dispatch)

  return Object.assign({}, actions, {
    onUpdateBasicDetailsrRequest:(v) => dispatch(updateBasicDetailsDispatch(v)),
    onUpdateBankDetailsrRequest:(v) => dispatch(updateBankDetailsDispatch(v)),
  })
}

//conect our component with store state and store dispatch functions
export default connect(mapStateToProps, mapDispatchToProps)(VendorContainer);
