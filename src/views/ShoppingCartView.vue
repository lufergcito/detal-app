<template>
  <div class="ShoppingCartView">
  <h1>  ESTE ES EL HOME </h1>
     <CartModify/>
     
    
  </div>
</template>

<script>
// @ is an alias to /src
import CartModify from "@/components/CartModify"
 
export default {
  name: "ShoppingCartView",
  components: {
      CartModify
   
   
  }
};
</script>
