// export function submitLoginDispatch( payload) {
//
//   return function(dispatch) {
//     return AunthenticationAndRegistrationApi.applicantLogin(payload).then(response => {
//       //console.log("dispatch login suc::",response);
//       if(response.status === 201 || response.status === 200)
//         dispatch(submitLogin(response.data));
//       else
//         dispatch(handleError(response));
//     }).catch(error => {
//       console.log("dispatch person::",error);
//     });
//   };
// }


export function handleError(error) {
  return {
    type: "HANDLE_ERROR",
    payload: error
  };
}

export function setErrorFlag(flag) {
  return {
    type: "SET_ERROR_FLAG",
    payload: flag
  };
}

const INITIAL_STATE = {
  registrationSuccessStatus: false,
  registrationMessage: '',
  hasError: false
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {

  case "HANDLE_ERROR":
  	return { ...state , registrationSuccessStatus: false, hasError: true,
		registrationMessage: action.payload.data.message }

  case "SET_ERROR_FLAG":
  	return { ...state , registrationSuccessStatus: false, hasError: action.payload }

  default:
    return state;
  }
}
