import VendorServiceApi from '../Vendor_Service_Api';

const GET_ALL_MAIN_CATEGORIES = 'GET_ALL_MAIN_CATEGORIES'
const UPDATE_VENDOR_DATA = 'UPDATE_VENDOR_DATA'

export function getAllMainCategoriesDispatch() {
  return function(dispatch) {
    return VendorServiceApi.getAllMainCategories().then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(getAllMainCategories(response.data));
      else
        dispatch({type:'ERROR_TOAST', payload: 'Something went wrong!'})
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
        dispatch({type:'ERROR_TOAST', payload: 'Something went wrong!'})
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
        dispatch({type:'ERROR_TOAST', payload: 'Something went wrong!'})
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
        dispatch({type:'SUCCESS_TOAST', payload: 'Basic Details Updated Successfully'})
      }
      else
        dispatch({type:'ERROR_TOAST', payload: 'Something went wrong!'})
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  }
}

export function updateBankDetailsDispatch(payload) {
  return (dispatch, getState) => {
    return VendorServiceApi.vendorBankDeatilsResquest('PUT', payload).then(response => {
      if(response.status === 201 || response.status === 200) {
        dispatch({type:'SUCCESS_TOAST', payload: 'Bank Details Updated Successfully'})
        dispatch(updateVendorData(response.data))
      }
      else
        dispatch({type:'ERROR_TOAST', payload: 'Something went wrong!'})
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

export function getAllMainCategories(data) {
  return {
    type: GET_ALL_MAIN_CATEGORIES,
    payload: data
  };
}

const INITIAL_STATE = {
  current_user: {},
  main_categories:[]
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_VENDOR_DATA:
      return {...state, ...{current_user: action.payload.data}};

    case GET_ALL_MAIN_CATEGORIES:
      return { ...state , main_categories: action.payload.data };

    default:
      return state;
  }
}
