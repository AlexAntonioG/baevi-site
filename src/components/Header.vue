<template>
  <div>
    <div id="box-slide" class="owl-carousel owl-theme page-slider">
      <div class="item asd1">
        <div class="container">
          <div class="box-slider-content">
            <div class="box-slider-text">
              <h2 class="box-slide-title">8 años de excelencia</h2>
              <h3 class="box-slide-sub-title">En la industria de las telecomunicaciones</h3>
              <p class="box-slide-description">Somos expertos en mantenerte conectado con tus seres queridos</p>
              <p>
                <router-link to="/About" class="slider btn btn-primary">Conócenos</router-link>              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="item asd2">
        <div class="container">
          <div class="box-slider-content">
            <div class="box-slider-text">
              <h2 class="box-slide-title">Cambiate a Unefon</h2>
              <h3 class="box-slide-sub-title">La elección es sencilla</h3>
              <p class="box-slide-description">Pregunta por nuestros excelentes productos</p>
              <p>
                <router-link to="/Contact" class="slider btn btn-primary">Contáctanos</router-link>
              </p>
            </div>
          </div>
        </div>
      </div><div class="item asd3">
        <div class="container">
          <div class="box-slider-content">
            <div class="box-slider-text">
              <h2 class="box-slide-title">Cambiate a Unefon</h2>
              <h3 class="box-slide-sub-title">La elección es sencilla</h3>
              <p class="box-slide-description">Pregunta por nuestros excelentes productos</p>
              <p>
                <router-link to="/Contact" class="slider btn btn-primary">Contáctanos</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="call-to-action no-padding">
      <div class="container">
        <div class="action-style-box">
          <div class="row">
            <div class="col-md-10">
              <div class="call-to-action-text">
                <h3 class="action-title">Atendemos las necesidaes del negocio</h3>
              </div>
            </div>
            <div class="col-md-2">
              <div class="call-to-action-btn">
                <router-link to="/Contact" class="btn btn-primary" >Solicita información</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Header",
    methods:{
      moveTo(where){

        this.$router.push(where)
      }
    },
    mounted() {
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
      })
    }
  }
</script>

<style scoped>

</style>
