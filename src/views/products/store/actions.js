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
  //se vc vai salvar uma lista inteira de produtos coloque salvarListaProdutos()
  //nao coloque salvarProdutos(produto) -> se vc vai salvar um so produto escreve salvarProduto()
  Axios.put('http://localhost:8081/products/'+productToUpdate.id, productToUpdate).then(response => {
    
    commit(types.UPDATE_PRODUCT, response.data);
  })
}

export const deleteProduct =  async ({ commit }, idToDelete) => { 
  console.log('chegou no delete',idToDelete)
  await Axios.delete('http://localhost:8081/products/'+idToDelete).then(response => {
    
    commit(types.DELETE_PRODUCT, response.data);
    console.log('fez commit do muttations')
    // getProducts();
  })
}