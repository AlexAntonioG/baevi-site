importScripts('https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.14.0/firebase-messaging.js')
//importScripts('https://www.gstatic.com/firebasejs/7.14.0/init.js')


//const firebaseMessaging =  firebase.messaging()

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

firebase.initializeApp(firebaseConfig);

const firebaseMessaging = firebase.messaging.isSupported() ? firebase.messaging() : null

console.log(firebase.messaging.isSupported())


  console.log('console desde el messagin')
if(firebaseMessaging) {
  firebaseMessaging.setBackgroundMessageHandler(payload => {
    const title = 'Baevi'
    const options = {
      body: payload.data.message,
      //icon: 'https://baevi-15316.web.app/dist/baevi.png?ef29d31140513f1dbf35c0fdcaa61770',
      vibrate: [500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40, 500]
    }
    return self.registration.showNotification(title, options)
  })

}
