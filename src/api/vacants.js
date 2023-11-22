import { execute, GET, POST, DELETE, PATCH} from "."

const baseUrl = (route='')=> `vacants${route}`

export const getVacants = ({$store})=> execute({method:GET, route: baseUrl(`/`),$store})
export const getVacant = ({$store,params})=> execute({method:GET, route: baseUrl(`/${params.id}\`)`), $store })
export const deleteVacant = ({$store,params})=> execute({method:DELETE, route: baseUrl(`/${params.id}`),  $store })
export const updateVacant = ({$store,params,data})=> execute({method:PATCH, route: baseUrl(`/${params.id}`),data:data,$store})
export const postVacant = ({$store,data})=> execute({method:POST, route: baseUrl(`/`),data:data,$store})
export const sendMail = ({$store,data})=> execute({method:POST, route: baseUrl(`/sendMail`),data:data,$store})


