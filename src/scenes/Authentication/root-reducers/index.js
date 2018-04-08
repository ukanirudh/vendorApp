import { combineReducers } from "redux";
import Login_Reducer from './Login_Actions_Reducer'
import SignUp_Reducer from './SignUp_Actions_Reducer'
import Notifications_Reducer from '../../../notificationsModule/Notifications_Reducer'
const rootReducer = combineReducers({
  LoginModule: Login_Reducer,
  SignUpModule: SignUp_Reducer,
  notifications: Notifications_Reducer
});

export default rootReducer;
