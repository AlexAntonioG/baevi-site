import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from "./routes"
import Vuelidate from "vuelidate"
import eventBus from "./plugins/eventBus"
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueRouter)
Vue.use(eventBus)
Vue.use(Vuelidate)

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBXegGD8DXpkX-pnxWzQ00KUBstT_NocA0',
    libraries: 'places'
  },
})

const router = new VueRouter({routes, mode:'history',
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
