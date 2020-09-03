<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<template>
    <div class="cartd">
        
  <v-row>
    <v-col cols="12" md="2">
     
    </v-col>

     <v-col cols="12" md="8" >
         <v-text-field
        label="Cliente"
        prepend-icon="mdi-account-circle"
      />        
        
         </v-col> 
  </v-row>   
   <v-divider></v-divider>
    <v-divider></v-divider>
  <v-row>  
    <v-col cols="12" md="2"> 
     <v-btn color="success "  > <span>Facturar </span> </v-btn>  
      
 <v-spacer></v-spacer>
 <br>

   
     <v-btn color="success"  > <span>Cotizar </span> </v-btn>
     <v-spacer></v-spacer>
      <br>
  
     <v-btn color="success" > <span>Eliminar </span> </v-btn>
     <v-spacer></v-spacer>
      <br>
     <v-btn color="success " @click="generarPDF"> <span>Imprimir </span> </v-btn> 
     <v-spacer></v-spacer> 
     
       
    </v-col>  
    <v-col cols="12" md="10">  
  <v-data-table
    :headers="headers"
    :items="mishoppingcart"
    :items-per-page="5"
    class="elevation-1" 
     @click:row="clickFila"
    >
    
        <template v-slot:item.action1="{ item }">
          <v-icon large color="red" class="mr-2" >
            mdi-plus-circle
          </v-icon>
          <v-icon large class="mr-2" @click="">
            mdi-minus-circle
          </v-icon>
                 </template>
          <template v-slot:item.action2="{ item }">
           <v-icon large color="blue" class="mr-2" @click="deleteItem" >
            mdi-delete-forever
          </v-icon>
              </template>
        <template v-slot:item.action3="{ item }">
            <v-select
              :items="precios"
               @input="setSelected"
               label="" ></v-select>
                
          
        </template>
        


  </v-data-table>
   </v-col>

  </v-row>
</div>
</template>

<script>
  import jsPDF from 'jspdf'
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Id',
            align: 'start',
            sortable: false,
            value: 'id',
             miLista: "" ,
             indiceActual: -1,
          },
          { text: 'Referencia', value: 'referencia' },
          { text: 'Cantidad', value: 'cantidad' },
          { text: 'Precio', value: 'precio' },
          { text: 'Total', value: 'total' },
          { text: 'E', value: 'action1' },
          { text: 'P', value: 'action2' },
          { text: 'm', value: 'action3' },
          
         
        ],
           precios: [
           {text:"Precio1", valor:300},
           {text:"Precio2", valor:250},
           {text:"Precio3", valor:200},
           {text:"Precio4", valor:150},
           {text:"Precio5", valor:100},
           {text:"Precio6", valor:90},
          
             ],
          
       
      }
    },
    computed:{
       mishoppingcart(){
         return this.$store.state.shoppingcart;

       }


    },
    methods:{
      setSelected(value) {
        //  trigger a mutation, or dispatch an action  
       
        let resultado = [];
            for(var i=0; i<this.precios.length; i++) {
             // for( const indice in this.precios[i]) {
                 if(this.precios[i].text.indexOf(value)!=-1) {
                        resultado.push(this.precios[i]);    }
             // }
              }

         console.log(resultado[0].valor);
         let margenLinea = resultado[0].valor;
        // console.log(margenLinea)
         this.$store.state.shoppingcart[this.indiceActual].precio = this.$store.state.shoppingcart[this.indiceActual].costo *(margenLinea/100)
         //let nuevoPrecio = this.$store.state.shoppingcart[this.indiceActual].costo  ;
         //let precioViejo = this.$store.state.shoppingcart[this.indiceActual].precio ;
         //console.log("NUevo Precio " + nuevoPrecio);
         // console.log("Viejo Precio " + precioViejo);

     } ,
     clickFila(value) {
        console.log(value);
         this.indiceActual = this.$store.state.shoppingcart.indexOf(value) ;
           },

     deleteItem (item) {
     //   const index = this.desserts.indexOf(item)
     //   confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      this.$store.dispatch("deleteCartShopItem", item)
      },
      generarPDF(){
         let doc = new jsPDF() ;
         doc.text('Hola MUndo',10,10)
         doc.save('prueba.pdf')

      }
    }
  }
</script>