<template>
  <div>
    <div class="categories">
      <div class="vuex">
        {{count}}
        <button v-on:click="incrementar">+ Clique</button>
      </div>
      <hr/>
      <div class="class-produtos">
        lista do products state: {{s_products}}
        <input type="text" v-model="m_produtos"/>
        <button v-on:click="actionAddProduto(m_produtos)" class="btn btn-primary mt-4">SUBMITER</button>
      </div>
      <h1>Categorias</h1>
      <div class="list" v-for="category in categories" :key="category.id">

        <div class="dados">{{category.id}}</div>
        <div class="dados"> {{category.name}}</div>
        
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  data(){
    return {
      categories: {}
    }
  },
  methods: {
    getCategories(){
      axios.get('http://localhost:8081/categories').then(resp => {
        this.categories = resp.data
      })
    },
    //addCount(){
     // this.$store.commit('incrementar')
    //},
    ...mapMutations(['incrementar']),

    ...mapActions(['actionAddProduto'])
  },
  created(){
    console.log('criou o categories')
    this.getCategories();
  },
  computed:{
    //contador(){
    // return this.$store.state.count
    //},
    ...mapState(['count','s_products'])

  }
  
}
</script>

<style lang="scss" scoped>
.categories {
  align-items: center;
  text-align: center;
  .list{
    align-items: center;
    padding: 1%;
    display: flex;
    justify-content: center;
    .dados {
      padding: 0.1%;
    }
  }
}
.vuex {
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: 900;
  align-items: center;
}
.class-produtos {
  display: flex;
  flex-direction: column;
  align-items: center;
  input{
    border-bottom: solid 1px black;
  }
}
</style>