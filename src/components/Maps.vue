<template>
  <section id="maps-reparadores" class="ts-service-area">
    <div class="container">
      <div class="row text-center">
        <h3 class="section-sub-title">Socios reparadores</h3>
      </div>
      <div class="row" style="height: 400px">
        <div class="col-md-6" style="height: 100%">
          <GmapMap
            ref="mapRef"
            :center="center"
            :zoom="4"
            map-type-id="terrain"
            style="width: 100%; height: 100%"
          >
            <GmapMarker v-if="showMap"
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              @click="selectMarker(index)"
            />
          </GmapMap>
        </div>
        <div class="col-md-6">
          <div class="jumbotron" v-if="!select" style="background-color: #252525; color: white">
            <h3 style="color: white">Selecciona una de nuestras sucursales</h3>
          </div>
          <div class="jumbotron" v-else style="background-color: #252525; color: white">
<!--            <img :src="select.logo" alt="" width="200px"  class="img-responsive">-->
            <h2 style="color: white">{{select.name}}</h2>
            <lu>
              <li>Dirección:</li>{{select.textAddress}}
              <li>Teléfono:</li>{{select.phone}}
              <li>Descripción:</li>{{select.description}}
            </lu>
            <br>
            <p><a class="btn btn-primary btn-lg"  role="button" @click="to()">Ver más</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {getPromotions} from "../api/promotions";

  export default {
    name: "Maps",
    data(){
      return {
        center: {lat: 23.910592, lng: -101.8016994},
        markers: [
          {
            position: {lat: 23.910592, lng: -101.8016994}
          },
          {
            position: {lat: 24.910592, lng: -104.8016994}
          },
          {
            position: {lat: 19.910592, lng: -100.8016994}
          },
          {
            position: {lat: 16.910592, lng: -93.8016994}
          },
          {
            position: {lat: 28.910592, lng: -110.8016994}
          }
        ],
        select:null,
        promotions:[],
        showMap:false,
      }
    },
    methods:{
      selectMarker(index){
        this.select = this.promotions[index]
      },
      to(){
        this.$router.push({params: {name:this.select.name},name:'Promotions'})
      }
    },
    mounted() {
      this.$nextTick(()=>{
        getPromotions(this).then(promotions=>{
          console.log(promotions)
          this.promotions=promotions
          this.markers=promotions.map(p=>{
            return {position:{lat:Number(p.latitude),lng:Number(p.longitude)}}
          })
          this.showMap=true
          console.log("s",this.markers)
        }).catch(e=>{
          console.log(e)
          this.showMap=true
        })
      })
    }
  }
</script>

<style scoped>

</style>
