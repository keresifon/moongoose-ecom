import http from './httpService';

const apiEndpoint = `/order`;

export function saveOrder(order) {
	// console.log(order)
	//  console.log(http.post(apiEndpoint, order))
	return http.post(apiEndpoint, order);
}
