import AunthenticationAndRegistrationApi from '../Authentication_Api';

export function submitVendorSingUpDispatch(dataPayload) {
  return function(dispatch) {
    return AunthenticationAndRegistrationApi.registerVendor(dataPayload).then(response => {
      //console.log("dispatch login suc::",response);
      if(response.status === 201 || response.status === 200)
        dispatch(vendorSingUp(response));
      else
        dispatch({ type: "HANDLE_ERROR", payload: response });
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}

export function submitClientSingUpDispatch(dataPayload) {
  return function(dispatch) {
    return AunthenticationAndRegistrationApi.registerClient(dataPayload).then(response => {
      //console.log("dispatch login suc::",response);
      if(response.status === 201 || response.status === 200)
        dispatch(clientSingUp(response));
      else
        dispatch({ type: "HANDLE_ERROR", payload: response });
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
    //console.log(action.payload);
    	return { ...state , registrationSuccessStatus: action.payload.status };

		case "CLIENT_SIGNUP":
			console.log(action.payload);
				return { ...state , registrationSuccessStatus: action.payload.status };

    default:
      return state;
  }
}
