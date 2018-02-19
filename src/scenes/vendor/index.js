import React, { Component } from 'react'
import { Route } from 'react-router-dom';

// /*Imported components*/
import VendorContainer from './VendorContainer'

/*routing and redux*/
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import vendorReducer from "./root-reducers";

import './vendor.css'

const VendorStore = createStore(vendorReducer, applyMiddleware(thunk))
class Vendor extends Component {
  render () {
    return (
    <Provider store={VendorStore}>
      <Route path="/vendor" component={VendorContainer}></Route>
    </Provider>
    )
  }
}

export default Vendor
