<template>
  <section id="ts-team" class="ts-team">
    <div class="container">
      <div class="row text-center">
        <h2 class="section-title">Aliados de calidad</h2>
        <h3 class="section-sub-title">Un equipo de profesionales</h3>
      </div>
      <div class="row">
        <div id="team-slide" class="owl-carousel owl-theme team-slide" data-ride="carousel" data-interval="2000" data-pause="false">
          <div class="item">
            <div class="ts-team-wrapper">
              <div class="team-img-wrapper">
                <img alt="" src="../../plantilla/images/team/team6.jpg" class="img-responsive">
              </div>
              <div class="ts-team-content">
                <h3 class="ts-name">Jesus Rizo</h3>
                <p class="ts-designation">Gerente campo Yucatán/Nuevo León</p>
                <p class="ts-description"></p>
                <div class="team-social-icons">
                  Se unió a nuestras filas en 2018.
                Entusiasta ejecutivo que adora viajar.
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="ts-team-wrapper">
              <div class="team-img-wrapper">
                <img alt="" src="../../plantilla/images/team/team5.jpg" class="img-responsive">
              </div>
              <div class="ts-team-content">
                <h3 class="ts-name">Gilberto Verónica</h3>
                <p class="ts-designation">Ejecutivo de ventas</p>
                <p class="ts-description">Siempre buscando por emprender nuevas estrategias comerciales</p>
                <div class="team-social-icons">

                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="ts-team-wrapper">
              <div class="team-img-wrapper">
                <img alt="" src="../../plantilla/images/team/team4.jpg" class="img-responsive">
              </div>
              <div class="ts-team-content">
                <h3 class="ts-name">Guille Ortiz</h3>
                <p class="ts-designation">Lider del departamento de modelaje</p>
                <p class="ts-description">Encantada con mantener las relaciones sociales de la empresa, siempre con una sonrisa, entusiasta y activa.</p>
                <div class="team-social-icons">

                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="ts-team-wrapper">
              <div class="team-img-wrapper">
                <img alt="" src="../../plantilla/images/team/team3.jpg" class="img-responsive">
              </div>
              <div class="ts-team-content">
                <h3 class="ts-name">Eduardo Verónica</h3>
                <p class="ts-designation">Ejecutivo de ventas Chiapas</p>
                <p class="ts-description">Siempre a la vanguardia por mantener el servicio al cliente</p>
                <div class="team-social-icons">

                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="ts-team-wrapper">
              <div class="team-img-wrapper">
                <img alt="" src="../../plantilla/images/team/team1.jpg" class="img-responsive">
              </div>
              <div class="ts-team-content">
                <h3 class="ts-name">Enrique Garcia</h3>
                <p class="ts-designation">Gerente de campo CDMX</p>
                <p class="ts-description">El orden es primordial, siempre preocupado por que se realicen las tareas manteniendo un equipo ordenado y feliz.</p>
                <div class="team-social-icons">

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Team",
    mounted() {
      this.$nextTick(() => {
        $("#team-slide").owlCarousel(  {
          items: 4,
          loop: true,
          margin: 10,
          autoplay: true,
          autoplayTimeout: 900,
          autoplayHoverPause: true,
          responsiveClass: true,
        })
      })
    },
    updated() {
      this.$nextTick(() => {
        $("#team-slide").owlCarousel({
          items: 4,
          loop: true,
          margin: 10,
          autoplay: true,
          autoplayTimeout: 2000,
          autoplayHoverPause: true,
          responsiveClass: true,
        })
      })
    }
  }
</script>

<style scoped>

</style>
