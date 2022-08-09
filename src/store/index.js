import Vuex  from 'vuex'
import {store as productsModule } from '@/views/products'
import {store as categoriesModule } from '@/views/categories'



const store = new Vuex.Store({
  modules: {
    categoriesModule,
    productsModule
  }
})

export default store
// ciclo do STORE VUEX
// componenent -> chama uma action (processa, envia para a API )
// export default createStore({
//   state: {
//     count:0,
//     s_products: []
//   },
//   getters: {
//   },
//   mutations: {
//     incrementar(state){
//       console.log('chamou o incrementar')
      // state.count++;
//     },
//     //qndo o action chamar/commitar o mutation, ele enviara para um render que atualiza a tela, esse e o ciclo conforme https://vuex.vuejs.org/#what-is-a-state-management-pattern
//     mutationAddProduto(state, payload){
//       console.log(payload, 'mutation')
//       state.s_products.push(payload)
//     }
    
//   },
//   actions: {

//     // a action inicia o update do estado, pode ser assincrona, qndo ela commitar ela chama o mutation, que vai refletir no render e ai na tela
//     //nao sao chamadas diretamente as mutations, pois elas sao sincronas, ou seja, nao faz sentido usar 
//     //uma arquitetura para ter o controle do estados dos componenttes e ficar chamando diretamente
//     actionAddProduto( {commit}, payload){
//       console.log(commit, 'context action')
//       console.log(payload, 'action')
    
//       commit('mutationAddProduto', payload)
//     }
//   },
//   modules: {

//   }
// })
