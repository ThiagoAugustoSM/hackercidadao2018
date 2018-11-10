import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/views/HelloWorld.vue'
import Mapas from '@/components/views/Mapas.vue'
import Vagas from '@/components/views/Vagas.vue'
import Login from '@/components/views/Login.vue'

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
    },
    {
      path: '/vagas',
      name: 'Vagas',
      component: Vagas
    },
    {
      path: '/login',
      name: 'Login',
      component:Login
    },
  ]
})