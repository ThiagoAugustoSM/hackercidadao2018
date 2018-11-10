<template>
    <v-container fluid fill-height class="ma-0 pa-0">
        <v-layout xs12 column>
            <v-flex xs1 style="background-color:#024FA1; display:flex; flex-direction: row; justify-content:center; align-items:center;height:100px !important">
                <h1 style="width:100%; text-align:center; color:white; font-size:16px">Fazer o meu currículo</h1>
            </v-flex>
            <v-flex xs1></v-flex>
            <v-form ref="form" v-model="valid" style='width:90%; margin-left:auto; margin-right: auto;' flazy-validation>
                <v-text-field  style="width:80%; margin-left:auto; margin-right:auto; padding-bottom: 0; margin-top:0"  v-model="nome" clearable label="Objetivos"  class="text-field" required></v-text-field>
                <v-combobox v-model="select" style="width:80%; margin-left:auto; margin-right:auto;margin-top:0" multiple chips label='Habilidades' :items='habilidades' class="text-field"></v-combobox>
                <v-combobox class="text-field" style="width: 80%; margin-left: auto; margin-right: auto;margin-top:0" v-model="model" :items="items"  hide-selected label="Experiências" multiple small-chips></v-combobox>
                <v-combobox clas="text-field" style="width: 80%; margin-left: auto; margin-right: auto;margin-top:0" v-model="model" :items="items"  hide-selected label="Cursos" multiple small-chips></v-combobox>
            </v-form>
            <v-btn @click="persist" to='vagas/' round style=" margin:10px;box-shadow:none;font-weight:bold;text-transform:initial;color:#024FA1;background-color:white;font-size:1em; border: 2px solid #024FA1;width: 40%; margin-left:auto;margin-right:auto;">Salvar dados</v-btn>
            <a style="color:#024FA1; font-size:0.85em;text-decoration:none;font-weight:bold; margin-left: auto;margin-right:auto; text-transform:capitalize;">VOLTAR</a>
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
</style>