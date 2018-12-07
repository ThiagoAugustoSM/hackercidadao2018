<template>
<div>
  <v-container fluid grid-list-sm class="ma-0 pa-0">
    <v-toolbar style="background-color:#024fa1"><h2 style="width:100%; text-align:center;color:white;font-weight:normal">Editar Conta</h2></v-toolbar>
      <v-layout row wrap justify-center class="ma-2">
        <v-form ref="form" v-model="valid" style='width:90%;' flazy-validation>
          <v-layout row wrap>
            <v-text-field  
                v-model="nome" 
                label="Nome Completo*" 
                class="text-field" 
                required
              />
              <v-flex xs7 class="px-0" style="padding-right: 15px !important">
                <v-text-field  
                  v-model="cpf" 
                  label="CPF*" 
                  class="text-field" 
                  required
                />
              </v-flex>
              <v-flex xs5 class="px-0">
                <v-select 
                  :items="genero"
                  v-model="generoEscolhido"
                  label="Gênero*" 
                  class="text-field" 
                  required
                />
              </v-flex>
              <v-flex xs5 class="px-0" style="padding-right: 15px !important">
                <v-text-field 
                  label="Celular" 
                  class="text-field" 
                />
              </v-flex>
              <v-flex xs7>
                <v-text-field  
                  v-model="dataNascimento" 
                  label="Data de Nascimento*" 
                  mask='date' 
                  class="text-field" 
                  required
                />
              </v-flex>
              <v-flex xs12 class="px-0">
                <v-autocomplete 
                  :items="bairros" 
                  label="Bairro*" 
                  class="text-field" 
                  required/>
              </v-flex>
              <v-flex xs12 class="px-0">
                <v-text-field  
                  v-model="email" 
                  label="Email" 
                  class="text-field" 
                  required
                />
              </v-flex>
              <v-flex xs12 class="px-0">
                <v-select 
                  :items="escolaridade" 
                  v-model="escolaridadeEscolhida"
                  label="Escolaridade*" 
                  class="text-field" 
                />
              </v-flex>
              
              <v-flex xs12>
                <v-combobox 
                  v-model="areasEscolhidas"
                  multiple 
                  chips 
                  label='Áreas de Preferência' 
                  :items='areas' 
                  class="text-field"
                />
              </v-flex>
              <v-flex xs12>
                <v-combobox 
                  v-model="deficienciasEscolhidas" 
                  multiple 
                  chips 
                  label='Possui alguma deficiência?' 
                  :items="deficiencia" 
                  class="text-field"
                />
              </v-flex>
            <v-flex xs12 justify-center style='margin-top:20px;display:flex;background-color:transparent;color:#024fa1;'>
              <v-btn @click="updateData()" to="/vagas" class="btn-prox" style="color:#024fa1;font-size:1.5em">Salvar aterações</v-btn>
            </v-flex>
          </v-layout>
        </v-form> 
        <v-btn @click="signOut()" style="margin:10px; margin-bottom:30px; box-shadow:none;color:#024fa1;font-size:1.0em;background-color:transparent">Sair</v-btn>
        <v-btn to="/editcurriculo" @click="persist" style="margin:10px; margin-bottom:30px;box-shadow:none;color:#024fa1;font-size:1.0em;background-color:transparent">Editar currículo</v-btn>
      </v-layout>
  </v-container>
</div>
</template>

<script>
/* eslint-disable */
import {firebaseApp} from '../../main'
import {db} from '../../main'
export default {
  data () {
    return {
      genero:['Masculino', 'Feminino','Não Binário', 'Desejo não declarar'],
      bairros:['Casa Amarela','Ibura'],
      escolaridade:['Não Frequentou a Escola','Fundamental Incompleto', 'Fundamental Completo','Ensino Médio Completo', 'Ensino Médio Incompleto','Tecnico Incompleto','Tecnico Completo','Esnsino Superior Incompleto','Ensino Superior Completo' ],
      areas:['Agronomia', 'Engenharia'],
      deficiencia:['Não', 'Locomotiva', 'Auditiva', 'Cognitiva'],
      nome : '',
      cpf: '',
      celular: '',
      dataNascimento: '',
      bairro: '',
      generoEscolhido: '',
      escolaridadeEscolhida: '',
      areasEscolhidas: [],
      deficienciasEscolhidas: [],
      email: '',
      valid: null,
    }
  },
  created () {
    console.log("Nome + " + this.nome);
    let lastReference = this
    let user = firebaseApp.auth().currentUser
    db.collection("users").doc(user.uid).get().then((doc) => {
      // User is signed in.
      console.log(user.uid)
      if (doc.exists) {
        let userData = doc.data()
        // console.log("Nome + ", this.nome);
        console.log("Document data:", userData);
        console.log(typeof(userData))
        this.nome = userData.nome
        this.cpf =  userData.cpf
        this.celular = userData.celular
        this.dataNascimento = userData.dataNascimento
        this.bairro = userData.bairro
        console.log(userData.generoEscolhido)
        this.generoEscolhido = userData.genero
        this.escolaridadeEscolhida = userData.escolaridade
        this.areasEscolhidas = userData.areas
        this.deficienciasEscolhidas = userData.deficiencia,
        this.email = userData.email
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
  },
  mounted() {
    
  },
  methods: {
    persist() {
      localStorage.nome = this.nome;
    },
    updateData() {
      db.collection("users").doc("DC").update({
        nome: this.nome,
        cpf: this.cpf,
        celular: this.celular,
        dataNascimento: this.dataNascimento,
        bairro: this.bairro,
        genero: this.generoEscolhido,
        escolaridade: this.escolaridadeEscolhida,
        areas: this.areasEscolhidas,
        deficiencia: this.deficienciasEscolhidas,
        email: this.email,
      }).then(()=> console.log("Atualiziado"))
      .catch((error) => console.log(error))
    },
    signOut () {
      firebaseApp.auth().signOut().then(() => {
        console.log("SAI MANO")
        this.$router.replace('/')
      }).catch(err => {
        console.log("SAI GALERA")
        console.log(err)
      })
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
