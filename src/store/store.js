import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);



export const store = new Vuex.Store({
    state:{
        nome2: '',
        cpf2: 2,
        genero2: '',
        bairros2: ' ',
        email2: '',
        escolaridade2: '',
        areas2: [],
        pcd2: ''
    },
    mutations:{
        edit (data, change){
          state.data = change;
        }
    }
})
