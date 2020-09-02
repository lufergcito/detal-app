<template>
  <v-container>

    <v-card>

      <v-row>
        <v-col cols="4" > 
          <v-text-field 
            :type="showMargen ? 'text' : 'password'"
						label="Margen Inicial"
						prepend-icon="mdi-lock"
						:append-icon="showMargen ? 'mdi-eye' : 'mdi-eye-off'"
						@click:append="showMargen = !showMargen" 
            v-model="margenInicial">
          </v-text-field>  

        </v-col>
        <v-btn color="success" @click="resetLista" >
           <v-span>Reset List
              </v-span> 
        </v-btn> 
        <v-col cols="4">
        <v-select  width="100"
        v-model="selectedHeaders"
        :items="headers"
        label="Columnas Seleccionadas"
        multiple
        outlined
        return-object  >
        <template v-slot:selection="{ item, index }">
          <v-chip v-if="index < 2">
            <span>{{ item.text }}</span>
          </v-chip>
          <span v-if="index === 2" class="grey--text caption"
            >(+{{ selectedHeaders.length - 2 }} others)</span
          >
        </template>
      </v-select>
       </v-col>
      </v-row>
      <v-data-table
        :headers="showHeaders"
        :items="misProductos"
        :items-per-page="5"
        :search="search"
        item-key="id"
        show-expand
        class="elevation-3"
        height="350"
        dense
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Lista precios</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-switch
              v-model="singleExpand"
              label="Single expand"
              class="mt-2"
            ></v-switch>
          </v-toolbar>
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
          <v-row >
            <v-col cols="12" md="8">
            
              {{ item.descripcion + "   "  + item.alterna }}
            </v-col>
            <v-col cols="12" md=2>  
            <v-slider
        v-model="listas"
        :tick-labels="ticksLabels"
        :max="3"
        step="1"
        ticks="always"
        tick-size="4"
      ></v-slider>
            
            </v-col>
            </v-row>
          </td>
        </template>


        <template v-slot:item.action1="{ item }">
          <v-icon large color="red" class="mr-2" @click="addCantidad(item)">
            mdi-plus-circle
          </v-icon>
          <v-icon large class="mr-2" @click="dismCantidad(item)">
            mdi-minus-circle
          </v-icon>
                 </template>
        <template v-slot:item.action2="{ item }">
           <v-icon large color="blue" class="mr-2" @click="addtoCart(item)">
            mdi-cart-plus
          </v-icon>
        </template>
        <template v-slot:item.alterna="{ item }">
          <v-icon large color="blue" class="mr-2" @click="addtoCart(item)">
            mdi-engine
          </v-icon>
        </template>

      </v-data-table>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon=""
          label="Busqueda"
          outlined
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "cotizador",
  data() {
    return {
       value: 0,
        listas: 0,
        margenInicial: 200,
        ticksLabels: [
          'p1',
          'p2',
          'p3',
          'p4',
        ],
      expanded: [],
      singleExpand: false,
      showMargen: false,
      search: "",
      headers: [],
      misProductos:[],
      headersMap: {
        id: { text: "ID", align: "start", sortable: true, value: "id" },
        referencia: { text: "REFERENCIA", value: "referencia" },
        descripcion: { text: "DESCRIPCION", value: "descripcion" },
        alterna: { text: "ALTERNAS", value: "alterna" },
        marca: { text: "MARCA", value: "marca" },
        costo: { text: "COSTO", value: "costo" },
        saldo: { text: "SALDO", value: "saldo" },
        precio: { text: "PRECIO", value: "precio" },
        cantidad: { text: "CANTIDAD", value: "cantidad" },
        total: { text: "TOTAL", value: "total" },
        action1: { text: "", value: "action1", sortable: false },
        action2: { text: "", value: "action2", sortable: false },
        data: { text: "Informacion Adicional", value: "data-table-expand" }
      },
      precios: [
        {text:"PRECIO 1", value:"precio1"},
        {text:"PRECIO 2", value:"precio2"},
        {text:"PRECIO 3", value:"precio3"},
        {text:"PRECIO 4", value:"precio4"},
        {text:"PRECIO 5", value:"precio5"},
        {text:"PRECIO 6", value:"precio6"},
      ],
      selectedHeaders: [],
      
    };
  },
  created() {
    this.headers = Object.values(this.headersMap);
    this.selectedHeaders = this.headers;
    this.misProductos = this.$store.state.productos;
    
    this.misProductos.precio = this.misProductos.costo * (this.margenInicial/100)
  },
  beforeUpdated(){
     
     console.log("valor" +  this.value)

   


  },
  computed: {
    //Done to get the ordered headers
    showHeaders() {
      return this.headers.filter(s => this.selectedHeaders.includes(s));
    } ,
     
  },

  methods: {
   resetLista() {
    
    for (var i = 0; i < this.misProductos.length ; i++) {
      console.log(i)
     this.misProductos[i].precio = this.misProductos[i].costo * (this.margenInicial/100)        
   
}

   },
   
    addtoCart(item) {
       let indice = this.misProductos.indexOf(item)
       if (this.misProductos.[indice].adicionado==false) {

         let newCartItem= { id: this.misProductos[indice].id,
                            referencia: this.misProductos[indice].referencia,
                            cantidad: this.misProductos[indice].cantidad,
                            costo: this.misProductos[indice].costo,
                            precio: this.misProductos[indice].precio ,
                             total: this.misProductos[indice].total };
           this.$store.dispatch("additemshoppingcart", newCartItem)
                
         console.log(newCartItem);
        
         this.misProductos[indice].adicionado=true
       }
    },

    addCantidad(item) {
   
    console.log("Listas " +  this.listas)
    let indice = this.misProductos.indexOf(item)
    ++this.misProductos[indice].cantidad  
    this.misProductos[indice].total = this.misProductos[indice].cantidad * this.misProductos[indice].precio
    } ,

    dismCantidad(item) {
    
    let indice = this.misProductos.indexOf(item)
    
      if (this.misProductos.[indice].cantidad>0) { 
        --this.misProductos[indice].cantidad}  
         this.misProductos[indice].total = this.misProductos[indice].cantidad * this.misProductos[indice].precio
        }


  }
};
</script>
