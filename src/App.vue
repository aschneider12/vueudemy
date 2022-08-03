<template>
  
  <nav>
    <HomeMenu/>
    <hr/>

  </nav>

  <router-view/>
</template>

<script>

import HomeMenu from './components/home-menu.vue';

export default {
    components: { HomeMenu }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  hr {
    border-bottom: 1.4px solid;
    border-color: #39393b;
  }
  padding: 5px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
