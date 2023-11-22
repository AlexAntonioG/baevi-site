<template>
  <section id="project-area" class="project-area solid-bg">
    <div class="container">
      <div class="row text-center">
        <h2 class="section-title">Estamos en todas partes</h2>
        <h3 class="section-sub-title">Checa nuestros eventos en distintas partes del país</h3>
      </div>
      <div class="row">

        <div id="isotope" class="">
          <div class="col-md-4 col-sm-6 col-xs-12 commercial ">
            <div class="">
              <a class="gallery-popup" href="../../plantilla/images/projects/project1.jpg">
                <img class="img-responsive" src="../../plantilla/images/projects/project1.jpg" alt="">
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                  </h3>

                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 education ">
            <div class="">
              <a class="gallery-popup" href="../../plantilla/images/projects/project2.jpg">
                <img class="img-responsive" src="../../plantilla/images/projects/project2.jpg" alt="">
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                  </h3>

                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 government ">
            <div class="">
              <a class="gallery-popup" href="../../plantilla/images/projects/project3.jpg">
                <img class="img-responsive" src="../../plantilla/images/projects/project3.jpg" alt="">
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                  </h3>

                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 infrastructure ">
            <div class="">
              <a class="gallery-popup" href="../../plantilla/images/projects/project4.jpg">
                <img class="img-responsive" src="../../plantilla/images/projects/project4.jpg" alt="">
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                  </h3>

                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 residential ">
            <div class="">
              <a class="gallery-popup" href="../../plantilla/images/projects/project5.jpg">
                <img class="img-responsive" src="../../plantilla/images/projects/project5.jpg" alt="">
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                  </h3>

                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 healthcare ">
            <div class="">
              <a class="gallery-popup" href="../../plantilla/images/projects/project6.jpg">
                <img class="img-responsive" src="../../plantilla/images/projects/project6.jpg" alt="">
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                  </h3>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="general-btn text-center">

        </div>
      </div>
    </div>
  </section>
</template>

<script>
  $(".isotope").isotope({filter: '*'})
  export default {
    name: "Projects",
    mounted() {
      this.$nextTick(() => {
        $(".isotope").isotope({filter: '*'})
      })
    },
    updated() {
      this.$nextTick(() => {
        $(".isotope").isotope({filter: '*'})
      })
    },
    created() {
      this.$nextTick(() => {
        $(".isotope").isotope({filter: '*'})
      })
    },beforeMount() {
      $(".isotope").isotope({filter: '*'})

    },
    beforeUpdate() {        $(".isotope").isotope({filter: '*'})

    },

  }
</script>

<style scoped>

</style>
