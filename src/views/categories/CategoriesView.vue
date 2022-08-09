<template>
  <div>
    <div class="categories">
      <h1>Categorias</h1>
      <div class="list" v-for="category in categoriesModule.categories" :key="category.id">

        <div class="dados">{{category.id}}</div>
        <div class="dados"> {{category.name}}</div>
        
      </div>
    </div>
  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default {
  data(){
    return {
      // categories: {}
    }
  },
  methods: {
    
    ...mapActions(['getCategories'])

    // getCategories(){
    //   axios.get('http://localhost:8081/categories').then(resp => {
    //     this.categories = resp.data
    //   })
    // },
    //addCount(){
     // this.$store.commit('incrementar')
    //},
    

  },
  created(){
    console.log('criou o categories')
    this.getCategories();
    console.log(this.categories)
  },
  computed:{
    ...mapState(['categoriesModule'])
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