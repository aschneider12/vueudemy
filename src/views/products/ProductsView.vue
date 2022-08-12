<template>
  <div>
    <div class="principal">
      <div class="topo">
        <h1>Produtos</h1>
        <button class="btn btn-success"><router-link to="products-register" class="link">Adicionar produto</router-link></button>
      </div>
      <ul>
        <li>
          <div class="dados" id="id" ><strong>ID</strong></div>
          <div class="dados" id="price"><strong>VALOR</strong> </div>
          <div class="dados" id="name"><strong>PRODUTO</strong> </div>
          <div class="dados" id="amount"> <strong>QTD</strong> </div>
          <div class="dados" id="action"> AÇÃO </div>
        </li>
      </ul>
    </div>
    <div class="principal" v-for="tupla in productsModule.products" :key="tupla.id">
      <ul>
        <li>
          <div class="dados" id="id" >
            {{ tupla.id }}
          </div>
          <div class="dados" id="price">
            {{ dinheiro(tupla.price) }}
          </div>
          <div class="dados" id="name">
            {{ tupla.name }}
          </div>
          <div class="dados" id="amount">
            {{ tupla.amount }} un
          </div>
          <div class="dados" id="action">
            
            <router-link v-bind:to="{ name: 'products-update', params: { id: tupla.id } }"   >
              <button class="btn btn-primary">VER</button>
            </router-link>
          
            <button class="btn btn-danger ml-2" v-on:click="excluirProduto(tupla.id)">EXCLUIR</button>
          
          </div>
        </li>
      </ul>
    </div>
    
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      // dados_local: banco,
    };
  },
  methods: {
    ...mapActions('productsModule',['getProducts', 'deleteProduct']),
    dinheiro(valor) {
        if(valor)
          return 'R$'+valor.toFixed(2);
        else
         return valor;
    },
    
    excluirProduto(id){

      
        console.log('excluindo id',id)
        // this.deleteProduct(id);

        this.deleteProduct(id).then(() => {
          console.log('ja vai atualizar')
          this.atualizaTela()
        })
        //ta excluindo so nao atualiza a tela pq o await nao ta funcionando como deveria


      

    }, 
    atualizaTela(){
      //this.getProducts()
      this.$router.go();
    }
  },
  computed:{
    ...mapState(['productsModule'])

  },
  created() {
    
    this.getProducts()
    // this.$router.go();
  }
};
</script>

<style lang="scss" scoped>
.principal {
    padding: 0.01%;
    .topo{
      display: flex;
      padding: 1.5%;
      justify-content: space-around;
      .btn {
        .link {
          text-decoration: none;
          color: white
        }
      }
    }
    ul {
        list-style-type: none;
        li {
            display: flex;
            justify-content: space-around;
            border: solid 1px gray;
            padding: 1%;
        }
        .dados {
            padding: 0.2%;
            border-right: solid 1px gray;
            border-left: solid 1px gray;
        }
        #id {
            min-width: 5%;
        }
        #name {
            min-width: 35%;
        }
        #amount, #price {
            min-width: 15%;
        }
    }
}
</style>