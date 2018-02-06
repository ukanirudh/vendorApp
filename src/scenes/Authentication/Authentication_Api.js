import axios from 'axios';
import { CreateBrowserHistory } from '../../commonComponents'

class AunthenticationAndRegistrationApi {

	static requestHeaders() {
	  	return {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		}
	}

	static applicantLogin( payloadData ) {
		//var baseUrl = global.devHost ;
		const signInUrl = '/login';
		const headers = this.requestHeaders();

		return axios({
			method: 'POST',
			url: signInUrl,
			headers: headers,
			data: payloadData
		}).then(function (response) {
			return response;
		}).catch(function (error) {
			return error.response ;
		});
	}

	// static logout( email, token ) {
	// 	var baseUrl = global.devHost ;
	// 	const logoutUrl = baseUrl + '/users/sign_out';
	// 	var headers = this.requestHeaders();
	// 	headers['X-API-TOKEN'] = token;
	// 	headers['X-API-EMAIL'] = email;
	//
	// 	return axios({
	// 		method: 'DELETE',
	// 		url: logoutUrl,
	// 		headers: headers
	// 	}).then(function (response) {
	// 		return response;
	// 	}).catch(function (error) {
	// 		return error.response ;
	// 	});
	// }

	static registerVendor( dataPayload ) {
		//const baseUrl = global.devHost ;
		//const registerVendorUrl = '/signup';
	  const headers = this.requestHeaders();
	  return axios({
	       method: 'POST',
	       url: '/signup',
	       data: dataPayload
	    }).then(function (response) {
	    return (response)
	  }).catch(function (error) {
	    //console.log("error",error.response);
	    return error.response ;
	  });
	}

	static registerClient (dataPayload) {
	  //const baseUrl = global.devHost ;
	  //const registerApplicantUrl = '/signup';
	  const headers = this.requestHeaders();
	  return axios({
	       method: 'POST',
	       url: '/signup',
	       data: dataPayload
	    }).then(function (response) {
	    return (response)
	  }).catch(function (error) {
	    //console.log("error",error.response);
	    return error.response ;
	  });
	}
}

export default AunthenticationAndRegistrationApi;
