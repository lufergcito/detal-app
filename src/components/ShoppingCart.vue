<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<template>
  <v-data-table 
    :headers="headers"
    :items="mishoppingcart"
    :items-per-page="10"
    class="elevation-2 "
    height="350"
  

       ></v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Id',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Referencia', value: 'referencia' },
          { text: 'Cantidad', value: 'cantidad' },
          { text: 'Precio', value: 'precio' },
          { text: 'Total', value: 'total' },
         
        ],
       
      }
    },
    computed:{
       mishoppingcart(){
         return this.$store.state.shoppingcart;

       }


    }
  }
</script>
<style   >
  .mitabla1  {
    background-color: black;
    border-bottom: none;
}

  </style