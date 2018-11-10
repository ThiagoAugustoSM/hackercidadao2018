<template>
<div>
  <v-container>
    <v-container fluid grid-list-sm class="ma-0 pa-0">
      <v-layout row wrap justify-center>
        <v-form ref="form" v-model="valid" style='width: 80%;' flazy-validation>
          <v-text-field  v-model="name" label="Nome Completo*" class="text-field" required></v-text-field>
          <v-text-field  v-model="cpf" label="CPF*" style='width:55%' class="text-field" required></v-text-field>
        </v-form>
      </v-layout>
    </v-container>
  </v-container>
</div>
</template>

<script>

</script>


<style scoped>
  .text-field{
    margin-top:0 !important;
    height: 3em !important;
  }
</style>
