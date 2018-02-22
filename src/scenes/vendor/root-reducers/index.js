import { combineReducers } from "redux";
import Vendor_Reducer from './Vendor_Actions_Reducer';
const rootReducer = combineReducers({
  vendorReducer: Vendor_Reducer
});

export default rootReducer;
