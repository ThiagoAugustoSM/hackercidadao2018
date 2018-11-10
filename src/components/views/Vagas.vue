<template>
<div>
  <v-container>
    <v-layout row style="margin-top:0.8em">
      <v-flex>
        <v-text-field
          hide-details
          single-line
          v-model="search"
          label="Pesquisar"
          style="border-color:#C7C6C6 !important;width:80%;margin-left:1.3em"
        ></v-text-field>
      </v-flex>
      <div class="ball"><i class="fas fa-filter" style="margin:auto"></i></div>
    </v-layout>
    <v-container fluid grid-list-sm class="ma-0 pa-0">
      <v-layout row wrap justify-center align-center>
        <v-flex v-for="i in filteredVagas" :key="i" xs6>
          <vagas-card 
            v-if='i.nome!=""'
            :title="i.nome"
            :salario="i.salario"
            :vaga="i.vagas"
            :experiencia="i.experiencia"
            :local="i.local"
            :pcd='i.pcd'
          />
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</div>
</template>

<script>
  import VagasCard from '../shared/VagasCard';

  export default {
    components:{
      VagasCard
    },
    data () {
      return {
        dados: [],
        search:'',
      };
    },
    created() {
      fetch('http://10.98.251.18:3030/api').then(res=> res.json())
      .then(res => this.dados = res);
      // .then(res=> console.log(res));
    },
    computed:{
      filteredVagas: function(){
        return this.dados.filter((dado)=>{
          return dado.nome.match(this.search.toUpperCase());
        })
      }
    }
  }
</script>


<style scoped>
  .ball{
    border-radius:100%;
    background-color:#FDE019;
    height:3.5em;
    width:3.5em;
    display:flex;
    color:#024FA1;
    font-size:1em;
    margin-right:1.3em;
  }
</style>
