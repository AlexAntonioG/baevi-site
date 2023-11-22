<template>
  <div>
    <div id="applyModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
      <div class="modal-dialog" role="document">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
          aria-hidden="true">&times;</span></button>
        <div class="modal-content" style="padding: 30px">
          <h2>Aplica para: {{vacant.title}}</h2>
          <div class="input-group marginTop">
            <span class="input-group-addon staticWidth "> Nombre</span>
            <input type="text" class="form-control input" v-model="form.name" aria-describedby="basic-addon1">
          </div>
          <div class="input-group marginTop ">
            <span class="input-group-addon staticWidth "> Correo</span>
            <input type="text" class="form-control input" v-model="form.addres" aria-describedby="basic-addon1">

          </div>
          <div class="input-group marginTop">
            <span class="input-group-addon staticWidth "> Teléfono </span>
            <input type="text" class="form-control input" v-model="form.number" aria-describedby="basic-addon1">
          </div>

          <h2>Cuentanos un poco de ti</h2>

          <div class="input-group ">
            <textarea id="text" rows="10" cols="100">{{form.text}}</textarea>
          </div>
          <div style="text-align: right;margin-top: 10px;">
            <div id="formFooter">
            </div>
            <button data-dismiss="modal" class="btn btn-default">Cancelar</button>
            <button class="btn btn-primary" v-on:click="sendMail()">Enviar Correo</button>
          </div>
        </div>
      </div>
    </div>
    <div id="confirmModal" class="modal fade" role="dialog">
      <div class="modal-dialog " role="document">
        <div class="modal-content" style="padding: 30px">
          <h4>¿Seguro que deseas eliminar esa vacante?</h4>
          <div style="text-align: right;margin-top: 10px;">
            <button data-dismiss="modal" class="btn btn-default">Cancelar</button>
            <button class="btn btn-primary" v-on:click="deleteVacant">Confirmar</button>
          </div>
        </div>
      </div>
    </div>

    <div id="updateModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
      <div class="modal-dialog " role="document">
        <div class="modal-content" style="padding: 30px">
          <h3 v-if="newVacantFlag"> Nueva vacante</h3>
          <h3 v-else> Actualiza vacante</h3>
          <div class="input-group marginTop">
            <span class="input-group-addon staticWidth "> Título</span>
            <input type="text" class="form-control input" v-model="vacant.title" aria-describedby="basic-addon1">
          </div>
          <div class="input-group marginTop ">
            <span class="input-group-addon staticWidth "> Descripción</span>
            <input type="text" class="form-control input" v-model="vacant.description" aria-describedby="basic-addon1">
          </div>
          <div class="input-group marginTop ">
            <span class="input-group-addon staticWidth "> Imagen</span>
            <input type="text" class="form-control input" v-model="vacant.url" aria-describedby="basic-addon1">
          </div>
          <div style="text-align: center;margin-top: 10px;">
            <button data-dismiss="modal" class="btn btn-default">Cancelar</button>
            <button v-if="newVacantFlag" class="btn btn-primary" v-on:click="newVacant()">Crear vacante</button>
            <button v-else class="btn btn-primary" v-on:click="modifyVacant">Modificar vacante</button>
          </div>


        </div>
      </div>
    </div>

    <div v-if="role==='Administrador'" style="padding: 30px;text-align: center;">
      <button v-on:click="launchNewModal()" class="btn-primary">Agregar vacante</button>

    </div>
    <div v-if="!vacants.length" style="padding: 30px;">
      No existen vacantes
    </div>
    <div class="row" style="padding: 30px;">
      <div v-for="vacant in vacants" style=" margin-top: 2px;">
        <div class="col-lg-6 col-sm-12">
          <div v-if="role==='Administrador'" class="pull-right">
            <div class="btn-group " role="group" aria-label="...">
              <div class="btn-group" role="group">
                <button v-on:click="launchUpdateModal(vacant)" type="button" class="btn btn-primary">
                  <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                </button>
              </div>
              <div class="btn-group" role="group">
                <button v-on:click="launchDeleteModal(vacant)" type="button" class="btn btn-primary">
                  <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                </button>
              </div>
            </div>
          </div>

          <div style="text-align: center; margin-top: 55px;" >
            <img :src="vacant.url" height="300">
          </div>
        </div>
        <div class="col-lg-6 col-sm-12 offer">

          <p class="title"><b>{{vacant.title}}</b></p>
          <div style=" height: 300px; overflow-y: auto;white-space: pre-wrap;">
            <p>{{vacant.description}}
            </p>
          </div>
          <div style="margin-top: 10px; margin-bottom: 50px;">
            <button class="btn btn-primary" v-on:click="launchApplyModal(vacant)">Aplicar</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
  import {deleteVacant, getVacants, getVacant, postVacant, updateVacant, sendMail} from '../api/vacants'
  import {getMovies, postMovie} from "../api/movies";

  export default {
    name: "Work",
    data() {
      return {
        vacants: [],
        vacant: {},
        role: "",
        form: {
          name: '',
          address: '',
          number: '',
          text: '',
          option:'vacant',
          receiver:'bolsatrabajobaevi@hotmail.com'
        },
        newVacantFlag: false,

      }
    },
    mounted() {
      if (window.localStorage.user)
        this.role = JSON.parse(window.localStorage.user).role

      getVacants(this).then(r => {
        console.log(r)
        this.vacants = r
      }).catch(err => {
        console.log(err)
      })

    },
    methods: {
      launchApplyModal(vacant) {
        this.vacant = vacant
        $("#applyModal").modal("show")
      },
      launchDeleteModal(vacant) {
        this.vacant = vacant
        $("#confirmModal").modal("show")
      },
      launchUpdateModal(vacant) {
        this.vacant = vacant
        this.newVacantFlag = false
        $("#updateModal").modal("show")
      },
      launchNewModal() {
        this.vacant = {}
        this.newVacantFlag = true
        $("#updateModal").modal("show")
      },
      sendMail() {
        this.form.text = $.trim($("#text").val());
        this.form.title = this.vacant.title
        this.data = this.form
        sendMail(this).then(() => {
          $('#formFooter').append('<div id="mailText"><h1>Correo enviado con éxito</h1></div>')
          setTimeout(() => {
            $('#mailText').replaceWith('')
          }, 10000)
        }).catch(err => {
        })

      },
      deleteVacant() {
        this.params = {id: this.vacant.id}
        deleteVacant(this).then(r => {
          return getVacants(this)
        }).then(vacants => {
          this.vacants = vacants
        }).catch(err => {
          console.log(err)
        })
        $('.modal').modal('hide')
      },
      newVacant() {
        this.data = this.vacant
        postVacant(this).then(r => {
          return getVacants(this)
        }).then(vacants => {
          $('.modal').modal('hide')
          this.vacants = vacants
        }).catch(err => {
          console.log(err)
        })
      },
      modifyVacant() {
        this.data = this.vacant
        this.params = {id: this.vacant.id}
        updateVacant(this).then(r => {
          return getVacants(this)
        }).then(vacants => {
          $('.modal').modal('hide')
          this.vacants = vacants
        }).catch(err => {
          console.log(err)
        })
      }
    },

  }
</script>
<style>
  .offer {
    height: 100%;

  }

  .staticWidth {
    width: 120px !important;
  }

  .marginTop {
    margin-top: 10px;
  }

  .input {
    width: 350px !important;
  }

  textarea {
    width: 100%;
    min-height: 35px;
    outline: none;
    resize: none;
    border: 1px solid #f0f0f0;
  }

  @media screen and (max-width: 1000px) {
    .offer {

    }
  }
</style>

