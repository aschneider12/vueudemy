<template>
  <div>
    <h1>todos os produtos</h1>
    <div class="principal">
      <ul>
        <li>
          <div class="dados" id="id" ><strong>ID</strong>
          </div>
          <div class="dados" id="price"><strong>VALOR</strong>
          </div>
          <div class="dados" id="name"><strong>PRODUTO</strong>
          </div>
          <div class="dados" id="amount"> <strong>QTD</strong>
          </div>
        </li>
      </ul>
    </div>
    <div class="principal" v-for="tupla in dados_local" :key="tupla.id">
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
        </li>
      </ul>
    </div>
    <hr />
    <h1>somente categoria papelaria</h1>
    <div class="mt-4" v-for="tupla in dados_local" :key="tupla.id">
      <div v-if="tupla.category.name == 'Papelaria'">{{ tupla.name }}</div>
    </div>
  </div>
</template>

<script>
import banco from "@/data/data.json";

export default {
  data() {
    return {
      dados_local: banco,
    };
  },
  methods: {

    dinheiro(valor) {

        return 'R$'+valor.toFixed(2);
    }
  }
};
</script>

<style lang="scss" scoped>
.principal {
    padding: 0.01%;
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