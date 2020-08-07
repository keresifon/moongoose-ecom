import http from './httpService';

const apiEndpoint = `/products`;

export function saveProduct(product) {
	// console.log(product)
	//  console.log(http.post(apiEndpoint, product))
	return http.post(apiEndpoint, product);
}
