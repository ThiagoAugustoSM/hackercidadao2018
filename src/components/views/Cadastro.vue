<template>
<div>
  <v-container>
    <v-container fluid grid-list-sm class="ma-0 pa-0">
      <v-layout row wrap justify-center>
        <v-form ref="form" v-model="valid" style='width:90%;' flazy-validation>
          <v-layout row wrap>
            <v-text-field  v-model="nome" label="Nome Completo*" class="text-field" required></v-text-field>
            <v-flex xs7 class="px-0" style="padding-right: 15px !important"><v-text-field  v-model="cpf" label="CPF*" class="text-field" required></v-text-field></v-flex>
            <v-flex xs5 class="px-0"><v-select :items="genero" label="Gênero*" class="text-field" required></v-select></v-flex>
            <v-flex xs5 class="px-0" style="padding-right: 15px !important"><v-text-field label="Celular" class="text-field" ></v-text-field></v-flex>
            <v-flex xs7><v-text-field  v-model="name" label="Data de Nascimento*" mask='date' class="text-field" required></v-text-field></v-flex>
            <v-flex xs12 class="px-0"><v-autocomplete :items="bairros" label="Bairro*" class="text-field" required></v-autocomplete></v-flex>
            <v-flex xs12 class="px-0"><v-text-field  v-model="email" label="Email" class="text-field" required></v-text-field></v-flex>
            <v-flex xs12 class="px-0"><v-select :items="escolaridade" label="Escolaridade*" class="text-field" ></v-select></v-flex>
            <v-flex xs12><v-combobox v-model="select" multiple chips label='Areas de Interesse' :items='areas' class="text-field"></v-combobox></v-flex>
            <v-flex xs12><v-combobox v-model="select" multiple chips label='Possui alguma deficiência?' :items='deficiencia' class="text-field"></v-combobox></v-flex>
            <v-flex xs12 justify-center style='margin-top:20px;display:flex;background-color:transparent;color:#024fa1;'><v-btn to="vagas" class="btn-prox" style="color:#024fa1;">Cadastrar</v-btn></v-flex>
          </v-layout>
        </v-form>
        <v-btn to="/" @click="persist" style=" margin:10px;box-shadow:none;color:#024fa1;font-size:1.0em;background-color:transparent">Voltar</v-btn>
      </v-layout>
    </v-container>
  </v-container>
</div>
</template>

<script>
  export default {
    data () {
      return {
        genero:['Masculino', 'Feminino','Não Binário', 'Desejo não declarar'],
        bairros:['Casa Amarela','Ibura'],
        escolaridade:['Não Frequentou a Escola','Fundamental Incompleto', 'Fundamental Completo','Ensino Médio Completo', 'Ensino Médio Incompleto','Tecnico Incompleto','Tecnico Completo','Esnsino Superior Incompleto','Ensino Superior Completo' ],
        areas:['Agronomia', 'Engenharia'],
        deficiencia:['Não', 'Locomotiva', 'Auditiva', 'Cognitiva'],
        nome : '',     
        }
      },
    mounted() {
      // if (localStorage.nome) {
      //   this.nome = localStorage.nome;
      // }
    },
    methods: {
      persist() {
        localStorage.nome = this.nome;
      }
    }
  }
</script>


<style scoped>
  .text-field{
    margin-top:0 !important;
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
