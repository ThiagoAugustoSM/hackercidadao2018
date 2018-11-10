<template>
    <v-container fluid fill-height class="ma-0 pa-0 fundoTela bodyLogin">
        <v-layout column class="pt-4">
            <v-flex xs4 style="display:flex; flex-direction: column; justify-content:center; align-items:center;">
                <img src='@/assets/faciliti.png' style="width:50%"></img>
            </v-flex>
            <v-flex xs4 style="display:flex; flex-direction:column; justify-content:center; align-items:center; margin-top:2.3em;"> 
                
                <input type="text" placeholder="CPF" style="margin-bottom: 5%;" class="loginButton" />
                <input type="password" placeholder="Senha" class="loginButton"/>
                
                <v-btn to="/vagas" round color="#FDE019" style="color:#024FA1;  margin-top: 10%; width:27.5%; height:3em">entrar</v-btn>
            </v-flex>
            <v-flex xs2 style="display:flex; flex-direction:column; justify-content:center; align-items: center;margin-top:1em">
                <router-link to='cadastro' style="text-decoration: none;">
                <p  class="options" style="color:yellow; margin: 0; font-size: 17px;text-decoration: none; "> Fazer cadastro </p>
                </router-link>
                <p class="options" style="color:yellow; margin:0; margin-top:4px; font-size: 17px"> Esqueci a minha senha </p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {

      };
    } 
  }
  
</script>


<style scoped>
    .fundoTela{
        background-color:#024FA1;
        height: 100%;
    }
    ::placeholder {
        color: white;
        opacity: 1; /* Firefox */
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: white;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: white;
    }
    .loginButton{
        border:2px solid #FDE019; 
        border-radius: 2.5em;  
        height:3em; 
        font-size:1.2em;
        width: 65%;
        padding:15px;      
    }
    .options{
        font-weight:bold;
    }

    
</style>