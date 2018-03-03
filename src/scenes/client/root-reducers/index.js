import { combineReducers } from "redux";
import Client_Reducer from './Client_Actions_Reducer';
import { reducer as reduxFormReducer } from 'redux-form';
const rootReducer = combineReducers({
  clientReducer: Client_Reducer,
  form: reduxFormReducer
});

export default rootReducer;
