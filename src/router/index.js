import firebase from 'firebase'
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/views/HelloWorld.vue'
import Mapas from '@/components/views/Mapas.vue'
import Vagas from '@/components/views/Vagas.vue'
import Cadastro from '@/components/views/Cadastro.vue'
import Login from '@/components/views/Login.vue'
import Curriculo from '@/components/views/Curriculo.vue'
import EditarConta from '@/components/views/EditarConta.vue'
import EditarCurriculo from '@/components/views/EditarCurriculo.vue'

Vue.use(Router)
const router =  new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/vagas',
      name: 'Vagas',
      component: Vagas,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mapas',
      name: 'Mapas',
      component: Mapas,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/editcurriculo',
      name: 'EditarCurriculo',
      component: EditarCurriculo,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/editconta',
      name: 'EditarConta',
      component: EditarConta,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/curriculo',
      name: 'Curriculo',
      component: Curriculo
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('/');
  else if(!requiresAuth && currentUser) next('/vagas');
  else next();
})

export default router;
