<template>
  <div>
    <section class="content">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3 class="column-title">Testimonios</h3>
            <div id="testimonial-slide" class="owl-carousel owl-theme testimonial-slide">
              <div class="item">
                <div class="quote-item">
									<span class="quote-text">
                    En varias ocasiones he asistido a los eventos de Grupo Baevi y cuento con grandes experiencias, me siento muy cómoda con el grupo de trabajo, destaco su profesionalidad y el buen trabajo que brindan hacia los clientes.
									</span>
                  <div class="quote-item-footer">
                    <img class="testimonial-thumb" src="../../plantilla/images/clients/testimonial1.png"
                         alt="testimonial">
                    <div class="quote-item-info">
                      <h3 class="quote-author">Katy Garza</h3>
                      <span class="quote-subtext">Edecán</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="quote-item">
									<span class="quote-text">
										Grupo Baevi es para mí es una empresa con unas características que la hacen única, brillan por su gran profesionalidad y creatividad. Siempre hemos recibido un gran trato y cercanía al laborar con su patrocinio.
									</span>
                  <div class="quote-item-footer">
                    <img class="testimonial-thumb" src="../../plantilla/images/clients/testimonial2.png"
                         alt="testimonial">
                    <div class="quote-item-info">
                      <h3 class="quote-author">-Daniel Sixfactor</h3>
                      <span class="quote-subtext">CEO</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="quote-item">
									<span class="quote-text">

Grupo Baevi ha apostado en mi y en mi carrera boxística, siempre cercanos, con un grupo de trabajo unido y preocupado por ayudarme a estar cada vez mejor preparado para pelear juntos por el cinturón y con el fuerte compromiso de ganar siempre en el ring.
									</span>
                  <div class="quote-item-footer">
                    <img class="testimonial-thumb" src="../../plantilla/images/clients/testimonial3.png"
                         alt="testimonial">
                    <div class="quote-item-info">
                      <h3 class="quote-author">Darwin Berron</h3>
                      <span class="quote-subtext">Boxeador profesional</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h3 class="column-title">Patrocinando calidad</h3>
            <div class="row isotope">
              <div class="col-sm-4">
                <img class="img-responsive" src="../../plantilla/images/clients/client1.png" alt=""/>
              </div>
              <div class="col-sm-4">
                <a href="#"><img class="img-responsive" src="../../plantilla/images/clients/client2.png" alt=""/></a>
              </div>
              <div class="col-sm-4">
                <a href="#"><img class="img-responsive" src="../../plantilla/images/clients/client3.png" alt=""/></a>
              </div>
              <div class="col-sm-4">
                <img class="img-responsive" src="../../plantilla/images/clients/client4.png" alt=""/>
              </div>
              <div class="col-sm-4">
                <img class="img-responsive" src="../../plantilla/images/clients/client5.png" alt=""/>
              </div>
              <div class="col-sm-4">
                <img class="img-responsive" src="../../plantilla/images/clients/client6.png" alt=""/>
              </div>
              <div class="col-sm-4">
                <img class="img-responsive" src="../../plantilla/images/clients/client7.png" alt=""/>
              </div>
              <div class="col-sm-4">
                <img class="img-responsive" src="../../plantilla/images/clients/client8.png" alt=""/>
              </div>
              <div class="col-sm-4">
                <img class="img-responsive" src="../../plantilla/images/clients/client9.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="subscribe no-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-12 col-xs-12">
            <div class="subscribe-call-to-acton">
              <h3>¿Podemos ayudarte?</h3>
              <h4>‎+52 15621591263</h4>
            </div>
          </div>
          <div class="col-md-8 col-sm-12 col-xs-12">
            <div class="ts-newsletter">
              <div class="newsletter-introtext">

                <h4 style="margin-top: 10px">Estamos para atender tus necesidades y sugerencias</h4>
                <p></p>
              </div>
              <div class="newsletter-form">
                <form action="#" method="post">
                  <div class="form-group">

                  </div>
                </form>
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
    name: "Clients"
    ,
    mounted() {
      this.$nextTick(() => {
        $("#testimonial-slide").owlCarousel({
          items: 1,
          loop: true,
          margin: 10,
          autoplay: true,
          autoplayTimeout: 4000,
          autoplayHoverPause: true,
          responsiveClass: true,
          slideSpeed: 9000,
          paginationSpeed: 9000,


        })

      })
    }
    , updated() {
      this.$nextTick(() => {
        $("#testimonial-slide").owlCarousel()
      })
    }
  }
</script>

<style scoped>

</style>
