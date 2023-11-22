<template>
  <div class="container  ">
    <div class="row justify-content-center">
      <div class="section_tittle my-4">
        <h2 class="text-center">Inicia sesión</h2>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
          <div class="panel-body">
            <form @submit.prevent="send">
              <div class="form-group">
                <label for="username">Nombre de usuario</label>
                <input type="text" class="form-control " placeholder="Nombre de usuario"
                       v-model="form['Nombre de usuario']" id="username">
              </div>
              <div class="form-group">
                <label for="password">Contraseña</label>
                <input type="password" class="form-control " placeholder="Contraseña" v-model="form['Contraseña']"
                       id="password">
              </div>
              <div class="form-group text-center">
                <div class="row">
                  <div class="col-md-3 col-md-offset-3">
                    <button class="btn btn-primary "  type="button" @click="sendFB"  >Con facebook</button>
                  </div>
                  <div class="col-md-3">
                    <button class="btn btn-primary"
                            type="submit">Iniciar sesión
                    </button>
                  </div>
                </div>
              </div>
              <div class="form-row justify-content-center">
                <span class="error text-center">{{error}}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {minLength, required} from "vuelidate/lib/validators"
  import {getToken, postUser} from "../api/users";
  import {refreshToken, setTokenSentToServer} from "../firebaseUtils";
  import {returnError} from "../utils";

  export default {
    name: "Login",
    data() {
      return {
        fbR : {},
        isFacebook : false,
        croppie: {},
        mandando: false,
        mensaje: 'mandando...',
        form: {
          'Nombre de usuario': ``,
          'Contraseña': ``
        },
        error: ``
      }
    },
    validations: {
      form: {
        'Nombre de usuario': {
          required,
          minLength: minLength(4),
        },
        'Contraseña': {
          required, minLength: minLength(6)
        },
      }
    },
    methods: {
      // asd(){
      //   this.$v.form.$touch()
      //   if (this.$v.form.$pending || this.$v.form.$error) return this.error = returnError(this.$v.form)
      //
      //   postUser({data:{
      //     fullName:`Julio Lopez`,
      //     email: `julio@gmail.com`,
      //     password : `password`,
      //     role: `Administrador`,
      //     username: `julio`
      //   }})
      // },
      sendFB() {
        FB.getLoginStatus((res)=>{
          if(res.status === 'connected'){
            FB.login((response)=> {
              if(response.authResponse) {
                let id = response.authResponse.userID
                FB.api('/me',  (response) =>{
                  console.log(id, response)
                  getToken(id, `gatico`).then(resp => {
                    localStorage.setItem('token', resp.token)
                    localStorage.setItem('user', window.atob(resp.token.split('.')[1]))
                    setTokenSentToServer(false)
                    refreshToken()
                    this.$bus.$emit(`login`)
                    this.$router.push({name: `Landing`})
                  }).catch(error => {
                    if (error === `Wrong password.`) this.error = `Ocurrio un Error al Inicia sesión con facebook`
                  })
                })
              }
            }, {scope: 'public_profile,email', auth_type: 'rerequest'})
          }
          else{
            FB.login((response)=> {
              if(response.authResponse) {
                let id = response.authResponse.userID
                FB.api('/me',  (response)=>{

                  console.log(response)
                  postUser({data:{
                      fullName: response.name,
                      email: response.email ? response.email : `${response.id}@gmail.com`,
                      password: `gatico`,
                      role: `Invitado`,
                      username: id
                    }
                  }).then(()=>{
                    getToken(id,`gatico`).then(resp => {
                      localStorage.setItem('token', resp.token)
                      localStorage.setItem('user', window.atob(resp.token.split('.')[1]))
                      setTokenSentToServer(false)
                      refreshToken()
                      this.$bus.$emit(`login`)
                      this.$router.push({name: `Landing`})
                    }).catch(error => {
                      if (error === `Wrong password.`) this.error = `Ocurrio un Error al Inicia sesión con facebook`
                    })
                  }).catch(()=>{
                    getToken(id,`gatico`).then(resp => {
                      localStorage.setItem('token', resp.token)
                      localStorage.setItem('user', window.atob(resp.token.split('.')[1]))
                      this.$bus.$emit(`login`)
                      this.$router.push({name: `Landing`})
                    }).catch(error => {
                      if (error === `Wrong password.`) this.error = `Ocurrio un Error al Inicia sesión con facebook`
                    })
                  })
                })
              }
            }, {scope: 'public_profile,email', auth_type: 'rerequest'})
          }
        })
      },
      send() {
        this.$v.form.$touch()
        if (this.$v.form.$pending || this.$v.form.$error) return this.error = returnError(this.$v.form)
        getToken(this.form['Nombre de usuario'], this.form['Contraseña']).then(resp => {
          localStorage.setItem('token', resp.token)
          localStorage.setItem('user', window.atob(resp.token.split('.')[1]))
          setTokenSentToServer(false)
          refreshToken()
          this.$bus.$emit(`login`)
          this.$router.push({name: `Landing`})
        }).catch(error => {
          console.log(error)
          if (error === `Wrong password.`) this.error = `Contraseña incorrecta`
          else this.$router.push({name: `landing`})
        })
      }
    },
    created(){
      (function(d, s, id) {
        let js, fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s)
        js.id = id
        js.src = "https://connect.facebook.net/en_US/sdk.js"
        fjs.parentNode.insertBefore(js, fjs)
      }(document, 'script', 'facebook-jssdk'))
      window.fbAsyncInit = ()=> {
        FB.init({
          appId: '284067732762889',
          //284067732762889 fyf
          //1898035290257665 ls
          cookie: true,
          xfbml: true,
          version: 'v3.0'
        })
      }
    }
  }
</script>

<style scoped>

</style>


