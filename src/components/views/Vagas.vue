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
          style="border-color:#C7C6C6 !important;width:75%;margin-left:1.3em"
        ></v-text-field>
      </v-flex>
      <v-dialog v-model="dialog">
          <v-btn slot="activator"                v-show="!hidden"
                color="#ffd54f"
                fab
                dark
                small
                absolute
                top
                right
                style="top:3em;right:2em"
                ><i class="fas fa-search"></i></v-btn>
          <v-card style="display:flex; alig-items:space-between;flex-direction:column;width:100%;margin-left:auto;margin-right:auto;height:20em;background-color:#FDE019;border:none;padding:15px; border-radius:1.5em;">
            <h2 style="margin-top:0.5em;width:100%;margin-bottom:1em; text-align:center;color:#024FA1">Olá, João Silva!</h2>
            <p style="margin-top:7em;color:#5D5C5C;font-size:1.4em;margin-top:1em;text-align:center">Uma vaga é compatível com suas habilidades. Gostaria de visualizá-la?</p>
            <h3 style="margin-top:2em;border-bottom:2px solid #024FA1;border-radius:0 ;text-align:center;color:#024FA1;width:55%;margin-left:auto;margin-right:auto">Visualizar Vaga</h3>
          </v-card>
    </v-dialog>
    </v-layout>
    <v-container fluid grid-list-sm class="ma-0 pa-0">
      <v-layout row wrap justify-center fill-height>
        <v-flex v-for="i in filteredVagas" style="display:flex; align-items: stretch;"  :key="i" xs6>
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
