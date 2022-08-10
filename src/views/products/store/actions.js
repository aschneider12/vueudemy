import Axios from 'axios'
import * as types from './mutations-types'

export const getProducts = ({ commit }) => {

    Axios.get('http://localhost:8081/products').then(response => {
      
      commit(types.GET_PRODUCTS, response.data);
    })
}

export const addProducts = ({ commit }, dadosAdd) => {

  Axios.post('http://localhost:8081/products', dadosAdd).then(response => {
    
    commit(types.ADD_PRODUCTS, response.data);
  })
}

export const findProductById = ({ commit }, id) => {
  
  Axios.get('http://localhost:8081/products/'+id).then(response => {
    
    commit(types.FIND_PRODUCT, response.data);
  })
}

export const updateProduct = ({ commit }, productToUpdate) => {//diferente do que ele faz nao é legal atualizar uma coisa e colocar no plural como se fosse uma lista
  
  Axios.put('http://localhost:8081/products/'+productToUpdate.id, productToUpdate).then(response => {
    
    commit(types.UPDATE_PRODUCT, response.data);
  })
}