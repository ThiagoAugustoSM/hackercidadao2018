<template>
  <v-container class="ma-0">
    <v-text-field
      hide-details
      append-outer-icon="search"
      single-line
    ></v-text-field>
    <vagas-card title="Agente de Ação Social"/>
    <vagas-card/>
    <vagas-card/>
    <vagas-card/>
    <vagas-card/>
  </v-container>
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
