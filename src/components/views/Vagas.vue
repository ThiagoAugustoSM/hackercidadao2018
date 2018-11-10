<template>
<div>
  <v-container>
    <v-text-field
      hide-details
      append-outer-icon="search"
      single-line
    ></v-text-field>

    <v-container fluid grid-list-sm class="ma-0 pa-0">
      <v-layout row wrap justify-center>
        <v-flex v-for="i in 6" :key="i" xs6>
          <vagas-card 
            title="Agente Funerário"
            :salario="850"
            :vaga="1"
            experiencia="6 meses"
            local="Bairro do Recife"
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

      };
    }  
  }
</script>


<style scoped>

</style>
