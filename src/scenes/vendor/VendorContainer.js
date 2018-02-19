import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { isEmpty } from 'lodash'

/*routing and redux*/
import { connect } from "react-redux";
import { getAllMainCategoriesDispatch,
  getAllSubscribedTendersDispatch, onSetCurrentUserData } from "./root-reducers/Vendor_Actions_Reducer";
import { bindActionCreators } from "redux";

/*Imported components*/
import VendorHomePage from './VendorHome'
import AllCategoryTenders from './bids/AllCategoryTenders'

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
      </div>
    )
  }
}

//map store state to component state
function mapStateToProps(state) {
  //console.log(state.vendorReducer)
  const { current_user, main_categories, subscribed_category_tenders, isLoading} = state.vendorReducer
  return {
    current_user,
    main_categories,
    subscribed_category_tenders,
    isLoading
  };
}

//map store dispatch function to component props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getAllMainCategoriesDispatch,
      getAllSubscribedTendersDispatch,
      onSetCurrentUserData
    }, dispatch);
}

//conect our component with store state and store dispatch functions
export default connect(mapStateToProps, mapDispatchToProps)(VendorContainer);
