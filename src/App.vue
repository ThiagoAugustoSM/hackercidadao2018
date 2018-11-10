<template>
  <v-app id="inspire">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <!-- <router-link to="Vagas"> -->
        <v-list-tile @click="teste" to="HelloWorld" style="text-decoration: none;">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- </router-link> -->
        <v-list-tile @click="teste">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="teste" to="Vagas">
          <v-list-tile-action>
            <v-icon>person_add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Vagas</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="teste" to="Mapas">
          <v-list-tile-action>
            <v-icon>book</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Qualifique-se</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="teste" to="Cadastro">
          <v-list-tile-action>
            <v-icon>person_add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Cadastro</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="teste" to="Login">
          <v-list-tile-action>
            <v-icon>book</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Chega no Trabalho</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
    
    <v-footer  v-if="!($route.name == 'Login' || $route.name == 'Cadastro')" fixed height="auto"  app>
      <v-bottom-nav  style="margin: auto;" row wrap :active.sync="bottomNav" :value="true" absolute>
        <v-btn  to="/vagas" style="height:100%; padding:auto;"  flat value="vagas" >
          <div class="footerIcon">
            <i class="fas fa-home"></i>
          </div>
        </v-btn>

        <v-btn  to="/mapas" style=""  flat value="mapas" >
          <div class="footerIcon">
            <i class="fas fa-book-open"></i>  
          </div>
        </v-btn>

        <v-btn  to="/perfil" style=""  flat value="perfil" >
          <div class="footerIcon">
            <i class="fas fa-cog"></i>
          </div>
        </v-btn>

        <v-btn  to="/filtro" style="" flat value="filtro" >
          <div class="footerIcon">
            <i class="fas fa-filter"></i>
          </div>
        </v-btn>

      </v-bottom-nav>
    </v-footer>

  </v-app>
</template>

<script>
/* eslint-disable */
import router from './router/index.js';
export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // },
  data () {
    return {
      drawer: null,
      showingNav: true,
      bottomNav: ''
    }
  },
  mounted () {
    console.log(this.$route)
  },
  methods: {
    teste () {

    }
  },
  created: function(){ 
    if(router.currentRoute.name == 'Vagas'){
      this.bottomNav = 'vagas'
      console.log('vagas')
    }
    else if(router.currentRoute.name == 'Mapas'){
       this.bottomNav = 'mapas' 
       console.log('mps')
    }
    else if(router.currentRoute.name == 'Perfil'){
        this.bottomNav = 'perfil' 
        console.log('perfil')
    }
    else if(router.currentRoute.name == 'Filtro'){
        this.bottomNav = 'filtro' 
        console.log('filtro')
    }
    
  },

  computed:{
    

      
  }
}
</script>

<style scoped>
  .footerBar{
    display:none;
  }
  .footerBar2{
    display:flex;
  }
  .footerIcon{
    display:flex;
    height:100%;
    flex: 1 1 20%;
    justify-content:center;
    align-items:center;
    font-size:28px;
    text-decoration:none;
    color:#024FA1;
  }

</style>
