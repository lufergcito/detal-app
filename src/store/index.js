import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shoppingcart: [],
     productos: [
        {
          id: "2020",
          referencia: "DAC0524554-DS254KJ-JHD-6574",
          descripcion: "RODAMIENTO DE ACERO PARA CARRO",
          alterna: "LUFERG",
          marca: "KOYO JAPON",
          costo: 85,
          saldo: 10,
          precio: 0.0,
          cantidad: 0,
          total: 0,
          adicionado: false
        },
        {
          id: "2021",
          referencia: "13104-KVC-900",
          descripcion: "KIT PISTON HONDA E-STORM 125 075",
          alterna: "Alterna01",
          marca: "KOYO JAPON",
          costo: 47,
          saldo: 10,
          precio: 0.0,
          cantidad: 0,
          total: 0,
          adicionado: false
        },
        {
          id: "2022",
          referencia: "7PK-1095",
          descripcion:
            "CORREA ALT.TOY.HILUX/TACOMA/HIACE 1KD/2K ALT.BELT TOY.HILUX/TACOMA/HIACE 1KD/2K",
          alterna: "Alterna01",
          marca: "KOYO JAPON",
          costo: 72,
          saldo: 10,
          precio: 0.0,
          cantidad: 0,
          total: 0,
          adicionado: false
        },
        {
          id: "2023",
          referencia: "DAC0524554-DS254KJ-JHD-6574",
          descripcion: "RODAMIENTO DE ACERO PARA CARRO",
          alterna: "Alterna01",
          marca: "KOYO JAPON",
          costo: 80,
          saldo: 25,
          precio: 0.0,
          cantidad: 0,
          total: 0,
          adicionado: false
        },
        {
          id: "2024",
          referencia: "8-09158-003-0",
          descripcion:
            "TENSOR COR.CHE.CORSA EVOL/OPTRA 1.8/ BELT TENSIONER CHE.CORSA EVOL/OPTRA 1.8/",
          alterna: "Alterna01",
          marca: "KOYO JAPON",
          saldo: 10,
          costo: 97,
          precio: 0.0,
          cantidad: 0,
          total: 0,
          adicionado: false
        },
        {
          id: "2025",
          referencia: "8-92028-817-0-025",
          descripcion:
            "CASQ.BIELA LUV2.2/OPTRA 1.8/ESPE/NUBI/ CONROD BEARING LUV2.2/OPTRA 1.8/ESPE/NUB",
          alterna: "Alterna01",
          marca: "KOYO JAPON",
          costo: 66,
          saldo: 10,
          precio: 0.0,
          cantidad: 0,
          total: 0,
          adicionado: false
        },
        {
          id: "2026",
          referencia: "8-92061-696-0",
          descripcion:
            "EMPAQUE MOTOR ISU.LUV 2200 FULL SET GASKET ISU.LUV 2200",
          alterna: "Alterna01",
          marca: "KOYO JAPON",
          costo: 53,
          saldo: 10,
          precio: 0.0,
          cantidad: 0,
          total: 0,
          adicionado: false
        },
        {
          id: "2027",
          referencia: "8-94108-914-4",
          descripcion: "BOMBA PPAL.FRENO.ISU/I-MARK 13/16",
          alterna: "Alterna01",
          marca: "KOYO JAPON",
          costo: 22,
          saldo: 10,
          precio: 0.0,
          cantidad: 0,
          total: 0,
          adicionado: false
        },
        {
          id: "2028",
          referencia: "8-94110-559-1",
          descripcion: "GORROS VALV.CHEV.CORSA 1.7",
          alterna: "Alterna01",
          marca: "KOYO JAPON",
          costo: 35,
          saldo: 10,
          precio: 0.0,
          cantidad: 0,
          total: 0,
          adicionado: false
        },
        {
          id: "2029",
          referencia: "MR296296-PLUS",
          descripcion: "BOMBA DIR.HID.MIT.L200 K7 T,K6 T",
          alterna: "Alterna01",
          marca: "KOYO JAPON",
          costo: 84,
          saldo: 10,
          precio: 0.0,
          cantidad: 0,
          total: 0,
          adicionado: false
        },
        {
          id: "2030",
          referencia: "ZL02-12-121",
          descripcion: "VALVULA ESC.MAZ.ZL",
          alterna: "Alterna01",
          marca: "KOYO JAPON",
          costo: 80,
          saldo: 10,
          precio: 0.0,
          cantidad: 0,
          total: 0,
          adicionado: false
        }
      ],
      listaPrecios:[] ,


  },
  mutations: {
    ADD_CARTITEM(state, producto){
       state.shoppingcart.push(producto)

    },
    DEL_CARTITEM(state, cartitem) {
      let indice = state.shoppingcart.indexOf(cartitem)
      state.shoppingcart.splice(indice,1) ;


    }
  },
  actions: {
    additemshoppingcart({commit},producto) {
       commit('ADD_CARTITEM', producto);
    },
    deleteCartShopItem({ commit }, cartItem) { 
      commit("DEL_CARTITEM", cartItem)
      
    }
  },
  modules: {}
});
