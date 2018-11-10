<template>
  <v-card class="elevation-10 my-2">
      <h2 class="title text-xs-center mb-2 pt-2" >{{title}}</h2>
    <v-divider/>
    <v-card-media>
      <v-container>
        <v-layout row wrap align-center justify-center>
          <v-flex>
            <h4 class="subheading">Estudo</h4>
          </v-flex>
          <v-flex>
            <h4 class="subheading">Ensino Médio Completo</h4>
          </v-flex>
        </v-layout>
        <v-divider/>
        <v-layout row wrap justify-center class="my-2">
          <v-flex>
            <h4 class="subheading">Experiência</h4>
          </v-flex>
          <v-flex>
            <h4 class="subheading">Primeiro Emprego</h4>
          </v-flex>
        </v-layout>
        <v-divider/>
        <v-layout row wrap justify-space-between class="my-2">
          <v-flex>
            <h4 class="subheading">Quantidade Vagas</h4>
          </v-flex>
          <v-flex>
            <h4 class="subheading">2</h4>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-media>
  </v-card>
</template>

<script>
export default {
  props:{
    title: String,
  },
  data () {
    return {

    };
  }
}
</script>


<style>

</style>
