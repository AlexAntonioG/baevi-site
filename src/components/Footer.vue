<template>
  <footer id="footer" class="footer bg-overlay">
    <div class="footer-main">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-12 footer-widget footer-about">
            <h3 class="widget-title">Acerca de nosotros</h3>


            <img class="footer-logo" style="width: 150px" src="../assets/baevi.png" alt="">
            <p>Somos una empresa comptrometida con el crecimiento constante, y lideres en distribución.  Nuestro deseo
            es siempre brindarte la mejor atención para consolidarnos como tu mejor opción siempre que nos necesites.</p>
            <div class="footer-social">
              <ul>
                <li><a href="https://www.facebook.com/Grupo-Baevi-102840461511647/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/GBaevi" target="_blank"><i class="fa fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/grupobaevi/?hl=es-la" target="_blank"><i class="fa fa-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCwD9CR8044BhiM2rjX_P0ag" target="_blank"><i class="fa fa-youtube-play"></i></a></li>

              </ul>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 footer-widget">
            <h3 class="widget-title">Aviso de privacidad</h3>
            <router-link to="/AvisoDePrivacidad" class="slider btn btn-primary">Consultar</router-link>
          </div>
          <div class="col-md-4 col-sm-12 footer-widget">
            <h3 class="widget-title">Servicios que ofrecemos</h3>
            <ul class="list-arrow">
              <li>Atención a nuestros socios</li>
              <li>Dudas y aclaraciones</li>
              <li>Respuestas a pedidos</li>
              <li>Solicitud de eventos </li>
              <li>Pregunta como puedes anunciarte con nosotros </li>

            </ul>
          </div>
        </div>
      </div>
    </div>

  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>

</style>
