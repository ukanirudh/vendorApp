import VendorServiceApi from '../Vendor_Service_Api';
import {isEmpty} from 'lodash'
import { CreateBrowserHistory } from '../../../commonComponents'

const GET_ALL_SUBSCRIBED_CATEGORY_TENDER = 'GET_ALL_SUBSCRIBED_CATEGORY_TENDER'
const GET_TENDER_DETAILS = 'GET_TENDER_DETAILS'

export function getAllSubscribedTendersDispatch( mainCategoryId ) {
  return function(dispatch) {
    return VendorServiceApi.getAllSubscribedTenders(mainCategoryId).then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(getAllSubscribedTenders(response.data));
      else
        dispatch({type: "HANDLE_ERROR", payload: response});
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}

export function getTenderDetailsDispatch() {
  return function(dispatch) {
    return VendorServiceApi.tenderDetailsRequest().then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(getTenderDetails(response.data));
      else
        dispatch({ type: "HANDLE_ERROR", payload: response})
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}

export function getAllSubscribedTenders(data) {
  return {
    type: GET_ALL_SUBSCRIBED_CATEGORY_TENDER,
    payload: data
  };
}

export function getTenderDetails(data) {
  return {
    type: GET_TENDER_DETAILS,
    payload: data
  };
}

const INITIAL_STATE = {
  tender_details: {},
  isLoading: true,
  subscribed_category_tenders: []
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case GET_ALL_SUBSCRIBED_CATEGORY_TENDER:
      var { data } = action.payload
      return { ...state , subscribed_category_tenders: isEmpty(data) ? [] : data, isLoading: false };

    case GET_TENDER_DETAILS:
      //console.log(action.payload)
      var { data } = action.payload
      return { ...state , tender_details: data };

    default:
      return {...state};
  }
}
