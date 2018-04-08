import ClientServiceApi from '../Client_Service_Api'

const ON_CREATE_TENDER = 'ON_CREATE_TENDER'
const GET_CLIENT_ALL_TENDORS = 'GET_CLIENT_ALL_TENDORS'
const ON_GET_TENDER_DETAILS = 'ON_GET_TENDER_DETAILS'
const GET_TOP_THREE_BIDS = 'GET_TOP_THREE_BIDS'

export function createNewTendorDispatch(payload) {
  return (dispatch, getState) => {
    return ClientServiceApi.newTendorRequest(payload).then(response => {
      if(response.status === 201 || response.status === 200) {
        dispatch(onCreateNewTender(response.data))
        dispatch({type:'SUCCESS_TOAST', payload: 'Your Tender has been posted!'})
      }
      else
        dispatch({type:'ERROR_TOAST', payload: 'Failed to post your tender!'})
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  }
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

export function getTenderDetailsDispatch(tenderId) {
  return (dispatch, getState) => {
    return ClientServiceApi.getTendorsDetails(tenderId).then(response => {
      if(response.status === 201 || response.status === 200) {
        dispatch(onGetTenderDetails(response.data))
      }
      else
        dispatch({type:'ERROR_TOAST', payload: 'Unable to fetch tender details!'})
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  }
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

export function onCreateNewTender(user) {
  return {
    type: ON_CREATE_TENDER,
    payload: user
  };
}

export function getClientAllTendors(data) {
  return {
    type: GET_CLIENT_ALL_TENDORS,
    payload: data
  };
}

export function onGetTenderDetails(tenderDetails) {
  return {
    type: ON_GET_TENDER_DETAILS,
    payload: tenderDetails
  };
}

export function getTopThreeBids(data) {
  return {
    type: GET_TOP_THREE_BIDS,
    payload: data
  };
}

const INITIAL_STATE = {
  tender_details: {},
  all_client_tendors:[],
  top_three_bids:[]
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ON_GET_TENDER_DETAILS:
      return {...state, tender_details: action.payload.data}

    case ON_CREATE_TENDER:
      return {...state}

    case GET_CLIENT_ALL_TENDORS:
      return { ...state , all_client_tendors: action.payload.data }

    case GET_TOP_THREE_BIDS:
      return { ...state, top_three_bids: action.payload.data };  

    default:
      return state;
  }
}
