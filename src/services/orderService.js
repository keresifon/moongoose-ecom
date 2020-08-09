import http from './httpService';

const apiEndpoint = `/order`;

export function saveOrder(order) {
	// console.log(order)
	 //console.log(http.post(apiEndpoint, order))
	return http.post(apiEndpoint, order);
}


export function updateOrder(order) {
	  const body = { ...order }
	  delete body.transaction_ref;
	  return http.put(`${apiEndpoint}/${order.transaction_ref}`, body )
	}
