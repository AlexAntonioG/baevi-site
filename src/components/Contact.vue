<template>
  <div>
    <div id="banner-area" class="banner-area asd7">
      <div class="banner-text">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="banner-heading">
                <h1 class="banner-title">Contacto</h1>
                <ol class="breadcrumb">
                  <li>Inicio</li>
                  <li><a href="#">Contacto</a></li>
                </ol>
              </div>
            </div><!-- Col end -->
          </div><!-- Row end -->
        </div><!-- Container end -->
      </div><!-- Banner text end -->
    </div><!-- Banner area end -->


    <section id="main-container" class="main-container">
      <div class="container">

        <div class="row text-center">
          <h3 class="section-sub-title">Encuéntranos</h3>
        </div><!--/ Title row end -->

        <div class="row">
          <div class="col-md-4">
            <div class="ts-service-box-bg text-center">
                  <span class="ts-service-icon icon-round">
                     <i class="fa fa-facebook"></i>
                  </span>
              <div class="ts-service-box-content">
                <h4>Visítanos en facebook</h4>
                <a href="https://www.facebook.com/Grupo-Baevi-102840461511647/" target="_blank"><p> https://www.facebook.com/Baevi.Mexico/</p></a>
              </div>
            </div>
          </div><!-- Col 1 end -->

          <div class="col-md-4">
            <div class="ts-service-box-bg text-center">
                  <span class="ts-service-icon icon-round">
                     <i class="fa fa-envelope"></i>
                  </span>
              <div class="ts-service-box-content">
                <h4>Envìanos un email</h4>
                <p>atcgrupobaevi@hotmail.com</p>
              </div>
            </div>
          </div><!-- Col 2 end -->

          <div class="col-md-4">
            <div class="ts-service-box-bg text-center">
                  <span class="ts-service-icon icon-round">
                     <i class="fa fa-phone-square"></i>
                  </span>
              <div class="ts-service-box-content">
                <h4>Llámanos al </h4>
                <a href="https://api.whatsapp.com/send?phone=‎5215621591263">‎+52 15621591263</a>

              </div>
            </div>
          </div><!-- Col 3 end -->

        </div><!-- 1st row end -->

        <div class="gap-60"></div>


        <div class="row">

          <div class="col-md-12">

            <h3 class="column-title">Nos encantaría saber de ti</h3>

            <form id="contact-form"   role="form">
              <div class="error-container"></div>
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label>Nombre</label>
                    <input v-model="form.name" class="form-control form-control-name" name="name" id="name" placeholder="" type="text"
                           required>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label>Email</label>
                    <input  v-model='form.address' class="form-control form-control-email" name="email" id="email"
                           placeholder="" type="email" required>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label>Teléfono</label>
                    <input v-model="form.number" class="form-control form-control-subject" name="subject" id="subject"
                           placeholder="" required>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Mensaje</label>
                <textarea class="form-control form-control-message" name="message" id="text" placeholder="" rows="10"
                          required> {{form.text}}</textarea>
              </div>
              <div class="text-right"><br>
                <a class="btn btn-primary solid blank"  @click="enviarCorreo">Enviar correo</a>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {sendMail} from "../api/vacants"

  export default {
    name: "Contact",
    data() {
      return {
        form: {
          name: '',
          address: '',
          number: '',
          text: '',
          option:'contact',
          receiver:'atcgrupobaevi@gmail.com'
        }
      }
    },
    methods: {
      enviarCorreo() {
        this.form.text = $.trim($("#text").val());
        this.data = this.form
        sendMail(this).then(()=>{
          alert("Gracias, te contactaremos lo mas pronto posible")
        }).catch(err=> {
          console.log(err)
        })

      }
    }
  }
</script>

<style scoped>

</style>
