<template>
  <div class="app">
    <navbar></navbar>
    <div class="content">
      <div class="solution-item">
        <img src="../../static/img/solution_1.png" height="864" width="750" alt="">
        <a class="p-publish" @click="gotoPage(1)"></a>
      </div>
      <div class="solution-item">
        <img src="../../static/img/solution_2.png" height="864" width="750" alt="">
        <a class="p-publish" @click="gotoPage(2)"></a>
      </div>
      <div class="solution-item">
        <img src="../../static/img/solution_3.png" height="864" width="750" alt="">
        <a class="p-publish" @click="gotoPage(3)"></a>
      </div>
      <div class="solution-item">
        <img src="../../static/img/solution_4.png" height="864" width="750" alt="">
        <a class="p-publish" @click="gotoPage(4)"></a>
      </div>
      <div class="solution-item">
        <img src="../../static/img/solution_5.png" height="864" width="750" alt="">
        <a class="p-publish" @click="gotoPage(5)"></a>
      </div>
      <div class="solution-item">
        <img src="../../static/img/solution_6.png" height="864" width="750" alt="">
        <a class="p-publish" @click="gotoPage(6)"></a>
      </div>
      <div class="company-code">
        <img src="../../static/img/qrcode_3.png" height="579" width="750" alt="">
      </div>
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
    gotoPage(value) {
      // let params={};
      this.$router.push({ path: 'projectType' });
      this.$store.commit('changeShowBtn', { value: false });
    }
  }
}

</script>
<style scoped lang="sass">
.content {
  position: relative;
  top: 126px;
  background-color: #fafafa;
  .solution-item {
    margin-bottom: 30px;
    position: relative;
    .p-publish {
      position: absolute;
      bottom: 57px;
      left: 76px;
      display: block;
      width: 600px;
      height: 84px;
    }
  }
  .solution-item:nth-child(1) {
    padding-top: 50px
  }

  .company-code {
    // margin-top: 100px;
  }
}

</style>
