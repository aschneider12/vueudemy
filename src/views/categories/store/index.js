import Axios from 'axios'

export default {
    state: { 
        categories : []
    },
    mutations: {
        getCategoriesMutation(state, payload){
            state.categories = payload;
        }
    },
    actions: {
        getCategories({commit}){
            Axios.get('http://localhost:8081/categories').then(response => {
                console.log('retorno da base', response.data)
                commit('getCategoriesMutation', response.data)
            })
        }
    }
}