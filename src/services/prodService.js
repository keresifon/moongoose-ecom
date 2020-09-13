import http from './httpService';

const apiEndpoint = `/products`;

export function getProducts() {
	return http.get(apiEndpoint);
  }

export function saveProduct(product) {
	if(product._id) {
		const body = { ...product }
		delete body._id;
		return http.put(`${apiEndpoint}/${product._id}`, body )
	  }
	return http.post(apiEndpoint, product);
}

