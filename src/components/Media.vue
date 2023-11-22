<template>
  <div>
    <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" style="margin-top: 100px">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
              aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Actualizar {{movie.title}}</h4>
          </div>
          <div class="modal-body">
            <div class="input-group marginTop">
              <span class="input-group-addon staticWidth" id="basic-addon1">Título</span>
              <input type="text" class="form-control" v-model="movie.title" aria-describedby="basic-addon1">
            </div>
            <div class="input-group marginTop">
              <span class="input-group-addon staticWidth" id="basic-addon2">Descripción</span>
              <input type="text" class="form-control" v-model="movie.description"
                     aria-describedby="basic-addon1">
            </div>
            <div class="input-group marginTop">
              <span class="input-group-addon staticWidth" id="basic-addon3">Imagen</span>
              <input type="text" class="form-control" v-model="movie.url" aria-describedby="basic-addon1">
            </div>
            <div class="input-group marginTop">
              <span class="input-group-addon staticWidth" id="basic-addon4">Redirección</span>
              <input type="text" class="form-control" v-model="movie.redirectTo"
                     aria-describedby="basic-addon1">
            </div>
            <div class="input-group marginTop">
              <span class="input-group-addon  staticWidth" id="basic-addon5">Calificación</span>
              <input type="text" class="form-control" v-model="movie.score" aria-describedby="basic-addon1">
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
            <button type="button" v-on:click="modifyMovie" class="btn btn-primary">Actualizar</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    <div class="modal fade" id="newMovieModal" tabindex="-1" role="dialog" style="margin-top: 100px">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
              aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Nueva Pelicula</h4>
          </div>
          <div class="modal-body">
            <div class="input-group marginTop">
              <span class="input-group-addon staticWidth">Título</span>
              <input type="text" class="form-control" v-model="movie.title" aria-describedby="basic-addon1">
            </div>
            <div class="input-group marginTop">
              <span class="input-group-addon staticWidth">Descripción</span>
              <input type="text" class="form-control" v-model="movie.description"
                     aria-describedby="basic-addon1">
            </div>
            <div class="input-group marginTop">
              <span class="input-group-addon staticWidth"> Imagen</span>
              <input type="text" class="form-control" v-model="movie.url" aria-describedby="basic-addon1">
            </div>
            <div class="input-group marginTop">
              <span class="input-group-addon staticWidth">Redirección</span>
              <input type="text" class="form-control" v-model="movie.redirectTo"
                     aria-describedby="basic-addon1">
            </div>
            <div class="input-group marginTop">
              <span class="input-group-addon  staticWidth">Calificación</span>
              <input type="text" class="form-control" v-model="movie.score" aria-describedby="basic-addon1">
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
            <button type="button" v-on:click="newMovie" class="btn btn-primary">Enviar</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" style="margin-top: 100px">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
              aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Eliminar</h4>
          </div>
          <div class="modal-body">
            <h1>¿Seguro que deseas eliminar esa pelicula?</h1>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
            <button type="button" v-on:click="deleteMovie" class="btn btn-primary">Eliminar</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    <div class="row" id="music-player ">
      <div class="col-lg-10 col-lg-offset-1 col-sm-12 col-sm-10 col-sm-offset-1">
        <div class="row" style="margin-left: 10px;">
          <h1>Recomendaciones Baevi</h1>
          <div id="player" class="col-lg-10 col-lg-offset-1 ">
            <div v-if="role==='Administrador'">
              <div class="input-group">
                <input type="text" v-model="playList" style="width: 943px;" class="form-control">
                <button v-on:click="actualizarUrl()" class="btn-primary">Actualizar playlist</button>
              </div>

            </div>
            <iframe width="100%" height="550"
                    :src='playList'  frameborder="0" allowfullscreen></iframe>
          </div>

        </div>
        <div class="row" id="movies">

          <div class="col-lg-12  col-sm-12">
            <h1>Las peliculas del momento</h1>
            <h1 v-if="!movies.length">No hay peliculas para mostrar</h1>
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->

              <!-- Wrapper for slides -->
              <div class="carousel-inner" role="listbox">
                <div v-for="(movie,i) in movies" :class="{ 'active': i === 0,'item':true } ">
                  <div class="row">
                    <div class="col-sm-12 col-lg-6 col-lg-offset-3">
                      <div v-if="role==='Administrador'" >

                        <div class="btn-group btn-group-justified" role="group" aria-label="...">
                          <div class="btn-group" role="group">
                            <button  type="button" class="btn btn-primary" v-on:click="launchUpdateModal(movie)">
                              <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                            </button>
                          </div>
                          <div class="btn-group" role="group">
                            <button v-on:click="launchNewMovieModal()" type="button" class="btn btn-primary">
                              <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                            </button>
                          </div>
                          <div class="btn-group" role="group">
                            <button v-on:click="launchDeleteModal(movie)" type="button" class="btn btn-primary">
                              <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="thumbnail" style="border: none">
                        <div v-if="movie.flag===2" style="margin-left: 200px;">
                          <img width="250px" height="360px" style="width: 250px; height: 360px" v-bind:src="movie.url">
                        </div>
                        <div v-else style="margin-left: 30px;">
                          <iframe width="600" height="355"
                                  v-bind:src="movie.url">
                          </iframe>
                        </div>
                        <div class="caption">
                          <h3>{{movie.title}}</h3>
                          <h5><i>Nuestra calificación: {{movie.score}}</i></h5>
                          <p style="height: 100px; overflow: auto;">{{movie.description}}</p>
                          <a v-bind:href="movie.redirectTo" target="_blank" class="btn btn-primary" role="button">Ir
                            al
                            sitio</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Controls -->
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
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import {updatePlaylist, getPlaylist} from "../api/media"
  import {getMovies, getMovie, updateMovies, deleteMovie, postMovie} from "../api/movies"

  export default {
    name: "About",
    data() {
      return {
        playList: "",
        movies: [],
        movie: {},
        role: ""
      }
    },
    mounted() {
      if (window.localStorage.user)
        this.role = JSON.parse(window.localStorage.user).role
      getPlaylist().then(url => {
        const params = new URLSearchParams(url)
        this.playList = `https://www.youtube.com/embed?listType=playlist&amp;list=${params.get('list')}`
      }).catch(err => {
        console.log(err)
      }),
        getMovies(this).then(movies => {

          this.updateMoviesList(movies)
        }).catch(err => {
          console.log(err)
        })
    },
    methods: {
      updateMoviesList(movies) {
        this.$emit('quitarBarra')
        movies.forEach(m => {
          m.flag = 2
          if (m.url.includes("youtube")) {
            let regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
            let match = m.url.match(regExp)
            if (match && match[2].length === 11) {
              m.flag = 1
              m.url = `https://www.youtube.com/embed/${match[2]}`

            }
          }
        })
        this.movies = movies
      },
      actualizarUrl() {
        let url = this.playList
        this.data = {url}
        updatePlaylist(this).then(() => {
          return getPlaylist()
        }).then(url => {
          this.playList = url
        }).catch(err => {
          console.log(err)
        })
      },
      modifyMovie() {
        this.data = this.movie
        this.params = {id: this.movie.id}
        updateMovies(this).then(() => {
          return getMovies(this)
        }).then(movies => {
          $('.modal').modal('hide')
          console.log("2", movies)
          this.updateMoviesList(movies)
        }).catch(err => {
          console.log(err)
        })
      },
      deleteMovie() {
        this.params = {id: this.movie.id}
        deleteMovie(this).then(() => {
          return getMovies(this)
        }).then(movies => {
          $('.modal').modal('hide')
          this.updateMoviesList(movies)
        }).catch(err => {
          console.log(err)
        })
      },
      newMovie() {
        this.data = this.movie
        postMovie(this).then(r => {
          return getMovies(this)
        }).then(movies => {
          $('.modal').modal('hide')
          this.updateMoviesList(movies)
        }).catch(err => {
          console.log(err)
        })
      },
      launchUpdateModal(movie) {
        this.movie = movie
        $('#updateModal').modal('show')
      }, launchNewMovieModal(movie) {
        this.movie = {}
        $('#newMovieModal').modal('show')
      }, launchDeleteModal(movie) {
        this.movie = movie
        $('#deleteModal').modal('show')
      },

    },

  }
</script>
<style>
  .marginTop {
    margin-top: 10px;
  }

  .staticWidth {
    width: 100px !important;
  }

  .control {
    background-color: #ffb600;
    padding: 5px 2px;
    width: 50px;
    height: 100px;
    margin-top: 20%;
  }

  .lc {

  }

  .rc {
    margin-left: 90%;
  }

  .myContainer {
    margin: 10px;
    width: 115px;
    height: 115px;
    line-height: 115px;
    text-align: center;
    border: 1px solid red;
  }

  .resize_fit_center {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
  }
</style>
