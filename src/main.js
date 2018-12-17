/* eslint-disable */
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps"
import router from './router'
import './stylus/main.styl'

import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

Vue.config.productionTip = false

import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '../firebaseConfig.json';

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});

// const messaging = firebaseApp.messaging();
// messaging.usePublicVapidKey("BEXEaHALjNHXUKhplPwHL7EYYIKVC0Wu_FLKUeZmq2n_HlhNyutWGggr0VPg0qbjyMRY-oB6usVYyVmX6e_bp_I");
// messaging.requestPermission().then(function() {
//   console.log('Notification permission granted.');
//   // TODO(developer): Retrieve an Instance ID token for use with FCM.
//   // ...
// }).catch(function(err) {
//   console.log('Unable to get permission to notify.', err);
// });

// messaging.getToken().then(function(currentToken) {
//   if (currentToken) {
//     console.log(currentToken)
//     // sendTokenToServer(currentToken);
//     // updateUIForPushEnabled(currentToken);
//   } else {
//     // Show permission request.
//     console.log('No Instance ID token available. Request permission to generate one.');
//     // Show permission UI.
//     // updateUIForPushPermissionRequired();
//     // setTokenSentToServer(false);
//   }
// }).catch(function(err) {
//   console.log('An error occurred while retrieving token. ', err);
//   // showToken('Error retrieving Instance ID token. ', err);
//   // setTokenSentToServer(false);
// });

// messaging.onMessage(payload => {
//   console.log(payload)
// })



Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBXhEJdWg3Bvm5JkUfaJi_CNFsa8v2HfGg",
    libraries: "places" // necessary for places input
  }
});

let app = '';

firebaseApp.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
})



