import axios from 'axios';

const getMainCategoriesUrl = '/main_categories';
const createTendorUrl = '/tendor';

class AunthenticationAndRegistrationApi {

	static requestHeaders() {
    	return {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		}
  }

	static newTendorRequest( payloadData ) {
		//var baseUrl = global.devHost ;
		const headers = this.requestHeaders();

		return axios({
			method: 'POST',
			url: createTendorUrl,
			headers: headers,
			data: payloadData
		}).then(function (response) {
			return response;
		}).catch(function (error) {
			return error.response ;
		});
	}

	static getAllMainCategories( payloadData ) {
		//var baseUrl = global.devHost ;
		const headers = this.requestHeaders();

		return axios({
			method: 'GET',
			url: getMainCategoriesUrl,
			headers: headers
		}).then(function (response) {
			return response;
		}).catch(function (error) {
			return error.response ;
		});
	}
}

export default AunthenticationAndRegistrationApi;
