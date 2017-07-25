<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="collapse"></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}

</script>
<style lang="sass">
@import "./lib/common.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
