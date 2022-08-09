import state from './state'
import mutations from './mutations'
import * as mutationsTypes from './mutations-types'
import * as actions from './actions'
//import { getProducts } from './actions' outra forma de fazer, mas importa somente o metodo

export default {
    state,
    mutations,
    mutationsTypes,
    actions,
    namespaced:true
}