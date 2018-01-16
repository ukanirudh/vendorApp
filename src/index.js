import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import { BrowserRouter as Router,
Route,
Switch } from 'react-router-dom';
import Routes from './commonComponents/Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Routes />
  </Router>, document.getElementById('root'));
registerServiceWorker();
