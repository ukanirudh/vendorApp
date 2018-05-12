import VendorServiceApi from '../Vendor_Service_Api';

const GET_ALL_SUBSCRIBED_CATEGORY_TENDER = 'GET_ALL_SUBSCRIBED_CATEGORY_TENDER'
const GET_TENDER_DETAILS = 'GET_TENDER_DETAILS'
const POST_BID = 'POST_BID'
const POST_BID_REQUEST = 'Request/POST_BID'
const ONGOING_TENDERS = 'ONGOING_TENDERS'
const COMPLETED_TENDERS = 'COMPLETED_TENDERS'

export function getAllSubscribedTendersDispatch(mainCategoryId) {
  return function(dispatch) {
    const mainCategoryIdParam = JSON.parse(localStorage.getItem('mainCategory'))
    return VendorServiceApi.getAllSubscribedTenders(mainCategoryIdParam.id).then(response => {
      if(response.status === 201 || response.status === 200) {
        dispatch(getAllSubscribedTenders(response.data))
      }
      else
        dispatch({type: "HANDLE_ERROR", payload: response})
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}

export function getOngoingTendersDispatch( type, statusType ) {
  return function(dispatch) {
    return VendorServiceApi.tenderBidRequest(type, {}, statusType).then(response => {
      if(response.status === 201 || response.status === 200) {
        if (statusType === 'onGoing') {
          dispatch(getOngoingTenders(response.data))
        } else dispatch(getCompletedTenders(response.data))
      }
      else
        dispatch({type:'ERROR_TOAST', payload: 'Unable to retrive the bids details!'})
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}

export function getTenderDetailsDispatch(tenderId) {
  return function(dispatch) {
    return VendorServiceApi.tenderDetailsRequest(tenderId).then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(getTenderDetails(response.data));
      else
        dispatch({ type: "HANDLE_ERROR", payload: response})
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}

export function getTenderBidDetailsDispatch(tenderId) {
  return function(dispatch) {
    return VendorServiceApi.tenderDetailsRequest(tenderId, true).then(response => {
      if(response.status === 201 || response.status === 200)
        dispatch(getTenderDetails(response.data));
      else
        dispatch({ type: "HANDLE_ERROR", payload: response})
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}

export function postBidDispatch(type, payload) {
  return function(dispatch) {
    dispatch(setPostBidRequest())
    return VendorServiceApi.tenderBidRequest(type, payload).then(response => {
      if(response.status === 201 || response.status === 200) {
        dispatch(postBid(response.data))
        dispatch({type:'SUCCESS_TOAST', payload: 'Your bid details are updated'})
        dispatch(setPostBidRequestSuccess())
      }
      else
        dispatch({ type: "HANDLE_ERROR", payload: response})
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}
/*mock post bid response*/
// export function postBidDispatch(payload) {
//   return function(dispatch) {
//     var promise1 = new Promise(function(resolve, reject) {
//       setTimeout(resolve, 100, 'foo');
//     });
//     dispatch(setPostBidRequest())
//     return promise1.then(response => {
//       if(true) {
//         dispatch(postBid({'success': true, 'data': 'xyz'}))
//         dispatch(setPostBidRequestSuccess())
//       }
//       else
//         dispatch({ type: "HANDLE_ERROR", payload: response})
//     }).catch(error => {
//       console.log("dispatch person::",error);
//     });
//   };
// }

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

export function getOngoingTenders(data) {
  return {
    type: ONGOING_TENDERS,
    payload: data
  };
}

export function getCompletedTenders(data) {
  return {
    type: COMPLETED_TENDERS,
    payload: data
  };
}

export function postBid(data) {
  return {
    type: POST_BID,
    payload: data
  };
}

export function setPostBidRequest() {
  return {
    type: POST_BID_REQUEST,
    payload: false
  };
}

export function setPostBidRequestSuccess() {
  return {
    type: POST_BID_REQUEST,
    payload: true
  };
}

const INITIAL_STATE = {
  tender_details: {},
  post_bid: false,
  subscribed_category_tenders: [],
  on_going_tenders: [],
  completed_tenders: []
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_SUBSCRIBED_CATEGORY_TENDER:
      var { data } = action.payload
      return { ...state , subscribed_category_tenders: data, isLoading: false };

    case GET_TENDER_DETAILS:
      return { ...state , tender_details: action.payload.data };

    case ONGOING_TENDERS:
      return { ...state , on_going_tenders: action.payload.data };

    case COMPLETED_TENDERS:
      return { ...state , completed_tenders: action.payload.data };

    case POST_BID_REQUEST:
      return { ...state, post_bid: action.payload }

    case POST_BID:
      const {value, position} = action.payload.data
      Object.assign(state.tender_details, {value, position})
      return { ...state }

    default:
      return {...state};
  }
}
