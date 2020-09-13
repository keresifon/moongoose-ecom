import http from './httpService'

const apiEndpoint = `/category`;


export function getCategories() {
  return http.get(apiEndpoint);
}

export function saveCategory(category) {
    if(category._id) {
      const body = { ...category }
      delete body._id;
      return http.put(`${apiEndpoint}/${category._id}`, body )
    }
   
    return http.post(apiEndpoint, category)
  }