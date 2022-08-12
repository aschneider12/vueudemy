import * as types from './mutations-types'

export default {
    [types.GET_PRODUCTS](state, payload){
        state.products = payload;
    },
    [types.ADD_PRODUCTS](state, payload){
        state.products = payload;
    },
    [types.FIND_PRODUCT](state, payload){
        console.log('chegou no map state payload', payload)
        state.product = payload;
    },
    [types.UPDATE_PRODUCT](state, payload){
        state.product = payload;
    },
    [types.DELETE_PRODUCT](state, payload){
        state.product = payload;
    }

}

