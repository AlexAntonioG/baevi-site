import { execute, GET, POST, DELETE, PATCH} from "."

const baseUrl = (route='')=> `movies${route}`

export const getMovies = ({$store})=> execute({method:GET, route: baseUrl(`/`), $store })
export const getMovie = ({$store,params})=> execute({method:GET, route: baseUrl(`/${params.id}\`)`), $store })
export const deleteMovie = ({$store,params})=> execute({method:DELETE, route: baseUrl(`/${params.id}`),  $store })
export const updateMovies = ({$store,params,data})=> execute({method:PATCH, route: baseUrl(`/${params.id}`),data:data,$store})
export const postMovie = ({$store,data})=> execute({method:POST, route: baseUrl(`/`),data:data,$store})


