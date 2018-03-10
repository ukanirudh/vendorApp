import axios from 'axios';

const getMainCategoriesUrl = '/main_categories';
const getSubCategoriesUrl = '/sub_categories';
const createTendorUrl = '/tender';
const getClientAllTendersUrl='/client_tenders';
const updateUserDeatilsUrl='/update_basic_details';
const updateUserBankDeatilsUrl='/update_business_details';
class AunthenticationAndRegistrationApi {

	static requestHeaders() {
    	return {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		}
  }

	static newTendorRequest( payloadData, clientId ) {
		var createTendorRequestUrl = `${createTendorUrl}/${clientId}` ;
		const headers = this.requestHeaders();

		return axios({
			method: 'POST',
			url: createTendorRequestUrl,
			headers: headers,
			data: payloadData
		}).then(function (response) {
			return response;
		}).catch(function (error) {
			return error.response ;
		});
	}

	static updateUserDeatilsResquest( payloadData, clientId ) {
		var updateUserDeatilsRequestUrl = `${updateUserDeatilsUrl}/${clientId}` ;
		const headers = this.requestHeaders();

		return axios({
			method: 'PUT',
			url: updateUserDeatilsRequestUrl,
			headers: headers,
			data: payloadData
		}).then(function (response) {
			return response;
		}).catch(function (error) {
			return error.response ;
		});
	}

	static updateUserBankDeatilsResquest( payloadData, clientId ) {
		var updateUserBankDeatilsRequestUrl = `${updateUserBankDeatilsUrl}/${clientId}` ;
		const headers = this.requestHeaders();

		return axios({
			method: 'PUT',
			url: updateUserBankDeatilsRequestUrl,
			headers: headers,
			data: payloadData
		}).then(function (response) {
			return response;
		}).catch(function (error) {
			return error.response ;
		});
	}

	static getAllMainCategories() {
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

	static getAllSubCategories( mainCategoryId ) {
		const subCatUrl = getSubCategoriesUrl + '/' + mainCategoryId ;
		const headers = this.requestHeaders();

		return axios({
			method: 'GET',
			url: subCatUrl,
			headers: headers
		}).then(function (response) {
			return response;
		}).catch(function (error) {
			return error.response ;
		});
	}

	static getClientAllTendors( clientId ) {
		const ClientAllTendersUrl = getClientAllTendersUrl + '/' + clientId ;
		const headers = this.requestHeaders();

		return axios({
			method: 'GET',
			url: ClientAllTendersUrl,
			headers: headers
		}).then(function (response) {
			return response;
		}).catch(function (error) {
			return error.response ;
		});
	}

}

export default AunthenticationAndRegistrationApi;
