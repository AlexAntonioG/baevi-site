import Landing from "./components/Landing"
import Contact from "./components/Contact"
import About from "./components/About"
import Login from "./components/Login"
import Media from "./components/Media"
import Work from "./components/Work.vue"
import Promotions from "./components/Promotions.vue"
import AvisoDePrivacidad from "./components/AvisoDePrivacidad";
const routes = [
  {path: '/', name: 'Landing', component: Landing},
  {path: '/Contact', name: 'Contact', component: Contact},
  {path: '/About', name: 'About', component: About},
  {path: '/Login', name: 'Login', component: Login},
  {path: '/Media', name: 'Media', component: Media},
  {path: '/BolsaDeTrabajo', name: 'Work', component: Work},
  {path: '/Promotions/:name', name: 'Promotions', component: Promotions},
  {path: '/AvisoDePrivacidad', name: 'AvisoDePrivacidad', component: AvisoDePrivacidad},

]

function getRoutes() {
  let routesN=[]
  routes.forEach(l=>{
    if(l.children) {
      let r = l.children.map(k => {
        return `${l.path}/${k.path}`
      })
      r.forEach(a=>{
        routesN.push(a)
      })
    }
    else {
      routesN.push(l.path)
    }
  })
  console.log(routesN)
}


//getRoutes()

export default routes
