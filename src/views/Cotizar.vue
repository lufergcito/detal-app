<template>
  <div class="Cotizar">
  <h1>  ESTE ES COTIZAR </h1>
          
 
  
    <v-container fluid >
     <v-row>
     <v-col cols="4"  md="3"> 

     <ShoppingCart/>
       <hr>
       <v-btn color="success" > <span>Cotizar </span> </v-btn>
       <v-spacer></v-spacer>
       <v-text-field>
       </v-text-field>  

      <hr>
      <router-link
        to="/shoppingcartview"  >

        <v-spacer></v-spacer>

     
     
       <v-btn
          color="success"
          value="feed"
          name="shoppinbtn"
        >
          <span>Modificar Pedido </span>
          <v-icon> mdi-cart-plus</v-icon>
        </v-btn>

      </router-link>
      
     
     </v-col>
     <v-col cols="8"  md="9"> 
      <cotizador />
     
     </v-col>
     </v-row>
      
    </v-container>
     </div>
</template>

<script>
// @ is an alias to /src
import cotizador from "@/components/cotizador";
import ShoppingCart from "@/components/ShoppingCart"


export default {
  name: "Cotizar",
  components: {
    cotizador,
    ShoppingCart
  }
};
</script>
