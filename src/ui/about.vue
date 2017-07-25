<template>
  <div class="app">
    <navbar></navbar>
    <div class="content">
      <img src="../../static/img/about.png" height="3680" width="750" alt="">
    </div>
  </div>
</template>
<script>
import navbar from "../components/navbar.vue"
export default {
  data() {
    return {

    }
  },
  components: {
    navbar: navbar
  },
  created() {

  },
  methods: {

  }
}

</script>
<style scoped lang="sass">
.content {
  position: relative;
  top: 126px;
}

</style>
