import { combineReducers } from "redux";
import Vendor_Reducer from './Vendor_Actions_Reducer';
import Tender_Reducer from './Tender_Actions_Reducer';
import Notifications_Reducer from '../../../notificationsModule/Notifications_Reducer'
import { reducer as reduxFormReducer } from 'redux-form';
const rootReducer = combineReducers({
  vendorReducer: Vendor_Reducer,
  tenderReducer: Tender_Reducer,
  notifications: Notifications_Reducer,
  form: reduxFormReducer
});

export default rootReducer;
