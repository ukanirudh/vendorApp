import AunthenticationAndRegistrationApi from '../Authentication_Api';

export function submitVendorSingUpDispatch(dataPayload) {
  return function(dispatch) {
    dispatch(updateInProgressFlag(true))
    return AunthenticationAndRegistrationApi.registerVendor(dataPayload).then(response => {
      if(response.status === 201 || response.status === 200) {
        dispatch(vendorSingUp(response))
        dispatch({type:'SUCCESS_TOAST', payload: 'Sign up Successful! Please verify your email via link sent your registered email'})
      } else {
        dispatch(updateInProgressFlag(false))
        dispatch({type:'ERROR_TOAST', payload: response.data.message})
      }
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}

export function submitClientSingUpDispatch(dataPayload) {
  return function(dispatch) {
    dispatch(updateInProgressFlag(true))
    return AunthenticationAndRegistrationApi.registerClient(dataPayload).then(response => {
      if(response.status === 201 || response.status === 200) {
        dispatch(clientSingUp(response))
        dispatch({type:'SUCCESS_TOAST', payload: 'Sign up Successful! Please verify your email via link sent your registered email'})
      } else {
        dispatch(updateInProgressFlag(false))
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

export function updateInProgressFlag(flag) {
  return {
    type: "UPDATE_PROGRESS",
    payload: flag
  }
}

const INITIAL_STATE = {
  isInProgress: false
}

export default function SingupReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATE_PROGRESS":
      return {...state, isInProgress: action.payload}

    case "VENDOR_SIGNUP":
		case "CLIENT_SIGNUP":
    default:
      return {...state}
  }
}
