<template>
  <v-card class="elevation-2 my-2" style="border-radius: 0.5em; width:95%;">
    <h2 class="text-uppercase body-2 text-xs-center mb-2 pt-2 mx-1"
          style="color:blue; font-family:'Helvetica'; font-size: 11px; font-weight: 700;">{{title}}</h2>
    <v-container class="mb-0 pt-0">
      <v-layout column align-center justify-center class="my-0 py-0" grid-list>
        <h4 class="body-1 text-xs-center ma-0">{{salario}}</h4>
        <h4 class="body-1 text-xs-center ma-0">{{local}}</h4>
        <h4 class="body-1 text-xs-center ma-0 text-capitalize">{{experiencia}}</h4>
        <v-layout class="xs12" row style="justify-contet:space-between">
          <h4 class="body-1 text-xs-center ma-0 mr-2 text-capitalize">{{vaga}}</h4>
          <i v-if="pcd" class="fas fa-wheelchair pt-1"></i>
        </v-layout>
      </v-layout>
      <v-layout justify-center align-center>
        <v-btn color="amber lighten-2" class="ma-0 mt-2" style="border-radius:2.5em; width: 90%; font-size:9px;">
          Tenho Interesse
        </v-btn>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props:{
    salario: String,
    title: String,
    local: String,
    vaga: String,
    experiencia: String,
    pcd: Boolean,
  },
  data () {
    return {

    };
  }
}
</script>


<style>

</style>
