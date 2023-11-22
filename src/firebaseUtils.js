'use strict'

import firebase from "firebase"
import {setToken} from "./api/firebase"

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

firebase.initializeApp(firebaseConfig)

//const firebaseMessaging =  firebase.messaging()

const firebaseMessaging = firebase.messaging.isSupported() ? firebase.messaging() : null
if(firebaseMessaging) firebaseMessaging.usePublicVapidKey("BPVytSnCDYXwMs9CPIl3whtFXFy9-zFhyA_yBvaNdem5CHg-xUO0pg0LPjvac2ENBn1HuHH-nsQ1iCwe9FKSdAs")

function refreshToken() {
  navigator.serviceWorker.register('http://baevi.com.mx/firebase-messaging-sw.js/')
    .then( (registration) =>{
      if(!firebaseMessaging.swRegistration)
        firebaseMessaging.useServiceWorker(registration)
      firebaseMessaging.getToken().then((currentToken) => {
        console.log(212123132132)
        if (currentToken) {
          sendTokenToServer(currentToken)
        } else {
          console.log('No Instance ID token available. Request permission to generate one.')
          Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
              console.log('Notification permission granted.')
            } else {
              console.log('Unable to get permission to notify.')
            }
          })
          setTokenSentToServer(false)
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err)
        setTokenSentToServer(false)
      })
    })
}

function sendTokenToServer(currentToken) {
  console.log('mi token', currentToken)
  console.log('---------------------------------------------')
  if (!isTokenSentToServer() && window.localStorage.user) {
    console.log('Sending token to server...')
    setToken(currentToken).then(()=>{
      setTokenSentToServer(true)
    }).catch(error=>{
      console.log(error)
    })
  } else {
    console.log(`Token already sent to server so won't send it again, unless it changes`)
  }
}

function isTokenSentToServer() {
  return window.localStorage.getItem('sentToServer') === '1'
}

function setTokenSentToServer(sent) {
  window.localStorage.setItem('sentToServer', sent ? '1' : '0')
}

module.exports={
  refreshToken,
  sendTokenToServer,
  isTokenSentToServer,
  setTokenSentToServer,
}
