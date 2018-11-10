import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/views/HelloWorld.vue'
import Mapas from '@/components/views/Mapas.vue'
import Vagas from '@/components/views/Vagas.vue'
import Cadastro from '@/components/views/Cadastro.vue'
import Login from '@/components/views/Login.vue'
import Curriculo from '@/components/views/Curriculo.vue'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/hello',
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
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/',
      name: 'Login',
      component:Login
    },
    {
      path: '/curriculo',
      name: 'Curriculo',
      component: Curriculo
    }
  ]
})