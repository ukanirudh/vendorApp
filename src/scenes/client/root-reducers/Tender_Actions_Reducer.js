import ClientServiceApi from '../Client_Service_Api'

const ON_GET_TENDER_DETAILS = 'ON_GET_TENDER_DETAILS'

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

export function onGetTenderDetails(tenderDetails) {
  return {
    type: ON_GET_TENDER_DETAILS,
    payload: tenderDetails
  };
}

const INITIAL_STATE = {
  tender_details: {}
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ON_GET_TENDER_DETAILS:
      return {...state, tender_details: action.payload.data}

    default:
      return state;
  }
}
