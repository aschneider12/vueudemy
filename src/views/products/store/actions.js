import Axios from 'axios'
import * as types from './mutations-types'

export const getProducts = ({ commit }) => {

    Axios.get('http://localhost:8081/products').then(response => {
      
      commit(types.GET_PRODUCTS, response.data);
    })
}

