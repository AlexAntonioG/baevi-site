<template>
  <div id="app">
    <div class="body-inner">
      <div style="position: fixed; z-index: 200; right: 5%; top: 20rem">
        <p style="width: 0px;" id="message" :title="`${titleMesagge}`" data-container="body" data-toggle="popover"
           data-placement="left" :data-content="`${dataMesage}`">
        </p>
      </div>
      <Navbar></Navbar>
      <router-view></router-view>
      <Footer></Footer>
      <Chat></Chat>
    </div>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar"
  import Header from "./components/Header"
  import Footer from "./components/Footer"
  import Chat from "./components/Chat"

  export default {
    name: 'app',
    data() {
      return {
        titleMesagge: `asd`,
        dataMesage: `asd`,
        popoverShow: false,
        user: window.localStorage.user ? JSON.parse(window.localStorage.user) : null,
      }
    },
    methods: {
      asd() {

      }
    },
    components: {
      Navbar,
      Header,
      Footer,
      Chat
    },
    mounted() {
      this.$nextTick(() => {

        $(function () {
          $('[data-toggle="popover"]').popover()
        })
        // $('#myPopover').on('hide.bs.popover', function () {
        //   this.popoverShow = false
        // })
        // $('#message').on('show.bs.popover', function () {
        //
        // })

        const firebaseConfig = {
          apiKey: "AIzaSyA-rSQRMMMz92oYjwNETTy67KDV-tdQf6Y",
          authDomain: "grupo-baevi.firebaseapp.com",
          databaseURL: "https://grupo-baevi.firebaseio.com",
          projectId: "grupo-baevi",
          storageBucket: "grupo-baevi.appspot.com",
          messagingSenderId: "883542684114",
          appId: "1:883542684114:web:c681b726f311394d0c580b",
          measurementId: "G-NSYMM0D668"
        }

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig)

        const firebaseMessaging = firebase.messaging.isSupported() ? firebase.messaging() : null
        //const firebaseMessaging = firebase.messaging()
        if(firebaseMessaging) {
          firebaseMessaging.usePublicVapidKey("BPVytSnCDYXwMs9CPIl3whtFXFy9-zFhyA_yBvaNdem5CHg-xUO0pg0LPjvac2ENBn1HuHH-nsQ1iCwe9FKSdAs")
          firebaseMessaging.onMessage((payload) => {
            console.log(JSON.parse(payload.data.data), 21312313213132132)
            this.$bus.$emit(`${payload.data.event}`, JSON.parse(payload.data.data))
          })
        }
        this.$bus.$on(`newMessage`, data => {
          console.log(12313)
          if (this.user && this.user.id != data.sender) {
            this.titleMesagge = `${data.senderUsername} dice:`
            this.dataMesage = data.text
            $('#message').popover('destroy')
            setTimeout(() => {
              $('#message').popover('show')
              this.popoverShow = true
              setTimeout(() => {
                this.popoverShow = false
                $('#message').popover('destroy')
              }, 2000)
            }, 100)
          }
        })
      })
    }
  }
</script>

<style>

  .justify-content-center {
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: center !important;
  }

  .flex-row-reverse {
    display: flex;
    justify-content: flex-start !important;
    flex-direction: row-reverse !important;
  }

  .flex-row {
    display: flex;
    justify-content: flex-start !important;

  }

  .asd1 {
      background-image: url(../plantilla/images/slider-main/bg5.jpg)
  }
  .asdAbout {
    background-image: url(../plantilla/images/slider-main/bg4.jpg)
  }


  .asd2 {
    background-image: url(../plantilla/images/slider-main/bg1.jpg)
  }

  .asd3 {
    background-image: url(../plantilla/images/slider-main/bg.jpg)
  }

  .asd7 {
    background-image: url(../plantilla/images/banner/banner2.jpg)
  }

  .asd5 {
    background-image: url(../plantilla/images/slider-pages/slide-page3.jpg)
  }
  .asd4 {
    background-image: url(../plantilla/images/slider-main/bg4.jpg)
  }

  .asd6 {
    background-image: url(../plantilla/images/slider-pages/slide-page4.jpg)
  }

  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }

  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border: 0px none #ffffff;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }

  ::-webkit-scrollbar-thumb:active {
    background: #000000;
  }

  ::-webkit-scrollbar-track {
    background: #666666;
    border: 0px none #ffffff;
    n border-radius: 50px;
  }

  ::-webkit-scrollbar-track:hover {
    background: #666666;
  }

  ::-webkit-scrollbar-track:active {
    background: #333333;
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  /* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
  @media screen and (max-width: 1000px) {
    p {
      font-size: 25px;
    }

    a {
      font-size: 30px;
    }

    h1 {
      font-size: 50px;
    }

    h2 {
      font-size: 45px !important;
    }

    h3 {
      font-size: 40px !important;
    }

    h4 {
      font-size: 28px !important;
    }

    h5 {
      font-size: 25px !important;
    }

    .box-slider-text > h3 {
      font-size: 20px !important;
    }

    .box-slider > h2 {
      font-size: 20px !important;
    }

  }
</style>
