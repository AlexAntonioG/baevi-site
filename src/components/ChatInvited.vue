<template>
  <div style="width: 100%; height: 100%">
    <div style="height: 10%;  margin-left: 2rem; display: flex">
      <div style="display: flex; margin-bottom: auto; margin-top: auto" v-if="conversation">
        <h5 style="margin-top: auto; margin-bottom: auto">{{solver}}</h5>
      </div>
      <div v-if="!messages.length" style="display: flex; margin-bottom: auto; margin-top: auto">
        <h5 style="margin-top: auto; margin-bottom: auto" >Escribenos y alguien te atendera en unos breves momentos</h5>
      </div>
    </div>
    <div style="height: 74%; overflow-y: auto; " id="chat">
      <div v-for="message in messages">
        <MessageSent v-if="message.type == `sent`" :message="message"></MessageSent>
        <MessageReceived v-else :message="message"></MessageReceived>
      </div>
    </div>
    <div style="height: 15%">
      <div class="row " style="width: 100%; margin: 0; padding-top: 1rem">
        <div class="md-form form-sm m-0 col-md-10">
          <input type="text" class="form-control " placeholder="Escribe algo..." @keypress.enter="sendMessage"
                 v-model="message">
        </div>
        <i class="fa fa-arrow-circle-right p-2 colorTextoVerde fa-2x"
           style="padding-top: 0.6rem; color: #ffb600" @click="sendMessage"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import MessageReceived from "./MessageReceived";
  import MessageSent from "./MessageSent";
  import {getIssues, getMessages, postIssues, postMessages} from "../api/issues";

  export default {
    name: "ChatInvited",
    components: {
      MessageReceived,
      MessageSent
    },
    data() {
      return {
        message: ``,
        messages: [],
        conversation: null,
        solver: ``,
        user: JSON.parse(window.localStorage.user),
      }
    },
    methods: {
      sendMessage() {
        if (!this.message.length) return
        if (this.conversation) {
          postMessages({id: this.conversation, data: {text: this.message}}).then(() => {
            let date = new Date()
            this.messages.push({content: this.message, date: `${date.getHours()}:${date.getMinutes()}`, type: `sent`})
            this.message = ``
            setTimeout(() => {
              let chat = document.getElementById(`chat`)
              chat.scrollTo(0, chat.scrollHeight)
            }, 100)
          })
        } else {
          postIssues().then(id => {
            this.conversation = id
            return postMessages({id: this.conversation, data: {text: this.message}})
          }).then(() => {
            let date = new Date()
            this.messages.push({content: this.message, date: `${date.getHours()}:${date.getMinutes()}`, type: `sent`})
            this.message = ``
            setTimeout(() => {
              let chat = document.getElementById(`chat`)
              chat.scrollTo(0, chat.scrollHeight)
            }, 100)
          })
        }
      }
    },
    mounted() {
      this.$bus.$on(`finishIssue`, data => {
        this.conversation = null
        this.messages= []
        this.solver = `Espera, te atenderemos en cualquier segundo`
      })
      this.$bus.$on(`newMessage`, data => {
        if (this.user.id != data.sender) {
          this.messages.push({
            content: data.text,
            date: data.date,
            type: `recived`
          })
          setTimeout(() => {
            let chat = document.getElementById(`chat`)
            chat.scrollTo(0, chat.scrollHeight)
          }, 100)
        }
      })
      this.$bus.$on(`asaingIssue`, data => {
        console.log(data)
        this.solver = `Estas hablando con ${data.solverName}`
      })
      let auxConversacion
      getIssues({}).then(resp => {
        auxConversacion = resp.find(conversation=> conversation.status !== `solved`)
        this.conversation = resp.length ? resp.find(conversation=> conversation.status !== `solved`).id : null
        console.log("as",this.conversation)
        if (this.conversation) return getMessages({id: this.conversation})
        else return Promise.resolve([])
      }).then(resp => {
        console.log(auxConversacion)
        if (this.conversation) this.solver = auxConversacion.id && auxConversacion.solver ? `Estas hablando con ${auxConversacion.solver.fullName}` : `Espera, te atenderemos en cualquier segundo`
        if (resp.length) {
          let sent = resp[0].insertedBy
          this.messages = resp.map(message => {
            return {
              type: sent == message.insertedBy ? `sent` : `received`,
              content: message.text,
              date: `${message.insertedDate.hour}:${message.insertedDate.minute > 10 ? message.insertedDate.minute : `0${message.insertedDate.minute}`}`
            }
          })
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
</script>

<style scoped>

</style>
