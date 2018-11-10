import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps"
import router from './router'
import Vuetify from '../node_modules/vuetify'

Vue.config.productionTip = false

Vue.use(Vuetify)

Vue.use(VueGoogleMaps, {
  load: {
    key: "REPLACE-THIS-WITH-YOUR-KEY-FROM-ABOVE",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



