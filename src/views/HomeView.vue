<template>
  <div class="home">
    <h1>TELA INICIAL</h1>

    <img class="brasao-image" src="@/assets/brasao_pc_pb.png" alt="Brasao" />

    <div class="items">

      <div class="card text-white bg-info mb-3" style="max-width: 80%">
        <div class="card-header">Produtos</div>
        <div class="card-body">
          <h5 class="card-title">Info card title--</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div class="card bg-light mb-3" style="max-width: 80%">
        <div class="card-header">Categorias</div>
        <div class="card-body">
          <h5 class="card-title">titulo das categorias</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: space-around;
  .items {
    max-width: 50%;
  }
}
.brasao-image {
  width: 400px;
  opacity: 15%;
}

</style>