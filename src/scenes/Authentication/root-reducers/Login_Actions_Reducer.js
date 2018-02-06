import AunthenticationAndRegistrationApi from '../Authentication_Api';
import { CreateBrowserHistory } from '../../../commonComponents'

export function submitLoginDispatch( payload) {

  return function(dispatch) {
    return AunthenticationAndRegistrationApi.applicantLogin( payload).then(response => {
      //console.log("dispatch login suc::",response);
      if(response.status === 201 || response.status === 200)
        dispatch(submitLogin(response));
      else
        dispatch(handleError(response));
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}

export function logoutDispatch( userEmail, token) {
  return function(dispatch) {
    return AunthenticationAndRegistrationApi.logout( userEmail, token).then(response => {
      //console.log("dispatch login suc::",response);
      if(response.status === 201 || response.status === 200)
        dispatch(logout(response));
      else
        dispatch(handleError(response));
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}

export function submitLogin(user) {
  return {
    type: "SUBMIT_LOGIN",
    payload: user
  };
}

export function logout(token) {
  return {
    type: "LOG_OUT",
    payload: token
  };
}

export function forgotPassword(user) {
  return {
    type: "FORGOT_PASSWORD",
    payload: user
  };
}

export function resetStore(data) {
  return {
    type: "RESET_STORE",
    payload: data
  };
}

export function handleError(error) {
  return {
    type: "HANDLE_ERROR",
    payload: error
  };
}

const INITIAL_STATE = {
  current_user: {},
  registrationSuccessStatus: true
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case "SUBMIT_LOGIN":
      console.log(action.payload);
      const { email, id, type } = action.payload.data.user
      localStorage.setItem("userprofile", JSON.stringify({ email, id }) );
      if( type === "vendor" ) {
        CreateBrowserHistory.push({
          pathname: "/vendor",
      		// 	state: { stateData: action.payload.data.user }
        })
      } else {
        CreateBrowserHistory.push({
          pathname: "/client",
      		// 	state: { stateData: action.payload.data.user }
        })
      }
    return state;

  case "FORGOT_PASSWORD":
  //console.log(action.payload);
  var baseUrl = global.devHost ;
  const forgotUrl = baseUrl + '/users/sign_in';
  fetch(forgotUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "user":{
        "email":action.payload.email,
        "password":action.payload.password
      }
    })
  }).then((response) => response.json())
  .then((responseJson) => {
  	if(responseJson.success){
  		alert("successful login");
      	console.log(responseJson);
  	} else {
  		alert("authentication failed");
  	}
      return true;
    })
    .catch((error) => {
    	alert("unauthorized");
      console.error(error);
    });
  return action.payload;


  case "LOG_OUT":
    if(action.payload.status === 200 ){
      localStorage.removeItem("userprofile");
      // browserHistory.push({
      // 	pathname: '/Login'
      // });
    } else {
      localStorage.removeItem("userprofile");
      // browserHistory.push({
      // 	pathname: '/Login'
      // });
    }
  return state;

  case "HANDLE_ERROR":
  //console.log(action.payload);
  	return { ...state , registrationSuccessStatus: action.payload.status,
		errorMessage: action.payload.data.message, errorSummary: action.payload.statusText}

	case "RESET_STORE":
			return { ...state, registrationSuccessStatus: INITIAL_STATE.registrationSuccessStatus };

  default:
    return state;
  }
}
