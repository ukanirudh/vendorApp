import AunthenticationAndRegistrationApi from '../Authentication_Api';

export function submitVendorSingUpDispatch(dataPayload) {
  return function(dispatch) {
    return AunthenticationAndRegistrationApi.registerVendor(dataPayload).then(response => {
      if(response.status === 201 || response.status === 200) {
        dispatch(vendorSingUp(response))
        dispatch({type:'SUCCESS_TOAST', payload: 'Sign up Successful! Please verify your email via link sent your registered email'})
      } else {
        dispatch({type:'ERROR_TOAST', payload: response.data.message})
      }
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}

export function submitClientSingUpDispatch(dataPayload) {
  return function(dispatch) {
    return AunthenticationAndRegistrationApi.registerClient(dataPayload).then(response => {
      if(response.status === 201 || response.status === 200) {
        dispatch(clientSingUp(response))
        dispatch({type:'SUCCESS_TOAST', payload: 'Sign up Successful! Please verify your email via link sent your registered email'})
      } else {
        dispatch({type:'ERROR_TOAST', payload: response.data.message})
      }
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}

export function vendorSingUp(user) {
  return {
    type: "VENDOR_SIGNUP",
    payload: user
  };
}

export function clientSingUp(token) {
  return {
    type: "CLIENT_SIGNUP",
    payload: token
  };
}


const INITIAL_STATE = {
	singUpData: {}
}

export default function SingupReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case "VENDOR_SIGNUP":
		case "CLIENT_SIGNUP":
    default:
      return {...state}
  }
}
