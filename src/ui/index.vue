<template>
  <div class="app">
    <navbar></navbar>
    <div class="content">
      <div class="banner-item">
        <p>软件外包,产品外包</p>
        <p>第一站</p>
        <p><a class="p-publish">我要外包</a></p>
      </div>
      <div class="solution-group">
        <h3>优秀的解决方案</h3>
        <div class="solution-group-item">
          <img src="../../static/img/index_s_1.png" height="864" width="750" alt="">
          <a class="p-publish" @click="gotoPage(1)"></a>
        </div>
        <div class="solution-group-item">
          <img src="../../static/img/index_s_2.png" height="864" width="750" alt="">
          <a class="p-publish" @click="gotoPage(2)"></a>
        </div>
        <div class="solution-group-item">
          <img src="../../static/img/index_s_3.png" height="864" width="750" alt="">
          <a class="p-publish" @click="gotoPage(3)"></a>
        </div>
        <div class="solution-group-item">
          <a class="p-more" @click="gotoSolution()">查看更多</a>
        </div>
      </div>
      <div class="index-info">
        <img src="../../static/img/index_info.png" height="7186" width="750" alt="">
      </div>
      <div class="index-publish">
        <img src="../../static/img/CIRCLE_DOWN.png" height="36" width="36" alt="">
        <p><a class="p-publish" @click="gotoPage">发布外包</a></p>
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
      this.$router.push({ path: 'projectType' });
      this.$store.commit('changeShowBtn', { value: false });
    },
    gotoSolution() {
      this.$router.push({ path: 'solution' })

    }
  }
}

</script>
<style scoped lang="sass">
.content {
  position: relative;
  background-color: #fafafa;
  top: 126px;
  .banner-item {
    width: 100%;
    height: 540px;
    background: url('../../static/img/index_banner.png') no-repeat 0 0;
    p {
      color: #fff;
      font-size: 46px;
      line-height: 1.8;
      text-align: center;
      font-weight: bold;
      .p-publish {
        margin: 0 auto;
        display: block; // padding: 0px 81px;
        width: 280px;
        height: 94px;
        line-height: 94px;
        color: #1dc8ff;
        font-weight: normal;
        font-size: 30px;
        background-color: #fff;
      }
    }
    p:nth-child(1) {
      padding-top: 150px;
    }
    p:nth-child(3) {
      padding-top: 70px;
    }
  }
  .solution-group {
    margin-bottom: 20px;
    h3 {
      text-align: center;
      height: 120px;
      line-height: 120px;
      font-size: 36px;
      color: #000;
      font-family: "SimHei";
    }
    .solution-group-item {
      position: relative;
      .p-publish {
        position: absolute;
        bottom: 57px;
        left: 76px;
        display: block;
        width: 600px;
        height: 84px;
      }
      .p-more {
        display: inline-block;
        width: 100%;
        text-align: center;
        height: 108px;
        line-height: 108px;
      }
    }
  }
  .index-publish {
    img {
      margin: 40px auto;
    }
    p {
      width: 100%;
      .p-publish {
        margin: 0 auto;
        display: block;
        width: 200px;
        height: 74px;
        line-height: 74px;
        color: #fff;
        text-align: center;
        background-color: #1dc8ff;
        margin-bottom: 80px;
      }
    }
  }
}

</style>
