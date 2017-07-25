<template>
  <div class="navbar">
    <div class="navbar-icon"><img src="../../static/img/div_3.png" height="38" width="42" @click="changeShowCollapse" alt=""></div>
    <div class="p-publish" v-show="showBtn" @click="gotoPage">我要外包</div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  created() {

  },
  computed: {
    showBtn() {
      return this.$store.state.showBtn;
    }
  },
  methods: {
    changeShowCollapse() {
      this.$store.commit('changeShowCollapse', { value: true })
    },
    gotoPage() {
      this.$router.push({ path: 'projectType' });
      this.$store.commit('changeShowBtn', { value: false });
    }
  }
}

</script>
<style scoped lang="sass">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 126px;
  padding: 26px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0px 20px 0px #cbcbcb;
  background-color: #fff;
  z-index: 50;
  .p-publish {
    width: 200px;
    height: 74px;
    background: url('../../static/img/p_publish.png') no-repeat 0 0;
    border-radius: 5px;
    color: #fff;
    font-size: 30px;
    font-family: "SimHei";
    text-align: center;
    line-height: 74px;
  }
}

</style>
