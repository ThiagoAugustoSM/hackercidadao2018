<template>
    <v-container fluid fill-height class="ma-0 pa-0">
        <v-layout xs12 column>
            <v-toolbar style="background-color:#024fa1"><h2 style="width:100%; text-align:center;color:white;font-weight:normal">Meu Currículo</h2></v-toolbar>
            <v-flex xs1></v-flex>
            <v-form ref="form" v-model="valid" style='width:90%; margin-left:auto; margin-right: auto;' flazy-validation>
                <v-text-field  style="width:80%; margin-left:auto; margin-right:auto; padding-bottom: 0; margin-top:0"  v-model="nome" clearable label="Objetivos"  class="text-field" required></v-text-field>
                <v-combobox v-model="select" style="width:80%; margin-left:auto; margin-right:auto;margin-top:0" multiple chips label='Habilidades' :items='habilidades' class="text-field"></v-combobox>
                <v-combobox class="text-field" style="width: 80%; margin-left: auto; margin-right: auto;margin-top:0" v-model="model" :items="items"  hide-selected label="Experiências" multiple small-chips></v-combobox>
                <v-combobox clas="text-field" style="width: 80%; margin-left: auto; margin-right: auto;margin-top:0" v-model="model" :items="items"  hide-selected label="Cursos" multiple small-chips></v-combobox>
            </v-form>
            <v-flex xs12 justify-center style='margin-top:20px;display:flex;background-color:transparent;color:#024fa1;'><v-btn class="btn-prox" style="color:#024fa1;">Salvar dados</v-btn></v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
          habilidades:['Liderança', 'Autodidata', 'Trabalho em Equipe', 'Experiência no Mercado'],
          experiencias:[]
      };
    } 
  }
  
</script>


<style scoped>
    *{
    font-family:'Helvetica';
    }
    .text-field{
        margin-top: 0 !important;
        height: 3.4em !important;
    }
    .btn-prox{
        padding:2px;
        border-radius:2.5rem;
        background-color:white;
        font-size:1.7em;
        font-weight:bolder;
        border:1px solid #024FA1;
        margin:auto;
        text-transform:capitalize;
        color:#024FA1;
        height:2em;
        width:60%;
    }
</style>