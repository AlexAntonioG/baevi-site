import { execute, GET, POST, DELETE, PATCH} from "."

export const BASE_URI = `users`
const TOKEN = `token`


/**
 * /getToken
 * @param {string} username
 * @param {string} password
 * @return promise
 * **/
export const getToken = (username, password) => {
  let data = {
    username: username,
    password: password
  }
  return execute({method: POST, route: `${BASE_URI}/${TOKEN}`, data})
}

export const postUser = ({data}) => execute({method: POST, route: `${BASE_URI}/`, data})
