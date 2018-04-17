import AunthenticationAndRegistrationApi from '../Authentication_Api';
const GET_ALL_MAIN_CATEGORIES = 'GET_ALL_MAIN_CATEGORIES'

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

export function getAllMainCategoriesDispatch() {
  return function(dispatch) {
    return AunthenticationAndRegistrationApi.getAllMainCategories().then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(getAllMainCategories(response.data));
      else
        console.log("dispatch error::",response);;
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

export function getAllMainCategories(data) {
  return {
    type: GET_ALL_MAIN_CATEGORIES,
    payload: data
  };
}

const INITIAL_STATE = {
  isInProgress: false,
  main_categories:[]
}

export default function SingupReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATE_PROGRESS":
      return {...state, isInProgress: action.payload}

    case GET_ALL_MAIN_CATEGORIES:
      return {...state , main_categories: action.payload.data}

    case "VENDOR_SIGNUP":
		case "CLIENT_SIGNUP":
    default:
      return {...state}
  }
}
