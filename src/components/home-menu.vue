<template>
  <div class="conteudo">
    <ul>
      <router-link to="/">
        <li>
          <img class="imagem-brasao" src="@/assets/brasao_pc.png" alt="Course "/>
        </li>
      </router-link>
      <router-link to="/">
        <li>Início</li>
      </router-link>
      <router-link to="/about">
        <li>Sobre</li>
      </router-link>
      <router-link to="/categories">
        <li>Categorias</li>
      </router-link>
      <router-link to="products">
        <li>Produtos</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeMenu",
};
</script>

<style lang="scss" scoped>
.conteudo {
  ul {
    justify-content: space-around;
    display: flex;
    list-style: none;
    align-items: center;
    li {
      margin-left: 1%;
      width: 100px;
    }
  }
  .imagem-brasao {
    width: 80px;
  }
}
</style>