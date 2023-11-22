import { execute, GET, POST, DELETE, PATCH} from "."

export const BASE_URI = `issues`
const MESSAGE = `messages`
const TAKE = `take`
const FINISH = `finish`


/**
 * /getToken
 * @param {string} username
 * @param {string} password
 * @return promise
 * **/

export const getIssues = ({issueId}) => execute({method: GET, route: `${BASE_URI}/${issueId ? issueId : '' }`})

export const postIssues = () => execute({method: POST, route: `${BASE_URI}/`})

export const postMessages = ({id, data}) => execute({method: POST, route: `${BASE_URI}/${id}/${MESSAGE}`, data})

export const getMessages = ({id}) => execute({method: GET, route: `${BASE_URI}/${id}/${MESSAGE}`})

export const takeIssue = ({id}) => execute({method: POST, route: `${BASE_URI}/${id}/${TAKE}`})

export const finishIssue = ({id}) => execute({method: POST, route: `${BASE_URI}/${id}/${FINISH}`})
