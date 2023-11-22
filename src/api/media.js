import { execute, GET, POST, DELETE, PATCH} from "."

const baseUrl = (route='')=> `medias${route}`

export const updatePlaylist = ({$store,data})=> execute({method:PATCH, route: baseUrl(`/playList`), data:data, $store })
export const getPlaylist = ($store)=> execute({method:GET, route: baseUrl(`/playList`),$store })
export const getMedia = ($store)=> execute({method:GET, route: baseUrl(`/`),$store })
export const postMedia = ({$store, data})=> execute({method:POST, route: baseUrl(`/`),$store,data:data})
export const deleteMedia = ({$store, params})=> execute({method:DELETE, route: baseUrl(`/${params.id}`),$store})

