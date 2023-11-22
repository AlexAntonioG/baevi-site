<template>
  <div>
    <Header></Header>
    <Zero></Zero>
    <Numbers></Numbers>
    <Specialists></Specialists>
<!--    <Maps></Maps>-->
    <Projects></Projects>
    <Clients></Clients>
    <Works></Works>
  </div>
</template>

<script>
  import Specialists from "./Specialists"
  import Projects from "./Projects"
  import Works from "./Works"
  import Numbers from "./Numbers"
  import Clients from "./Clients"
  import Header from "./Header"
  import Zero from "./Zero"
  import Maps from "./Maps";

  export default {
    name: "Landing",
    components:{
      Header,
      Clients,
      Specialists,
      Projects,
      Works,
      Numbers,
      Zero,
      Maps
    },
    beforeCreate() {
      const dominio = window.location.href
    }
  }
</script>

<style scoped>

</style>
