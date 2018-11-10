import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/views/HelloWorld.vue'
import Mapas from '@/components/views/Mapas.vue'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mapas',
      name: 'Mapas',
      component: Mapas
    }
  ]
})