import axios from 'axios';
const getMainCategoriesUrl = '/main_categories'

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

		return axios({
			method: 'POST',
			url: signInUrl,
			headers: this.requestHeaders(),
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
	  return axios({
      method: 'POST',
      url: '/signup',
      headers: this.requestHeaders(),
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
	  return axios({
      method: 'POST',
      url: '/signup',
      headers: this.requestHeaders(),
      data: dataPayload
    }).then(function (response) {
	    return (response)
	  }).catch(function (error) {
	    //console.log("error",error.response);
	    return error.response ;
	  });
	}

  static getAllMainCategories() {
    return axios({
      method: 'GET',
      url: getMainCategoriesUrl,
      headers: this.requestHeaders()
    }).then(function (response) {
      return response;
    }).catch(function (error) {
      return error.response ;
    });
  }
}

export default AunthenticationAndRegistrationApi;
