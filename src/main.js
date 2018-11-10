import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps"
import router from './router'



Vue.config.productionTip = false



Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBXhEJdWg3Bvm5JkUfaJi_CNFsa8v2HfGg",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



