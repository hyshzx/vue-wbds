<template>
  <div class="app">
    <navbar></navbar>
    <div class="content">
      <h3>我发布的项目</h3>
      <div class="project-empty">
        <p><img src="../../static/img/project_empty.png" height="66" width="66" alt=""></p>
        <p>还没有提交过外包委托</p>
        <p>马上发布一个</p>
        <p><a class="p-publish">发布外包</a></p>
      </div>
      <div class="company-code">
        <img src="../../static/img/qrcode_2.png" height="579" width="750" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "../components/navbar.vue"
import axios from "axios"
export default {
  data() {
    return {

    }
  },
  components: {
    navbar: navbar
  },
  created() {
    axios.get('/user/project?user_id=1').then((response) => {
      console.log(response);
    })
  },
  methods: {

  }
}

</script>
<style scoped lang="sass">
.content {
  position: relative;
  top: 126px;
  background-color: #fafafa;
  h3 {
    padding: 50px 40px;
    font-size: 46px;
    color: #000;
    font-family: "SimHei";
  }
  .project-empty {
    background-color: #fff;
    p {
      text-align: center;
      color: #646464;
      font-size: 30px;
      line-height: 1.4;
      img {
        margin: 0 auto;
      }
      .p-publish {
        margin: 0 auto;
        display: block;
        width: 200px;
        height: 74px;
        line-height: 74px;
        color: #fff;
        background-color: #1dc8ff;
      }
    }
    p:nth-child(1) {
      padding-top: 60px;
      padding-bottom: 40px;
      line-height: 1;
    }
    p:nth-child(4) {
      line-height: 1;
      margin-top: 20px;
      padding-bottom: 40px;
    }
  }
}

</style>
