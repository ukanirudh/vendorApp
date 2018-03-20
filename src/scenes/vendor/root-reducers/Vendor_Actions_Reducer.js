import VendorServiceApi from '../Vendor_Service_Api';
import { CreateBrowserHistory } from '../../../commonComponents'

const SET_CURRENT_USER_DATA = 'SET_CURRENT_USER_DATA'
const GET_ALL_MAIN_CATEGORIES = 'GET_ALL_MAIN_CATEGORIES'
const GET_ALL_SUB_CATEGORIES = 'GET_ALL_SUB_CATEGORIES'
const GET_ALL_SUBSCRIBED_CATEGORY_TENDER = 'GET_ALL_SUBSCRIBED_CATEGORY_TENDER'
const UPDATE_VENDOR_DATA = 'UPDATE_VENDOR_DATA'
const SHOW_MESSAGE = 'SHOW_MESSAGE'
const SET_ERROR_FLAG = 'SET_ERROR_FLAG'

export function getAllMainCategoriesDispatch() {
  return function(dispatch) {
    return VendorServiceApi.getAllMainCategories().then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(getAllMainCategories(response.data));
      else
        dispatch(handleError(response));
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}

export function getAllSubscribedTendersDispatch( mainCategoryId ) {
  return function(dispatch) {
    return VendorServiceApi.getAllSubscribedTenders(mainCategoryId).then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(getAllSubscribedTenders(response.data));
      else
        dispatch(handleError(response));
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}


export function getBasicDetailsDispatch() {
  return (dispatch, getState) => {
    return VendorServiceApi.vendorBasicDeatilsResquest('GET').then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(updateVendorData(response.data))
      else
        console.log("dispatch error::",response);;
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  }
}

export function getBankDetailsDispatch() {
  return (dispatch, getState) => {
    return VendorServiceApi.vendorBankDeatilsResquest('GET').then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(updateVendorData(response.data))
      else
        console.log("dispatch error::",response);;
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  }
}

export function updateBasicDetailsDispatch(payload) {
  return (dispatch, getState) => {
    return VendorServiceApi.vendorBasicDeatilsResquest('PUT', payload).then(response => {
      if(response.status === 201 || response.status === 200) {
        dispatch(updateVendorData(response.data))
        dispatch(showMessage('Basic Details Updated Successfully'))
      }
      else
        console.log("dispatch error::",response);;
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  }
}

export function updateBankDetailsDispatch(payload) {
  return (dispatch, getState) => {
    return VendorServiceApi.vendorBankDeatilsResquest('PUT', payload).then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(updateVendorData(response.data))
      else
        console.log("dispatch error::",response);;
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  }
}


export function updateVendorData(clientDetails) {
  return {
    type: UPDATE_VENDOR_DATA,
    payload: clientDetails
  };
}

export function showMessage(message) {
  return {
    type: SHOW_MESSAGE,
    payload: message
  };
}

export function onSetCurrentUserData(userDetails) {
  return {
    type: SET_CURRENT_USER_DATA,
    payload: userDetails
  };
}

export function getAllMainCategories(data) {
  return {
    type: GET_ALL_MAIN_CATEGORIES,
    payload: data
  };
}

export function getAllSubscribedTenders(data) {
  return {
    type: GET_ALL_SUBSCRIBED_CATEGORY_TENDER,
    payload: data
  };
}

export function resetStore(data) {
  return {
    type: "RESET_STORE",
    payload: data
  };
}

export function setErrorFlag(flag) {
  return {
    type: SET_ERROR_FLAG,
    payload: flag
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
  registrationSuccessStatus: false,
  main_categories:[],
  subscribed_category_tenders:[],
  isLoading: true,
  notificationMsg: ''
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {

     case UPDATE_VENDOR_DATA:
      var { data } = action.payload
      return {...state, ...{current_user: data}};

    case SET_CURRENT_USER_DATA:
      return {...state, current_user: action.payload};

    case GET_ALL_MAIN_CATEGORIES:
      //console.log(action.payload)
      var { data } = action.payload
      return { ...state , main_categories: data };

    case GET_ALL_SUBSCRIBED_CATEGORY_TENDER:
      var { data } = action.payload
      return { ...state , subscribed_category_tenders: data, isLoading: false };

    case SHOW_MESSAGE:
      return {...state, registrationSuccessStatus:true, notificationMsg: action.payload };

   case SET_ERROR_FLAG:
      return { ...state , registrationSuccessStatus: action.payload, hasError: action.payload }

    case "HANDLE_ERROR":
    //console.log(action.payload);
    	return { ...state , registrationSuccessStatus: action.payload.status,
			errorMessage: action.payload.data.message, errorSummary: action.payload.statusText}

    default:
      return state;
  }
}
