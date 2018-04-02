import ClientServiceApi from '../Client_Service_Api';

const ON_CREATE_TENDER = 'ON_CREATE_TENDER'
const GET_ALL_MAIN_CATEGORIES = 'GET_ALL_MAIN_CATEGORIES'
const GET_ALL_SUB_CATEGORIES = 'GET_ALL_SUB_CATEGORIES'
const GET_CLIENT_ALL_TENDORS = 'GET_CLIENT_ALL_TENDORS'
const UPDATE_CLIENT_DATA = 'UPDATE_CLIENT_DATA'
const SHOW_MESSAGE = 'SHOW_MESSAGE'
const SET_ERROR_FLAG = 'SET_ERROR_FLAG'

export function createNewTendorDispatch(payload) {
  return (dispatch, getState) => {
    return ClientServiceApi.newTendorRequest(payload).then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(onCreateNewTender(response.data))
      else
        console.log("dispatch error::",response);;
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  }
}

export function getBasicDetailsDispatch() {
  return (dispatch, getState) => {
    return ClientServiceApi.clientBasicDeatilsResquest('GET').then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(updateClientData(response.data))
      else
        console.log("dispatch error::",response);;
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  }
}

export function getBankDetailsDispatch() {
  return (dispatch, getState) => {
    return ClientServiceApi.clientBankDeatilsResquest('GET').then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(updateClientData(response.data))
      else
        console.log("dispatch error::",response);;
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  }
}

export function updateBasicDetailsDispatch(payload) {
  return (dispatch, getState) => {
    return ClientServiceApi.clientBasicDeatilsResquest('PUT', payload).then(response => {
      if(response.status === 201 || response.status === 200) {
        dispatch(updateClientData(response.data))
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
    return ClientServiceApi.clientBankDeatilsResquest('PUT', payload).then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(updateClientData(response.data))
      else
        console.log("dispatch error::",response);;
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
        console.log("dispatch error::",response);;
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
        console.log("dispatch error::",response);;
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}

export function getClientAllTendorsDispatch() {
  return function(dispatch) {
    return ClientServiceApi.getClientAllTendors().then(response => {
      if(response.status === 201 || response.status === 200) {
        dispatch({type:'SUCCESS_TOAST', payload: 'Tender list retrived'})
        dispatch(getClientAllTendors(response.data))
      }
      else
        console.log("dispatch error::",response);;
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}

export function updateClientData(clientDetails) {
  return {
    type: UPDATE_CLIENT_DATA,
    payload: clientDetails
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

export function showMessage(message) {
  return {
    type: SHOW_MESSAGE,
    payload: message
  };
}

export function setErrorFlag(flag) {
  return {
    type: SET_ERROR_FLAG,
    payload: flag
  };
}

const INITIAL_STATE = {
  current_user: {},
  registrationSuccessStatus: false,
  main_categories:[],
  sub_categories:[],
  all_client_tendors:[],
  notificationMsg: ''
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case UPDATE_CLIENT_DATA:
      var { data } = action.payload
      return {...state, ...{current_user: data}};

    case ON_CREATE_TENDER:
      return {...state};

    case GET_ALL_MAIN_CATEGORIES:
      var { data } = action.payload
      return { ...state , main_categories: data };

    case GET_ALL_SUB_CATEGORIES:
      var { data } = action.payload
      return { ...state , sub_categories: data };

    case GET_CLIENT_ALL_TENDORS:
       var { data } = action.payload
      return { ...state , all_client_tendors: data };

    case SHOW_MESSAGE:
      return {...state, registrationSuccessStatus:true, notificationMsg: action.payload };

    case SET_ERROR_FLAG:
    	return { ...state , registrationSuccessStatus: action.payload, hasError: action.payload }

    default:
      return state;
  }
}
