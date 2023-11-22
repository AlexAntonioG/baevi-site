import axios from "axios"

const server = process.env.NODE_ENV !== 'production' ? 'http://baevi.com.mx/api/' : 'http://localhost:8080/api/'
//const server = process.env.NODE_ENV === 'production' ? 'http://baevi.com.mx/api/' : 'http://localhost:8080/api/'

/**Methods**/
export const POST = 'post'
export const GET = 'get'
export const PATCH = 'patch'
export const DELETE = 'delete'
export const PUT = 'put'

/**Routes**/
const VERSION = "version"

/**Config Builder
 * @constructor
 * @param requestMethod{string}is the request method to be used when making the request -  Ej 'post'
 * @param route{string}  is the server URL that will be used for the request - Ej '/quienSoy'
 * @param params{string} are the URL parameters to be sent with the request -  Ej ['id','day']
 * @param data{Object} is the data to be sent as the request body -Only applicable for request methods 'PUT', 'POST', and 'PATCH'
 * @param headers
 * @param camType
 * @param onUploadProgress
 * @param token
 * **/
function config(requestMethod, route, data, params, headers, onUploadProgress) {
  return {
    url: route,
    method: requestMethod,
    baseURL: server,
    headers: {Authorization: `Bearer ${window.localStorage.token}`},
    params, data, onUploadProgress
  }
}

export function execute({method, route, data, params, headers, responseType, server, onUploadProgress}) {
  return new Promise((resolve, reject) => {
    let conf = new config(method, route, data, params, headers, onUploadProgress)
    if (server) conf.baseURL = server
    if (responseType) conf.responseType = responseType
    if (headers) Object.keysProp(headers).forEach(k => conf.headers[k] = headers[k])
    awesomeLog("Request", {endpoint: `${conf.baseURL}${conf.url}`, method: conf.method, params, data})
    axios.request(conf).then(r => {
      awesomeLog("Response", r)
      resolve(r.data)
    }).catch(e => {
      awesomeLog("Error", e.response.data)
      reject(e.response.data.message || 'Error inesperado, intenta mas tarde o contacta con soporte')
    })

  })
}

function awesomeLog(titulo, obj) {
  console.log("*******" + titulo + "************")
  console.log(obj)
  console.log("*******Fin " + titulo + "*********")
  // if (obj.data && obj.data.message)
  //   M.toast({html: obj.data.message})
}




