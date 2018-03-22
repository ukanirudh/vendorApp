import axios from 'axios';

const getMainCategoriesUrl = '/main_categories';
const getAllSubscribedTendersUrl = '/tenders_main_category';
const vendorBasicDeatilsUrl='/basic_details';
const vendorBankDeatilsUrl='/business_details';
const getTendersDetailsUrl = '/tender_details';

class AunthenticationAndRegistrationApi {

	static requestHeaders() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + localStorage.getItem('authToken')
    }
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

	static getAllSubscribedTenders( mainCategoryId ) {
		const headers = this.requestHeaders();

		return axios({
			method: 'GET',
			url: getAllSubscribedTendersUrl,
			headers: headers,
			params:{
				mainCategoryId
			}
		}).then(function (response) {
			return response;
		}).catch(function (error) {
			return error.response ;
		});
	}

	static vendorBasicDeatilsResquest( method, payloadData ) {
		const headers = this.requestHeaders();

		return axios({
			method: method,
			url: vendorBasicDeatilsUrl,
			headers: headers,
			data: payloadData
		}).then(function (response) {
			return response;
		}).catch(function (error) {
			return error.response ;
		});
	}

	static vendorBankDeatilsResquest( method, payloadData ) {
		const headers = this.requestHeaders();

		return axios({
			method: method,
			url: vendorBankDeatilsUrl,
			headers: headers,
			data: payloadData
		}).then(function (response) {
			return response;
		}).catch(function (error) {
			return error.response ;
		});
	}

  static tenderDetailsRequest(tenderId) {
    const headers = this.requestHeaders();

    return axios({
      method: 'GET',
      url: getTendersDetailsUrl + `${tenderId}`,
      headers: headers
    }).then(function (response) {
      return response;
    }).catch(function (error) {
      return error.response ;
    });
  }

}

export default AunthenticationAndRegistrationApi;
