import {execute, GET, POST, PATCH} from "./index"

export const BASE_URI = `firebase`

export const setToken = (token)=> execute({method:POST, route:`${BASE_URI}`, data:{token}})
