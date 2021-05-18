import {$axios} from "~/utils/api";

export class AxiosRequest {
  get (endpoint:string, format:string = '$get') : Promise<any> {
    return new Promise((resolve, reject) => {
      $axios.$get(endpoint).then(response => {
        resolve(response)
      }).catch((error:any) => {
        reject(error)
        console.log(error, 'manejar_error')
      })
    })
  }
  post (endpoint:string, data:any) {
    return new Promise((resolve, reject) => {
      $axios.$post(endpoint, data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
        console.log(error, 'manejar_error')
      })
    })
  }
  put (endpoint:string, data:any) {
    return new Promise((resolve, reject) => {
      $axios.$put(endpoint, data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
        console.log(error, 'manejar_error')
      })
    })
  }
  delete (endpoint:string, data:any) {
    return new Promise((resolve, reject) => {
      $axios.$delete(endpoint, data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
        console.log(error, 'manejar_error')
      })
    })
  }

}
