<template>
  <div class="main">
    <h2>Visualização do produto</h2>
    <h1>ID #{{id}}</h1>
    <div class="alert alert-success" v-if="status_success">
      <h4>Dados atualizados com sucesso!</h4>
    </div>
    <div class="alert-warning" v-else-if="status_error">
      <h4>{{message}}</h4>
    </div>
    <div class="form">
      <form>
        <div class="row">
          <label>Descrição</label>
          <input v-model="product.name" class="ml-3" type="text" placeholder="informe a descrição do produto"/>
        </div>
        <div class="row">
          <label>Quantidade</label>
          <input v-model="product.amount" class="ml-3" type="number" placeholder="informe qtd" />
        </div>
        <div class="row">
          <label>Preço</label>
          <input class="ml-3" v-model="product.price" type="text" />
        </div>
        <div class="btn-salvar">
          <button class="btn btn-warning" v-on:click="updateProduto(product)">Atualizar</button>
        </div>
      </form>
    </div>
    <hr>
    <router-link to="products"><button class="btn btn-success">Voltar</button></router-link>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
    data(){
        return {
            id: this.$route.params.id,
            message : 'ERROR',
            status_success : false,
            status_error : false
        }
    },
    computed: {
        ...mapState('productsModule',['product'])//mapeia diretamente o produto para esta classe
    }, 
//   computed:{
//     ...mapState(['productsModule']) //mapeia o modulo todo tendo acesso a qualquer 'state' disponivel no module
//   },
    methods: {
        ...mapActions('productsModule',['findProductById','updateProduct']),

        async updateProduto(produto){
          //nao sei pq isso, da pra chamar direto do form e enviar ao productUpdate
          var toUpdate = { 
                id: produto.id,
                name: produto.name,
                amount: produto.amount,
                price: produto.price
            }
            console.log(toUpdate)

            try {

              await this.updateProduct(toUpdate);
              this.status_success = true;
              await this.findProductById(produto.id);
              
            } catch (error) {
              
              console.log(error);
              this.message = error.data ? error.data.message : 'Não foi possível atualizar o produto';
              this.status_error = true
            }
        }
    },
    created(){

        this.findProductById(this.$route.params.id)
    }
}
</script>

<style lang="scss" scoped>
 .main {
    form {
    display: flex;
    flex-direction: column;
    align-items: center;
    .row {
      padding: 1.5%;
      display: flex;
      align-items: center;
      input {
          min-width: 300px;
        border: none;
        border-bottom: 1px solid gray;
      }
      input:focus{
        outline: none;
      }
    }
  }
 }
</style>