import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

/*Routing functionality*/
//import parent routes and create route history
import { Router, Route, Switch } from 'react-router-dom';
import { CreateBrowserHistory } from './commonComponents'

/*CSS*/
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-datepicker/dist/react-datepicker.css';

/*import components*/
import App from './App';

ReactDOM.render(
  <Router history={CreateBrowserHistory}>
    <main>
      <Switch>
        <Route path='/' component={App}/>
      </Switch>
    </main>
  </Router>, document.getElementById('root'));
registerServiceWorker();
