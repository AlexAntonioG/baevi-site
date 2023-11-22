<template>
  <div style="width: 100%; height: 100%">
    <div v-if="isConserve" style="width: 100%; height: 100%">
      <div style="height: 10%;  margin-left: 2rem; display: flex">
        <div style="display: flex; margin-bottom: auto; margin-top: auto; width: 100%">
          <i class="fa fa-arrow-circle-left p-2 colorTextoVerde fa-2x"
             style="padding-top: 0; color: #ffb600; margin-right: 1rem; cursor: pointer" @click="back"
             v-if="isConserve"></i>
          <h4 style="margin-top: auto; margin-bottom: auto">{{conversations[index].issuer.fullName}} ({{conversations[index].issuer.role}})</h4>
          <button class="btn btn-primary btn-xs "  v-if="conversations[index].status !== `solved`" style="padding: 3px; margin-left: auto; margin-right: 5px" @click="finish">Finalizar</button>
        </div>

      </div>
      <div style="height: 73%; overflow-y: auto; position: relative" id="chat">
        <div v-for="message in messages">
          <MessageSent v-if="message.type == `sent`" :message="message"></MessageSent>
          <MessageReceived v-else :message="message"></MessageReceived>
        </div>
        <div class="row" style="width: 100%; margin-left: auto; margin-right: auto; display: flex; justify-content: center; position: absolute; bottom: 0" v-if="error">
          <span  style="color: red">{{error}}</span>
        </div>
      </div>
      <div v-if="conversations[index].status == `solved`">
        <div class="row " style="width: 100%; margin: 0; padding-top: 1rem">
          <h4 class="text-center"> Esta conversacion ya ha sido finalizada</h4>
        </div>
      </div>
      <div style="height: 15%" v-else-if="conversations[index].solver && conversations[index].solver.id == user.id">
        <div class="row " style="width: 100%; margin: 0; padding-top: 1rem">
          <div class="md-form form-sm m-0 col-sm-10 col-xs-10 col-md-10 col-lg-10">
            <input type="text" class="form-control " placeholder="Escribe algo..." @keypress.enter="sendMessage"
                   v-model="message">
          </div>
          <i class="fa fa-arrow-circle-right p-2 colorTextoVerde fa-2x"
             style="padding-top: 0.6rem; color: #ffb600" @click="sendMessage"></i>
        </div>
      </div>
      <div v-else>
        <div class="row " style="width: 100%; margin: 0; padding-top: 1rem">
          <h4 class="text-center"> No puedes contestar esta conversacion</h4>
        </div>
      </div>
    </div>
    <ul class="list-group" v-else style="height: 100%; overflow-y: auto; margin-bottom: 0">
      <li class="list-group-item" v-for="(conversation, i ) in conversations" style="cursor: pointer"
          @click="conserve(i)">
        <span v-if="conversation.status == `taken`" class="badge">Tomada</span>
        <span class="badge" v-if="conversation.status == `created`">Creada</span>
        <span class="badge" v-if="conversation.status == `solved`">Finalizada</span>
        {{conversation.issuer.fullName}} ({{conversation.issuer.role}})
      </li>
    </ul>
  </div>
</template>

<script>
  import MessageReceived from "./MessageReceived";
  import MessageSent from "./MessageSent";
  import {finishIssue, getIssues, getMessages, postMessages, takeIssue} from "../api/issues";

  export default {
    name: "ChatAdmin",
    components: {
      MessageReceived,
      MessageSent
    },
    data() {
      return {
        message: ``,
        isOpen: false,
        isConserve: false,
        token: window.localStorage.token,
        user: JSON.parse(window.localStorage.user),
        conversations: [],
        messages: [],
        index: 0,
        error: null,
      }
    },
    methods: {
      back() {
        this.isConserve = false
        this.messages = []
      },
      finish(){
        finishIssue({id: this.conversations[this.index].id}).then(()=>{
          return  getIssues({})
        }).then(resp => {
          this.conversations = resp
          this.isConserve = false
          this.messages = []
        }).catch(()=>{
          this.error = `No se pudo finalizar el chat`
          setTimeout(()=>{
            this.error = null
          }, 3000)
        })
      },
      conserve(i) {
        this.isConserve = true
        this.index = i
        if(!this.conversations[this.index].solver.username){
          takeIssue({id: this.conversations[this.index].id}).then(()=>{
            return getMessages({id: this.conversations[this.index].id})
          }).then(resp => {
            let sent = resp[0].insertedBy
            this.messages = resp.map(message => {
              return {
                type: sent != message.insertedBy ? `sent` : `received`,
                content: message.text,
                date: `${message.insertedDate.hour}:${message.insertedDate.minute > 10 ? message.insertedDate.minute : `0${message.insertedDate.minute}`}`
              }
            })
            setTimeout(() => {
              let chat = document.getElementById(`chat`)
              chat.scrollTo(0, chat.scrollHeight)
            }, 100)
          })
        }
          else {
          getMessages({id: this.conversations[this.index].id}).then(resp => {
            let sent = resp[0].insertedBy
            this.messages = resp.map(message => {
              return {
                type: sent != message.insertedBy ? `sent` : `received`,
                content: message.text,
                date: `${message.insertedDate.hour}:${message.insertedDate.minute > 10 ? message.insertedDate.minute : `0${message.insertedDate.minute}`}`
              }
            })
            setTimeout(() => {
              let chat = document.getElementById(`chat`)
              chat.scrollTo(0, chat.scrollHeight)
            }, 100)
          })
        }
      },
      sendMessage() {
        if (!this.message.length || !this.message.trim()) return
        postMessages({id: this.conversations[this.index].id, data: {text: this.message}}).then(() => {
          let date = new Date()
          this.messages.push({content: this.message, date: `${date.getHours()}:${date.getMinutes()}`, type: `sent`})
          this.message = ``
          setTimeout(() => {
            let chat = document.getElementById(`chat`)
            chat.scrollTo(0, chat.scrollHeight)
          }, 100)
        })
      }
    },
    mounted() {
      this.$bus.$on(`newMessage`, data => {
        if (this.isConserve && data.issueId == this.conversations[this.index].id && this.user.id != data.sender) {
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
      this.$bus.$on(`newIssue`, data => {
        this.conversations.push(data[0])
      })
      this.$bus.$on(`asaingIssueAdmin`, data => {
        let i = this.conversations.findIndex(conversation => conversation.id == data[0].id)
        if(i >= 0) {
          if(this.index == i){
            this.isConserve = false
            this.conversations[i] = data[0]
            setTimeout(()=>{
              this.isConserve = true
            }, 1)
          }
          else this.conversations[i] = data[0]
        }
        console.log(this.conversations)
      })
      getIssues({}).then(resp => {
        console.log(resp)
        this.conversations = resp
      }).catch(error => {
        console.log(error)
      })
    }
  }
</script>

<style scoped>

</style>
