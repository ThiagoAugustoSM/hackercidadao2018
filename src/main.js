import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps"
import router from './router'
import './stylus/main.styl'
import Vuex from 'vuex'

import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

Vue.config.productionTip = false

Vue.use(Vuex)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBXhEJdWg3Bvm5JkUfaJi_CNFsa8v2HfGg",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  store:store,
  router,
  render: h => h(App),
}).$mount('#app')



