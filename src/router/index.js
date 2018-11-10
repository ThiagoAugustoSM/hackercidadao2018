import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/views/HelloWorld'
import Vagas from '@/components/views/Vagas'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vagas',
      name: 'Vagas',
      component: Vagas
    }
  ]
})