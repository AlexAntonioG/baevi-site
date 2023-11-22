<template>
  <div>
    <div id="top-bar" class="top-bar">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-offset-8 col-md-offset-8 col-lg-4 col-sm-offset-6 col-xs-offset-12 col-md-4 col-sm-6 col-xs-12 top-social text-right">
            <ul>
              <li><a href="https://www.facebook.com/Grupo-Baevi-102840461511647/" target="_blank"><i class="fa fa-facebook"></i></a></li>
              <li><a href="https://twitter.com/GBaevi" target="_blank"><i class="fa fa-twitter" ></i></a></li>
              <li><a href="https://www.instagram.com/grupobaevi/?hl=es-la" target="_blank"><i class="fa fa-instagram"></i></a></li>
              <li><a href="https://www.youtube.com/channel/UCwD9CR8044BhiM2rjX_P0ag" target="_blank"><i class="fa fa-youtube-play"></i></a></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
    <header id="header" class="header-two">
      <div class="container-fluid mx-5">
        <div class="row " style="justify-content: center!important; display: flex;">
          <div class="navbar-header">
            <div class="logo">
              <router-link to="/" >
              <img src="../assets/baevi.png" alt="" height="50px">
              </router-link>
            </div>
          </div>
          <nav class="site-navigation navigation pull-right">
            <div class="site-nav-inner">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <div class="collapse navbar-collapse navbar-responsive-collapse">
                <ul class="nav navbar-nav">
                  <li class="dropdown">
                    <router-link to="/">Inicio</router-link>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Quienes Somos <i
                      class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-menu" role="menu">
                      <li>
                        <router-link to="/About#mision" href="#mision">Misión</router-link>
                      </li>
                      <li>
                        <router-link to="/About#vision" href="#vision">Visión</router-link>
                      </li>
                      <li>
                        <router-link to="/About#nosotros" href="#nosotros">Nosotros</router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Entretenimiento <i
                      class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-menu" role="menu">
                      <li>
                        <router-link to="/Media" >Nuestra selección de música</router-link>
                      </li>
                      <li>
                        <router-link to="/Media" >Nuestra selección de peliculas</router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Nuestros Productos <i
                      class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="http://herramientasbaevi.com" target="_blank">Recargas</a></li>
                      <li><a href="http://invi.herramientasbaevi.com" target="_blank">InVi</a></li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Nuestros socios<i
                      class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-menu" role="menu">
                     <li> <router-link to="/Bolsadetrabajo" >Bolsa de trabajo</router-link></li>
                      <div v-for="promotion in promotions">
                        <li @click="moveToRoute(promotion.name)"><a>{{promotion.name}}</a></li>
                      </div>
                    </ul>
                  </li>
                  <li>
                    <router-link to="/Contact">Contacto</router-link>
                  </li>
                  <li class="header-get-a-quote" style="display: inline-block">
                    <router-link class="btn btn-primary" to="/Login" v-if="!user">Iniciar sesión</router-link>
                    <a class="btn btn-primary" @click="logout" v-else>cerrar sesión</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  import {getPromotions} from "../api/promotions"
  export default {
    name: "Navbar",
    data() {
      return {
        pepito: `gatico`,
        user: window.localStorage.token,
        promotions:[],

      }
    },
    mounted() {
      getPromotions(this).then(promotions=>{
        this.promotions=promotions
      })
    },
    methods: {
      moveToRoute(params){
        this.$router.push({params: {name:params},name:'Promotions'})
      },
      logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.user = window.localStorage.token
        this.$bus.$emit(`logout`)
        this.$router.push({name: 'Landing'})
      }
    },
    created() {
      window.addEventListener('click', function(e){
        // if (document.getElementById('clickbox').contains(e.target)){
        //   // Clicked in box
        // } else{
        //   // Clicked outside the box
        // }
      });
      this.$nextTick(() => {
        this.$bus.$on(`login`, () => {
          this.user = window.localStorage.token
        })
      })
    }
  }
</script>

<style scoped>

</style>
