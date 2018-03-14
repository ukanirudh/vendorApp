import axios from 'axios';

const getMainCategoriesUrl = '/main_categories';
const getAllSubscribedTendersUrl = '/tenders_main_category';

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

}

export default AunthenticationAndRegistrationApi;
