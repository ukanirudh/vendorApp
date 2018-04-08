import ClientServiceApi from '../Client_Service_Api';

const GET_ALL_MAIN_CATEGORIES = 'GET_ALL_MAIN_CATEGORIES'
const GET_ALL_SUB_CATEGORIES = 'GET_ALL_SUB_CATEGORIES'
const UPDATE_CLIENT_DATA = 'UPDATE_CLIENT_DATA'
const GET_TOP_THREE_BIDS = 'GET_TOP_THREE_BIDS'

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
        dispatch({type:'SUCCESS_TOAST', payload: 'Basic Details Updated Successfully'})
      }
      else
        dispatch({type:'ERROR_TOAST', payload: 'Failed to update Basic details!'})
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  }
}

export function updateBankDetailsDispatch(payload) {
  return (dispatch, getState) => {
    return ClientServiceApi.clientBankDeatilsResquest('PUT', payload).then(response => {
      if(response.status === 201 || response.status === 200) {
        dispatch(updateClientData(response.data))
        dispatch({type:'SUCCESS_TOAST', payload: 'Bank Details Updated Successfully'})
      }
      else
        dispatch({type:'ERROR_TOAST', payload: 'Failed to update Bank details!'})
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

export function getTopThreeBidsDispatch(tendorId) {
  return function(dispatch) {
    return ClientServiceApi.getTopThreeBids(tendorId).then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(getTopThreeBids(response.data));
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

export function getTopThreeBids(data) {
  return {
    type: GET_TOP_THREE_BIDS,
    payload: data
  };
}

const INITIAL_STATE = {
  current_user: {},
  main_categories:[],
  sub_categories:[],
  top_three_bids:[]
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_CLIENT_DATA:
      return {...state, ...{current_user: action.payload.data}};

    case GET_ALL_MAIN_CATEGORIES:
      return { ...state , main_categories: action.payload.data };

    case GET_ALL_SUB_CATEGORIES:
      return { ...state , sub_categories: action.payload.data };

    case GET_TOP_THREE_BIDS:
      return { ...state, top_three_bids: action.payload.data };

    default:
      return state;
  }
}
