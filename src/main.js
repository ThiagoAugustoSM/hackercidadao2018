import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps"
import router from './router'
import './stylus/main.styl'

import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

Vue.config.productionTip = false

import firebase from 'firebase';
import firebaseConfig from '../firebaseConfig.json';

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});

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



