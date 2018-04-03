import { combineReducers } from "redux";
import Client_Reducer from './Client_Actions_Reducer';
import Notifications_Reducer from '../../../notificationsModule/Notifications_Reducer'
import { reducer as reduxFormReducer } from 'redux-form';
const rootReducer = combineReducers({
  clientReducer: Client_Reducer,
  form: reduxFormReducer,
  notifications: Notifications_Reducer
});

export default rootReducer;
