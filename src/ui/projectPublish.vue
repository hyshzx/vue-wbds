<template>
  <div class="app">
    <navbar></navbar>
    <div class="content">
      <div class="p-title">
        <h3>告诉我们更多关于项目的信息	</h3>
      </div>
      <div class="project-info">
        <h3>您的项目需求描述</h3>
        <form class="porject-form" onsubmit="return false">
          <div class="form-item name-item" :class="{'focus-item':currentFocus==1}">
            <input type="text" v-model="project.name" placeholder="项目名称。例如：滴滴打车Android客户端" @focus="currentFocus=1">
          </div>
          <p v-show="showPNameWarn" class="warning-item">请填写项目名称</p>
          <div class="form-item des-item" :class="{'focus-item':currentFocus==2}">
            <textarea v-model="project.description" placeholder="项目简介。例如：打算开发一个微信应用，市面上可参考的产品是 XXX，针对 XXX 领域和人群，主要目的是为了 XXX ..." @focus="currentFocus=2"></textarea>
          </div>
          <p v-show="showDescWarn" class="warning-item">请填写项目基本描述</p>
          <div class="form-item ref-item" :class="{'focus-item':currentFocus==3}">
            <input type="text" v-model="project.ref" placeholder="参考网站/产品" @focus="currentFocus=3">
          </div>
        </form>
      </div>
      <div class="project-cycle">
        <h3>	您期望的项目外包周期是多久？</h3>
        <ul class="p-trade-list">
          <li class="p-trade" v-for="item in cycleList" @click="chooseCycle(item.value)" :class="{'active':item.value==currentCycle}">{{item.label}} <img src="../../static/img/TICK.png" height="34" width="50" alt="" v-show="item.value==currentCycle"></li>
        </ul>
        <p v-show="showCycleWarn" class="warning-item">请选择项目外包周期</p>
      </div>
      <div class="project-login" v-if="unLogin">
        <form class="login-form" onsubmit="return false">
          <div class="form-item">
            <input type="text" v-model.trim="user.mobile" placeholder="手机号">
          </div>
          <p v-show="showNameWarn" class="warning-item">手机号码必须11位</p>
          <div class="form-item code-item">
            <input type="text" v-model.trim="user.code" placeholder="验证码">
            <a class="get-code" @click="get_code">获取验证码</a>
          </div>
        </form>
      </div>
      <div class="project-publish">
        <a class="p-publish" @click="p_submit">发布项目</a>
      </div>
      <div class="company-code">
        <img src="../../static/img/qrcode_2.png" height="579" width="750" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "../components/navbar.vue"
export default {
  data() {
    return {
      project: {
        name: null,
        description: null,
        ref: null
      },
      showPNameWarn: false,
      showDescWarn: false,
      showCycleWarn: false,
      currentCycle: null,
      currentFocus: null,
      unLogin: false,
      showNameWarn: false,
      showCodeWarn: false,

      user: {},
      cycleList: [{
        label: '超过6个月',
        value: '超过6个月'
      }, {
        label: '3-6个月',
        value: '3-6个月'
      }, {
        label: '1-3个月',
        value: '1-3个月'
      }, {
        label: '少于1个月',
        value: '少于1个月'
      }]
    }
  },
  components: {
    navbar: navbar
  },
  created() {
    this.$store.commit('changeShowBtn', { value: false });
    if (!window.localStorage.getItem('token')) {
      console.log(1);
      this.unLogin = true;
    }
    console.log(window.localStorage.getItem('token'));

  },
  destroyed() {
    this.$store.commit('changeShowBtn', { value: true });
  },
  methods: {
    chooseCycle(value) {
      this.currentCycle = value;
    },
    get_code() {

    },
    p_submit() {
      let project = this.$store.state.project;
      if (!this.project.name) {
        this.showPNameWarn = true;
      }
      if (!this.project.desc) {
        this.showDescWarn = true;
      }
      if (!this.project.cycle) {
        this.showCycleWarn = true;
      }
      if (!this.unLogin) {

      }
    }
  }
}

</script>
<style scoped lang="sass">
.content {
  position: relative;
  top: 126px;
  background-color: #fafafa;
  font-family: "SimHei";
  .p-title {
    width: 100%;
    height: 140px;
    padding: 0px 40px;
    border-bottom: 1px solid #cbcbcb;
    h3 {
      font-size: 44px;
      color: #1dc8ff;
      line-height: 140px;
      font-family: "SimHei";
    }
  }
  .project-info {
    width: 100%;
    h3 {
      padding: 0px 40px;
      color: #000;
      font-size: 36px;
      height: 120px;
      line-height: 120px;
      font-family: "SimHei";
    }
    .porject-form {
      width: 100%;
      padding: 0px 40px;
      background-color: #fff;
      .form-item {
        width: 100%;
        margin-bottom: 20px;
      }
      .warning-item {
        color: #d43629;
        margin-bottom: 20px;
      }
      .name-item,
      .ref-item {
        height: 100px;
        padding: 20px 50px;
        border: 2px solid #b5b5b5;
        input {
          width: 100%;
          height: 50px;
          line-height: 50px;
          font-size: 28px;
        }
      }
      .des-item {
        height: 450px;
        padding: 37px 50px;
        border: 2px solid #b5b5b5;
        textarea {
          width: 100%;
          height: 100%;
          font-size: 28px;
        }
      }
      .focus-item {
        border-color: #666;
      }
    }
  }
  .project-cycle {
    width: 100%;
    h3 {
      padding: 0px 40px;
      color: #000;
      font-size: 36px;
      height: 120px;
      line-height: 120px;
      font-family: "SimHei";
    }
    .p-trade-list {
      background-color: #fff;
      width: 100%;
      .p-trade {
        width: 100%;
        padding: 0px 40px;
        height: 120px;
        color: #969696;
        font-size: 36px;
        line-height: 120px;
        border-top: 1px solid #cbcbcb;
        border-bottom: 1px solid #cbcbcb;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .p-trade.active {
        color: #1dc8ff;
        border-top: 1px solid #1dc8ff;
        border-bottom: 1px solid #1dc8ff;
      }
    }
    .warning-item {
      color: #d43629;
      padding-left: 40px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  .project-publish {
    width: 100%;
    height: 140px;
    padding: 28px 40px;
    .p-publish {
      display: block;
      width: 100%;
      height: 84px;
      background: url('../../static/img/p_publish_2.png') no-repeat 0 0;
      text-align: center;
      line-height: 84px;
      color: #fff;
    }
  }
  .login-form {
    width: 100%;
    padding: 0 40px;
    margin-top: 30px;

    .warning-item {
      color: #d43629;
      margin-bottom: 20px;
    }
    .form-item {
      width: 100%;
      height: 86px;
      padding: 0px 20px;
      line-height: 86px;

      background-color: #fff;
      margin-bottom: 30px;
      position: relative;
    }
    .form-item:nth-child(1) {
      box-shadow: 0 0 0 4px #e6e6e6;
      input {
        width: 100%;
        font-size: 28px;
      }
    }
    .form-item.code-item {
      padding-right: 0px;
      box-shadow: 0 0 0 4px #e6e6e6;
      input {
        width: 400px;
        font-size: 28px;
      }
      .get-code {
        position: absolute;
        right: 0;
        width: 200px;
        height: 86px;
        text-align: center;
        line-height: 86px;
        color: #1dc8ff;
        border-left: 4px solid #e6d6e6;
      }
    }
  }
  .company-code {
    background-color: #fff;
    padding-top: 100px;
  }
}

</style>
