<template>
  <div class="container">

    <!-- Portfolio Item Heading -->
    <div style="text-align: center">
      <h2 class="my-4">{{promotion.name}}</h2>
      <img style="margin-top: 10px; margin-left: 45%;" class="img-responsive" :src=promotion.logo alt="" width="100" >

    <h3>
      Redes Sociales
      <ul class="unstyled">

      <li >
        <a v-if="promotion.facebook" title="Facebook" :href=promotion.facebook target="_blank">
          <span class="social-icon"><i class="fa fa-facebook"></i></span>
        </a>
        <a v-if="promotion.twitter" title="Twitter" :href=promotion.twitter target="_blank">
          <span class="social-icon"><i class="fa fa-twitter"></i></span>
        </a>
        <a v-if="promotion.instagram" title="Instagram" :href=promotion.instagram target="_blank">
          <span class="social-icon"><i class="fa fa-instagram"></i></span>
        </a>
        <a v-if="promotion.address" title="Direccion" :href=promotion.address target="_blank">
          <span class="social-icon"><i class="fa fa-map-marker"></i></span>
        </a>
        <a title="sitio" v-if="promotion.site" :href="promotion.site" target="_blank">
        <img src="../../plantilla/images/website.png" height="40" width="40">
        </a>
      </li>
    </ul>

    </h3>
  </div>
    <!-- Portfolio Item Row -->
    <div class="row">

      <div class="col-md-8">
        <a :href="promotion.site" target="_blank">
        <img class="img-responsive" :src=promotion.image1 alt="">
        </a>
      </div>

      <div class="col-md-4">
        <h3 class="my-3">Un poco de nosotros</h3>

        <p>{{promotion.description}}</p>

      </div>

    </div>
    <!-- /.row -->

    <!-- Related Projects Row -->
    <h3 class="my-4">Nuestra galeria</h3>

    <div class="row" style="margin-bottom: 100px">

      <div class="col-md-4 col-sm-6 col-lg-4 ">
        <a href="#">
          <img class="img-responsive" :src=promotion.image2 alt="">
        </a>
      </div>

      <div class="col-md-4 col-sm-6 col-lg-4">
        <a href="#">
          <img class="img-responsive" :src=promotion.image3 alt="">
        </a>
      </div>

      <div class="col-md-4 col-sm-6 col-lg-4">
        <a href="#">
          <img class="img-responsive" :src=promotion.image4 alt="">
        </a>
      </div>



    </div>
    <!-- /.row -->

  </div>
</template>

<script>
  import  {getPromotions} from  "../api/promotions"
export default {
  name:"Promotions",
    data(){
    return{
      promotion:{},
      promotions:{}
    }
  },
  mounted() {
    getPromotions(this).then(promotions=>{
      this.promotion=promotions.find(f=>{return f.name===this.$route.params.name})
      this.promotions=promotions
    }).catch(err=>{
      console.log(err)
    })

  },
  updated() {
    this.promotion=this.promotions.find(f=>{return f.name===this.$route.params.name})
  },
  watch:{
    $route (to, from){
      this.promotion=this.promotions.find(f=>{return f.name===this.$route.params.name})
    }
  }
}

</script>
<style></style>
