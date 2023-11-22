<template>
  <div>
    <div id="updateModal" style="margin-top: 100px;" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
      <div class="modal-dialog " role="document">
        <div class="modal-content" style="padding: 30px">
          <h3 > Agrega elemento a {{media.type}}</h3>
          <div class="input-group marginTop">
            <span class="input-group-addon staticWidth "> Título</span>
            <input type="text" class="form-control input" v-model="media.url" aria-describedby="basic-addon1">
        </div>
          <div style="text-align: center;margin-top: 10px;">
            <button data-dismiss="modal" class="btn btn-default">Cancelar</button>
            <button  class="btn btn-primary" v-on:click="addMedia">Crear elemento</button>
          </div>
      </div>
    </div>
    </div>
    <div id="confirmModal" class="modal fade" style="margin-top: 100px;" role="dialog">
      <div class="modal-dialog " role="document">
        <div class="modal-content" style="padding: 30px">
          <h4>¿Seguro que deseas eliminar ese elemento?</h4>
          <div style="text-align: right;margin-top: 10px;">
            <button data-dismiss="modal" class="btn btn-default">Cancelar</button>
            <button class="btn btn-primary" v-on:click="eraseMedia">Confirmar</button>
          </div>
        </div>
      </div>
    </div>
    <div id="banner-area" class="banner-area asdAbout">
      <div class="banner-text">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="banner-heading">
                <h1 class="banner-title">Nosotros</h1>
                <ol class="breadcrumb">
                  <li><a href="#mision">Misión</a></li>
                  <li><a href="#vision">Visión</a></li>
                  <li><a href="#nosotros">Nosotros</a></li>
                </ol>
              </div>
            </div><!-- Col end -->
          </div><!-- Row end -->
        </div><!-- Container end -->
      </div><!-- Banner text end -->
    </div><!-- Banner area end -->


    <section id="mision" class="main-container">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <h3 class="column-title">MISIÓN</h3>
            <p>GRUPO BAEVI es una empresa líder en distribución y comunicación a nivel nacional, con
              retroalimentación para brindar siempre lo mejor al cliente final.
              Consolidar a GRUPO BAEVI como empresa de clase mundial a través de:</p>
            <ul>
              <li>Personal capacitado</li>
              <li>Trabajo en equipo</li>
              <li>Decisiones y soluciones adecuadas al problema</li>
              <li>Tecnología de punta para prestar el mejor servicio</li>
            </ul>
          </div>
          <div class="col-md-6 col-sm-12">
            <div id="page-slider" class="owl-carousel owl-theme page-slider small-bg">
              <div class="item asd5">
                <div class="container">
                  <div class="box-slider-content">
                    <div class="box-slider-text">
                      <h2 class="box-slide-title">MISIÓN</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="vision" class="main-container">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div id="page-slider2" class="owl-carousel owl-theme page-slider small-bg">
              <div class="item asd6">
                <div class="container">
                  <div class="box-slider-content">
                    <div class="box-slider-text">
                      <h2 class="box-slide-title">VISIÓN</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <h3 class="column-title">VISIÓN</h3>
            <p>En GRUPO BAEVI, S.A. DE C.V. Estamos comprometidos a ser la mejor opción dentro del mercado.</p>
            <p>El compromiso con nuestro equipo de trabajo es hacerlos sentir en familia, con un ingreso fuerte,
              seguro para generar un desarrollo integral.</p>
            <p>Que la comunidad que nos rodea sea fuerte, y responsable social para generar mejores empleados y
              seguros de ellos mismos.</p>
            <p>GRUPO BAEVI es una empresa socialmente responsable, que se preocupa para brindar el mejor
              servicio a sus clientes y la comunidad en general.</p>
            <p>GRUPO BAEVI maneja servicios, productos y asesoramientos de alta calidad</p>
          </div>
        </div>
      </div>
    </section>
    <section id="nosotros" class="main-container">
      <div class="container">
        <h2 class="column-title">Nuestro contenido</h2>
        <h3 class="column-title" style="margin-left: 5px;">Hecho por nosotros</h3>

        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <!-- Wrapper for slides -->
          <div class="carousel-inner" role="listbox">
            <div v-if="!selfMade.length" style="text-align: center"><h4>No hay elementos para mostrar</h4>
              <div class="btn-group" role="group" v-if="role==='Administrador'">
                <button v-on:click="launchNewModal('Multimedia propia')" type="button" class="btn btn-primary">
                  Agregar
                </button>
              </div>
              <br>
            </div>
            <div v-for="(sm,i) in selfMade" :class="{ 'active': i === 0,'item':true } ">
              <div class="btn-group btn-group-justified" role="group" aria-label="..." v-if="role==='Administrador'">
                <div class="btn-group" role="group">
                  <button v-on:click="launchNewModal('Multimedia propia')" type="button" class="btn btn-primary">
                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                  </button>
                </div>
                <div class="btn-group" role="group">
                  <button v-on:click="launchDeleteModal(sm)" type="button" class="btn btn-primary">
                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-lg-10  col-lg-offset-1">
                  <div class="myContainer" style="border: none">
                    <div v-if="sm.flag===2">
                      <img class="resize_fit_center" v-bind:src="sm.url">
                    </div>
                    <div v-else style="margin-left: 15px;">
                      <iframe width="520" height="315"
                              v-bind:src="sm.url">
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Controls -->
          <div v-if="selfMade.length">
          <a class=" carousel-control control lc" href="#carousel-example-generic" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control control rc" href="#carousel-example-generic" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
          </div>
        </div>
        <h3 class="column-title" style="margin-left: 5px;">útil para nuestros socios</h3>
        <div id="carousel-example-generic2" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <!-- Wrapper for slides -->
          <div class="carousel-inner" role="listbox">
            <div v-if="!util.length" style="text-align: center"><h4>No hay elementos para mostrar</h4>
              <div class="btn-group" role="group" v-if="role==='Administrador'">
                <button v-on:click="launchNewModal('Oferta comercial')" type="button" class="btn btn-primary">
                  Agregar
                </button>
              </div>
              <br>
            </div>
            <div v-for="(sm,i) in util" :class="{ 'active': i === 0,'item':true } ">
              <div class="btn-group btn-group-justified" role="group" aria-label="..." v-if="role==='Administrador'">
                <div class="btn-group" role="group">
                  <button v-on:click="launchNewModal('Oferta comercial')" type="button" class="btn btn-primary">
                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                  </button>
                </div>
                <div class="btn-group" role="group">
                  <button v-on:click="launchDeleteModal(sm)" type="button" class="btn btn-primary">
                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                  </button>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 col-lg-10  col-lg-offset-1">
                  <div class="myContainer" style="border: none">
                    <div v-if="sm.flag===2">
                      <img class="resize_fit_center" v-bind:src="sm.url">
                    </div>
                    <div v-else style="margin-left: 15px;">
                      <iframe width="520" height="315"
                              v-bind:src="sm.url">
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Controls -->
          <div v-if="util.length">
          <a class=" carousel-control control lc" href="#carousel-example-generic2" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control control rc" href="#carousel-example-generic2" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
          </div>
        </div>
        <h3 class="column-title" style="margin-left: 5px;">Cursos</h3>
        <div id="carousel-example-generic3" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <!-- Wrapper for slides -->
          <div class="carousel-inner" role="listbox">
            <div v-if="!courses.length" style="text-align: center" ><h4>No hay elementos para mostrar</h4>
              <div class="btn-group" role="group" v-if="role==='Administrador'">
                <button v-on:click="launchNewModal('Cursos')" type="button" class="btn btn-primary">
                  Agregar
                </button>
              </div>
              <br>
            </div>
            <div v-for="(sm,i) in courses" :class="{ 'active': i === 0,'item':true } ">
              <div class="btn-group btn-group-justified" role="group" aria-label="..." v-if="role==='Administrador'" >
                <div class="btn-group" role="group">
                  <button v-on:click="launchNewModal('Cursos')" type="button" class="btn btn-primary">
                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                  </button>
                </div>
                <div class="btn-group" role="group" v-if="role==='Administrador'" >
                  <button v-on:click="launchDeleteModal(sm)" type="button" class="btn btn-primary" >
                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-lg-10  col-lg-offset-1">
                  <div class="myContainer" style="border: none">
                    <div v-if="sm.flag===2">
                      <img class="resize_fit_center" v-bind:src="sm.url">
                    </div>
                    <div v-else style="margin-left: 15px;">
                      <iframe width="520" height="315"
                              v-bind:src="sm.url">
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Controls -->
          <div v-if="courses.length">
          <a class=" carousel-control control lc" href="#carousel-example-generic3" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control control rc" href="#carousel-example-generic3" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
          </div>
        </div>
      </div>

    </section>
    <Numbers></Numbers>
    <Team></Team>
  </div>
</template>

<script>
  import Numbers from "./Numbers"
  import Team from "./Team"
  import {getMedia, postMedia, deleteMedia} from "../api/media"
  import {getVacants, postVacant} from "../api/vacants";

  export default {
    name: "About",
    components: {
      Numbers,
      Team
    },
    data() {
      return {
        selfMade: [],
        util: [],
        courses: [],
        media: {},
        role: "",

      }
    },
    mounted() {
      if (window.localStorage.user)
        this.role = JSON.parse(window.localStorage.user).role

      getMedia().then(medias => {
        this.updateMedias(medias)
      }).catch(err => {
        console.log(err)
      })
      this.$nextTick(() => {

        $(".page-slider").owlCarousel({
          loop: true,
          animateOut: 'fadeOut',
          autoplay: true,
          autoplayHoverPause: true,
          nav: true,
          margin: 0,
          dots: false,
          mouseDrag: true,
          touchDrag: true,
          slideSpeed: 500,
          navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          items: 1,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            }
          }

        })
        $(".page-slider2").owlCarousel({

          loop: true,
          animateOut: 'fadeOut',
          autoplay: true,
          autoplayHoverPause: true,
          nav: true,
          margin: 0,
          dots: false,
          mouseDrag: true,
          touchDrag: true,
          slideSpeed: 500,
          navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          items: 1,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            }
          }

        })
        $(".page-slider3").owlCarousel({

          loop: true,
          animateOut: 'fadeOut',
          autoplay: true,
          autoplayHoverPause: true,
          nav: true,
          margin: 0,
          dots: false,
          mouseDrag: true,
          touchDrag: true,
          slideSpeed: 500,
          navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          items: 1,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            }
          }

        })
      })
    },

    methods: {
      updateMedias(medias) {
        medias.forEach(m => {
          m.flag = 2
          if (m.url.includes("youtube")) {
            let regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
            let match = m.url.match(regExp)
            if (match && match[2].length === 11) {
              m.flag = 1
              m.url = `https://www.youtube.com/embed/${match[2]}`
            }
          }
          if (m.type === "Oferta comercial") this.util.push(m)
          if (m.type === "Cursos") this.courses.push(m)
          if (m.type === "Multimedia propia") this.selfMade.push(m)

        })

      },
      eraseMedia() {
        this.params = {id: this.media.id}
         deleteMedia(this).then(() => {
           this.selfMade=[]
           this.courses=[]
           this.util=[]
           $('.modal').modal('hide')
          return getMedia()
        }).then(medias => {
          this.updateMedias(medias)
        }).catch(err => {
          console.log(err)
        })
      },
      addMedia(){
        this.data = this.media
        postMedia(this).then(r => {
          return getMedia(this)
        }).then(medias => {
          this.selfMade=[]
          this.courses=[]
          this.util=[]
          $('.modal').modal('hide')
          this.updateMedias(medias)
        }).catch(err => {
          console.log(err)
        })
      },
      launchDeleteModal(media) {
        this.media = media
        $("#confirmModal").modal("show")
      },
      launchNewModal(list) {
        this.media = {}
        this.media.type=list
        $("#updateModal").modal("show")
      }
    },
    updated() {
      this.$nextTick(()=>{

      })
    }
  }
</script>

<style scoped>
  .control {
    background-color: #ffb600;
    padding: 5px 2px;
    width: 50px;
    height: 100px;
    margin-top: 10%;
  }

  .lc {

  }

  .rc {
    margin-left: 93%;
    position: absolute !important;
  }

  .myContainer {
    margin: 5px;
    width: 100%;
    height: 320px;
    text-align: center;


  }

  .resize_fit_center {
    max-width: 85%;
    max-height: 85%;
    vertical-align: middle;
  }
  @media screen and (max-width: 600px) {
    .control{
      margin-top: 15%;
    }
  }
</style>
