<template>
  <div class="app">
    <navbar></navbar>
    <div class="content">
      <div class="login-form">
        <h3>登录软件外包</h3>
        <div class="form-item">
          <input type="text" v-model.trim="user.mobile" placeholder="手机号">
        </div>
        <p v-show="showNameWarn" class="warning-item">手机号码必须11位</p>
        <div class="form-item code-item">
          <input type="text" v-model.trim="user.code" placeholder="验证码">
          <a class="get-code" @click="get_code">获取验证码</a>
        </div>
        <p v-show="showCodeWarn" class="warning-item">验证码不能为空</p>
        <div class="form-item submit-item">
          <a class="p-login" @click="p_submit">登录</a>
        </div>
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
import qs from "qs"
export default {
  data() {
    return {
      user: {},
      showNameWarn: false,
      showCodeWarn: false
    }
  },
  components: {
    navbar: navbar
  },
  created() {

  },
  methods: {
    p_submit() {
      var self = this;
      let mobile = this.user.mobile;
      let code = this.user.code;
      let reg = /^1[3|4|5|7|8][0-9]{9}$/;
      if (!reg.test(mobile)) {
        this.showNameWarn = true;
        return;
      }
      if (!code) {
        this.showCodeWarn = true;
        return;
      }
      // var data = { mobile: "15039112042", code: "8888" };
      let data = { mobile: mobile, code: 8888 }
      axios.post('/user/login', qs.stringify(data)).then((response) => {
        console.log(response);
        if (response.status == 200 && response.data.status == 1) {
          self.$store.commit('changeShowLogin', { value: true });
          self.$store.commit('changeUser', response.data);
          this.$router.push({ path: 'myProject' });
        }
      })
    },
    get_code() {

    }
  }
}

</script>
<style scoped lang="sass">
.content {
  position: relative;
  top: 126px;
  .login-form {
    width: 100%;
    padding: 0 40px;
    h3 {
      padding: 50px 0px;
      font-size: 46px;
      color: #000;
      font-family: "SimHei";
    }
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
    .form-item:nth-child(2) {
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
    .form-item.submit-item {
      padding-right: 0px;
      padding-left: 0px;

      .p-login {
        display: block;
        width: 100%;
        height: 100%;
        background-color: #1dc8ff;
        line-height: 86px;
        text-align: center;
        color: #fff;
      }
    }
  }
}

</style>
