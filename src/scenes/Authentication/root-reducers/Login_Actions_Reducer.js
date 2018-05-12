import AunthenticationAndRegistrationApi from '../Authentication_Api';

export function submitLoginDispatch( payload) {

  return function(dispatch) {
    return AunthenticationAndRegistrationApi.applicantLogin(payload).then(response => {
      if(response.status === 201 || response.status === 200) {
        dispatch(submitLogin(response.data))
      } else {
        dispatch({type:'ERROR_TOAST', payload: response.data.message})
      }
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}

export function logoutDispatch( userEmail, token) {
  return function(dispatch) {
    return AunthenticationAndRegistrationApi.logout( userEmail, token).then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(logout(response));
      else
        dispatch({type:'ERROR_TOAST', payload: response.data.message})
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

const INITIAL_STATE = {
  current_user: {},
  current_user_type : '',
  registrationSuccessStatus: false,
  registrationMessage: ''
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case "SUBMIT_LOGIN":
      const { token, maincategory, canPostTender = false } = action.payload.data
      localStorage.setItem("authToken", token)
      localStorage.setItem("mainCategory", JSON.stringify(maincategory))
      localStorage.setItem("canPostTender", canPostTender)
      return {...state, current_user: token, registrationSuccessStatus: true }

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

    default:
      return state;
  }
}
