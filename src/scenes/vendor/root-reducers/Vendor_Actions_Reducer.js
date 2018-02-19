import VendorServiceApi from '../Vendor_Service_Api';
import { CreateBrowserHistory } from '../../../commonComponents'

const SET_CURRENT_USER_DATA = 'SET_CURRENT_USER_DATA'
const GET_ALL_MAIN_CATEGORIES = 'GET_ALL_MAIN_CATEGORIES'
const GET_ALL_SUB_CATEGORIES = 'GET_ALL_SUB_CATEGORIES'
const GET_ALL_SUBSCRIBED_CATEGORY_TENDER = 'GET_ALL_SUBSCRIBED_CATEGORY_TENDER'

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

export function handleError(error) {
  return {
    type: "HANDLE_ERROR",
    payload: error
  };
}

const INITIAL_STATE = {
  current_user: {},
  registrationSuccessStatus: true,
  main_categories:[],
  subscribed_category_tenders:[],
  isLoading: true
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case SET_CURRENT_USER_DATA:
      return {...state, current_user: action.payload};

    case GET_ALL_MAIN_CATEGORIES:
      //console.log(action.payload)
      var { data } = action.payload
      return { ...state , main_categories: data };

    case GET_ALL_SUBSCRIBED_CATEGORY_TENDER:
      var { data } = action.payload
      return { ...state , subscribed_category_tenders: data, isLoading: false };

    case "HANDLE_ERROR":
    //console.log(action.payload);
    	return { ...state , registrationSuccessStatus: action.payload.status,
			errorMessage: action.payload.data.message, errorSummary: action.payload.statusText}

    default:
      return state;
  }
}
