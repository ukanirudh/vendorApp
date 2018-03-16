import axios from 'axios';

const getMainCategoriesUrl = '/main_categories';
const getSubCategoriesUrl = '/sub_categories';
const createTendorUrl = '/tender';
const getClientAllTendersUrl='/client_tenders';
const clientBasicDeatilsUrl='/basic_details';
const clientBankDeatilsUrl='/business_details';

class ClientServiceApis {

	static requestHeaders() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + localStorage.getItem('authToken')
    }
  }

	static newTendorRequest( payloadData ) {
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

	static clientBasicDeatilsResquest( method, payloadData ) {
		const headers = this.requestHeaders();

		return axios({
			method: method,
			url: clientBasicDeatilsUrl,
			headers: headers,
			data: payloadData
		}).then(function (response) {
			return response;
		}).catch(function (error) {
			return error.response ;
		});
	}

	static clientBankDeatilsResquest( method, payloadData ) {
		const headers = this.requestHeaders();

		return axios({
			method: method,
			url: clientBankDeatilsUrl,
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

	static getClientAllTendors() {
		const headers = this.requestHeaders();

		return axios({
			method: 'GET',
			url: getClientAllTendersUrl,
			headers: headers
		}).then(function (response) {
			return response;
		}).catch(function (error) {
			return error.response ;
		});
	}

}

export default ClientServiceApis;
