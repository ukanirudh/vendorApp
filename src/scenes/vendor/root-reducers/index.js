import { combineReducers } from "redux";
import Vendor_Reducer from './Vendor_Actions_Reducer';
import { reducer as reduxFormReducer } from 'redux-form';
const rootReducer = combineReducers({
  vendorReducer: Vendor_Reducer,
  form: reduxFormReducer
});

export default rootReducer;
