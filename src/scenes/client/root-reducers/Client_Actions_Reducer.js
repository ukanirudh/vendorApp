import ClientServiceApi from '../Client_Service_Api';
import { CreateBrowserHistory } from '../../../commonComponents'

const SET_CURRENT_USER_DATA = 'SET_CURRENT_USER_DATA'
const ON_CREATE_TENDER = 'ON_CREATE_TENDER'
const GET_ALL_MAIN_CATEGORIES = 'GET_ALL_MAIN_CATEGORIES'
const GET_ALL_SUB_CATEGORIES = 'GET_ALL_SUB_CATEGORIES'
const GET_CLIENT_ALL_TENDORS = 'GET_CLIENT_ALL_TENDORS'
const UPDATE_CURRENT_USER_DATA = 'UPDATE_CURRENT_USER_DATA'
const UPDATE_CURRENT_USER_BANK_DATA = 'UPDATE_CURRENT_USER_BANK_DATA'

export function createNewTendorDispatch(payload) {
  return (dispatch, getState) => {
    const {clientReducer:{current_user}} = getState()
    const {id} = current_user
    return ClientServiceApi.newTendorRequest(payload, id).then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(onCreateNewTender(response.data))
      else
        dispatch(handleError(response));
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  }
}
export function updateBasicDetailsDispatch(payload) {
  return (dispatch, getState) => {
    const {clientReducer:{current_user}} = getState()
    const {id} = current_user
    return ClientServiceApi.updateUserDeatilsResquest(payload, id).then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(onUpdateCurrentUserData(response.data))
      else
        dispatch(handleError(response));
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  }
}

export function updateBankDetailsDispatch(payload) {
  return (dispatch, getState) => {
    const {clientReducer:{current_user}} = getState()
    const {id} = current_user
    return ClientServiceApi.updateUserBankDeatilsResquest(payload, id).then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(onUpdateCurrentUserBankData(response.data))
      else
        dispatch(handleError(response));
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  }
}




export function getAllMainCategoriesDispatch() {
  return function(dispatch) {
    return ClientServiceApi.getAllMainCategories().then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(getAllMainCategories(response.data));
      else
        dispatch(handleError(response));
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}

export function getAllSubCategoriesDispatch( mainCategoryId ) {
  return function(dispatch) {
    return ClientServiceApi.getAllSubCategories(mainCategoryId).then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(getAllSubCategories(response.data));
      else
        dispatch(handleError(response));
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}

export function getClientAllTendorsDispatch( clientId ) {
  return function(dispatch) {
    return ClientServiceApi.getClientAllTendors(clientId).then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(getClientAllTendors(response.data));
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

export function onUpdateCurrentUserData(userDetails) {
  return {
    type: UPDATE_CURRENT_USER_BANK_DATA,
    payload: userDetails
  };
}
export function onUpdateCurrentUserBankData(userDetails) {
  return {
    type: UPDATE_CURRENT_USER_DATA,
    payload: userDetails
  };
}

export function onCreateNewTender(user) {
  return {
    type: ON_CREATE_TENDER,
    payload: user
  };
}

export function getAllMainCategories(data) {
  return {
    type: GET_ALL_MAIN_CATEGORIES,
    payload: data
  };
}

export function getAllSubCategories(data) {
  return {
    type: GET_ALL_SUB_CATEGORIES,
    payload: data
  };
}

export function getClientAllTendors(data) {
  return {
    type: GET_CLIENT_ALL_TENDORS,
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
  sub_categories:[],
  all_client_tendors:[]
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case SET_CURRENT_USER_DATA:
      return {...state, current_user: action.payload};

    case UPDATE_CURRENT_USER_DATA:
      return {...state, current_user: action.payload};

    case UPDATE_CURRENT_USER_BANK_DATA:
      return {...state, current_user: action.payload};
    
    case ON_CREATE_TENDER:
      return {...state};

    case GET_ALL_MAIN_CATEGORIES:
      //console.log(action.payload)
      var { data } = action.payload
      return { ...state , main_categories: data };

    case GET_ALL_SUB_CATEGORIES:
      var { data } = action.payload
      return { ...state , sub_categories: data };

    case GET_CLIENT_ALL_TENDORS:
       var { data } = action.payload
      return { ...state , all_client_tendors: data };

    case "HANDLE_ERROR":
    //console.log(action.payload);
    	return { ...state , registrationSuccessStatus: action.payload.status,
			errorMessage: action.payload.data.message, errorSummary: action.payload.statusText}

    default:
      return state;
  }
}
