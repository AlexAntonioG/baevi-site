<template>
  <div>

    <div style="position: fixed; bottom: 0%; right: 6%; z-index: 50; width: 30%; " class="visible-lg-block">

<!--      <img v-on:click="eligePromo" src="../../plantilla/images/cellphone.png" width="209" height="270" style="margin-left:280px">-->
      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <div class="panel panel-default" style="margin-bottom: 0">
          <div class="panel-heading" role="tab" id="headingOne">
            <h4 class="panel-title">
              <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
                 aria-expanded="false" aria-controls="collapseOne">
                Activaciones o Dudas
              </a>
            </h4>
          </div>
        </div>
        <div id="collapseOne" class="panel-collapse collapse " role="tabpanel" aria-labelledby="headingOne"
             style=" background: white; border: 1px solid rgb(221, 221, 221)">
          <div class="panel-body" style="height: 55vh; overflow-y: auto; padding: 0">
            <div v-if="!token" style="height: 100%">
              <div class="justify-content-center" style="height: 100%">
                <div class="col" style="margin-top: auto; margin-bottom: auto">
                  <p>Debes de Iniciar sesión</p>
                  <router-link class="btn btn-primary" to="/Login">Iniciar sesión</router-link>
                </div>
              </div>
            </div>
            <ChatAdmin v-else-if="user && user.role ==`Administrador`"></ChatAdmin>
            <ChatInvited v-else></ChatInvited>
          </div>
        </div>
      </div>
    </div>
    <div style="position: fixed; bottom: 2%; right: 12%; z-index: 50; width: 76%; " class="hidden-lg">
      <div class="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
        <div class="panel panel-default" style="margin-bottom: 0">
          <div class="panel-heading" role="tab" id="headingOne2">
            <h4 class="panel-title">
              <a role="button" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne2"
                 aria-expanded="false" aria-controls="collapseOne">
                Activaciones
              </a>
            </h4>
          </div>
        </div>
        <div id="collapseOne2" class="panel-collapse collapse " role="tabpanel" aria-labelledby="headingOne2"
             style=" background: white; border: 1px solid rgb(221, 221, 221)">
          <div class="panel-body" style="height: 45vh; overflow-y: auto; padding: 0">
            <div v-if="!token" style="height: 100%">
              <div class="justify-content-center" style="height: 100%">
                <div class="col" style="margin-top: auto; margin-bottom: auto">
                  <p>Debes de Iniciar sesión</p>
                  <router-link class="btn btn-primary" to="/Login">Iniciar sesión</router-link>
                </div>
              </div>
            </div>
            <ChatAdmin v-else-if="user && user.role ==`Administrador`"></ChatAdmin>
            <ChatInvited v-else></ChatInvited>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ChatInvited from "./ChatInvited"
  import ChatAdmin from "./ChatAdmin"
  import  {getPromotionsCell} from  "../api/promotions"

  export default {
    name: "Chat",
    components: {
      ChatInvited,
      ChatAdmin
    },
    data() {
      return {
        isOpen: false,
        isConserve: false,
        token: window.localStorage.token,
        user: window.localStorage.user ? JSON.parse(window.localStorage.user) : null,
        promotions:[]
      }
    },
    methods: {
      eligePromo() {

        window.location.href = "http://baevi.com.mx/#maps-reparadores";
      }
    },
    created() {
      this.$nextTick(() => {
        this.$bus.$on(`login`, () => {
          this.token = window.localStorage.token
          this.user = JSON.parse(window.localStorage.user)
        })
        this.$bus.$on(`logout`, () => {
          this.token = window.localStorage.token
          this.user = null
        })
        $('#collapseOne').on('shown.bs.collapse', () => {
          this.isOpen = true
        })
        $('#collapseOne').on('hidden.bs.collapse', () => {
          this.isOpen = false
        })

      })
    },
    mounted() {
      getPromotionsCell(this).then(promotions=>{
        this.promotions=promotions
      }).catch(err=>{
        console.log(err)
      })

    }
  }
</script>

<style scoped>


</style>





