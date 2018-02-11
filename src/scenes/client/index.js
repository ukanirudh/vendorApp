import React, { Component } from 'react'
import { Route, matchPath } from 'react-router-dom';

// /*Imported components*/
// import { AppHeader, AppFooter } from '../../commonComponents'
import ClientContainer from './ClientContainer'

/*routing and redux*/
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import clientReducer from "./root-reducers";

import './client.css'

const ClientStore = createStore(clientReducer, applyMiddleware(thunk))
class Client extends Component {
  render () {
    return (
    <Provider store={ClientStore}>
      <Route path="/client" component={ClientContainer}></Route>
    </Provider>
    )
  }
}

export default Client
