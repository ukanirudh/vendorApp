import { combineReducers } from "redux";
import Client_Reducer from './Client_Actions_Reducer';
const rootReducer = combineReducers({
  clientReducer: Client_Reducer
});

export default rootReducer;
