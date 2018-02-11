import ClientServiceApi from '../Client_Service_Api';
import { CreateBrowserHistory } from '../../../commonComponents'

const ON_CREATE_TENDER = 'ON_CREATE_TENDER'
const GET_ALL_MAIN_CATEGORIES = 'GET_ALL_MAIN_CATEGORIES'
const GET_ALL_SUB_CATEGORIES = 'GET_ALL_SUB_CATEGORIES'

export function createNewTendorDispatch( payload) {

  return function(dispatch) {
    return ClientServiceApi.newTendorRequest( payload).then(response => {
      //console.log("dispatch login suc::",response);
      if(response.status === 201 || response.status === 200)
        dispatch(onCreateNewTender(response));
      else
        dispatch(handleError(response));
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
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
  clientId : '',
  main_categories:[],
  sub_categories:[]
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case ON_CREATE_TENDER:
			//console.log(action.payload);
      const { email, id, type } = action.payload.data.user
			localStorage.setItem("userprofile", JSON.stringify({ email, id }) );
      if( type === "vendor" ) {
        CreateBrowserHistory.push({
          pathname: "/vendorHome",
      		// 	state: { stateData: action.payload.data.user }
        })
      } else {
        CreateBrowserHistory.push({
          pathname: "/vendorHome",
      		// 	state: { stateData: action.payload.data.user }
        })
      }
      return state;

    case GET_ALL_MAIN_CATEGORIES:
      //console.log(action.payload)
      var { data } = action.payload
      return { ...state , main_categories: data };

    case GET_ALL_SUB_CATEGORIES:
      var { data } = action.payload
      return { ...state , sub_categories: data };

		case "REGISTER_SCHOOL":
			//console.log(action.payload);
				return { ...state , registrationSuccessStatus: action.payload.status };

    case "HANDLE_ERROR":
    //console.log(action.payload);
    	return { ...state , registrationSuccessStatus: action.payload.status,
			errorMessage: action.payload.data.message, errorSummary: action.payload.statusText}

		case "RESET_STORE":
				return { ...state, registrationSuccessStatus: INITIAL_STATE.registrationSuccessStatus };

    default:
      return state;
  }
}
