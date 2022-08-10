<template>
  <div class="cabecalho">
    <h1>Cadastrar produto</h1>
  </div>
  <div class="main">
    <div class="form">
      <form>
        <div class="row">
          <label>Descrição</label>
          <input v-model="form.name" class="ml-3" type="text" placeholder="informe a descrição do produto"/>
        </div>
        <div class="row">
          <label>Quantidade</label>
          <input v-model="form.amount" class="ml-3" type="number" placeholder="informe qtd" />
        </div>
        <div class="row">
          <label>Preço</label>
          <input class="ml-3" v-model="form.price" type="text" />
        </div>
        <div class="btn-salvar">
          <button class="btn btn-primary" v-on:click="addProdutos">Salvar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {

    data(){
        return {
            form: {
                name: '',
                amount: '',
                price: ''
            }    
        }
    },
    methods:{ 
        ...mapActions('productsModule',['addProducts']),

        addProdutos(event){
           console.log('event',event )

            var dadosAdd = { 
                name: this.form.name,
                amount: this.form.amount,
                price: this.form.price
            }
             console.log('dados', dadosAdd)
            this.addProducts(dadosAdd);
            this.form.name = 'limpado';
        },
    }

};
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