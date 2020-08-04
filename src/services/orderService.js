import http from './httpService';

const apiEndpoint = `/order`;

 
    export function saveOrder(order) {
        
        return http.post(apiEndpoint, order)
      }