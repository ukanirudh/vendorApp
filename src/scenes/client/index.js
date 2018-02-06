import React, { Component } from 'react'
import { Route, matchPath } from 'react-router-dom';

/*Imported components*/
import ClientHomePage from './ClientHome'
import NewTendor from './tendors/NewTendor'

// /*Imported components*/
// import { AppHeader, AppFooter } from '../../commonComponents'

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
      <div style={{ padding: '0px 10px' }}>
        <Route exact path="/client" component={ClientHomePage}></Route>
        <Route path="/client/newTendor" component={NewTendor}></Route>
      </div>
    </Provider>
    )
  }
}

export default Client
