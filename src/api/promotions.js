import { execute, GET, POST, DELETE, PATCH} from "."

const baseUrl = (route='')=> `promotions${route}`

export const getPromotions = ({$store})=> execute({method:GET, route: baseUrl(`/`), $store })
export const getPromotionsCell = ({$store})=> execute({method:GET, route: baseUrl(`/fixers`), $store })


