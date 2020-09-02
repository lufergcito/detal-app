<template>
  <v-app>
    <v-app-bar app color="primary" dark  height="50" >
    <h3> COTIZADOR </h3>
      <div class="d-flex align-center">
      
      </div>

      <v-spacer></v-spacer>
        <router-link to="/Cotizar">Cotizar</router-link>
        <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Visitar WEB</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
       <router-link to="/Cotizar">Cotizar1</router-link>
    </v-app-bar>
      
      <router-view/>
  </v-app>
</template>

<script>
 

export default {
  name: "App",

  components: {
    
    
    
  },

  data: () => ({
    //
  })
};
</script>
