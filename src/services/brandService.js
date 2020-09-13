import http from './httpService'

const apiEndpoint = `/brand`;


export function getBrands() {
  return http.get(apiEndpoint);
}

export function saveBrand(brand) {
    if(brand._id) {
      const body = { ...brand }
      delete body._id;
      return http.put(`${apiEndpoint}/${brand._id}`, body )
    }
   
    return http.post(apiEndpoint, brand)
  }