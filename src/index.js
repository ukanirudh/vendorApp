import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

/*Routing functionality*/
//import parent routes and create route history
import { Router } from 'react-router-dom';
import { CreateBrowserHistory, Routes } from './commonComponents'

/*CSS*/
import './index.css';
import 'semantic-ui-css/semantic.min.css';

/*import components*/
import App from './App';

ReactDOM.render(
  <Router history={CreateBrowserHistory}>
    <Routes />
  </Router>, document.getElementById('root'));
registerServiceWorker();
