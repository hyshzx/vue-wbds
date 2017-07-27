<template>
  <div class="collapse" v-if="showCollapse">
    <div class="meun-icon"> <img src="../../static/img/div_2.png" @click="changeShowCollapse" height="46" width="46" alt=""></div>
    <div class="meun-group">
      <p class="meun-item" @click="gotoPage(1)"> 首页</p>
      <p class="meun-item" @click="gotoPage(2)"> 解决方案</p>
      <p class="meun-item" @click="gotoPage(3)"> 关于我们</p>
    </div>
    <div class="login-operation">
      <div class="login" v-if="showLogin">
        <p class="login-item login-username">{{userName}}</p>
        <p class="login-item login-myproject" @click="gotoPage(4)">我的项目</p>
        <p class="login-item logout" @click="logout">退出登录</p>
      </div>
      <div class="logout" v-else>
        <p class="login-item login" @click="gotoPage(5)">登录</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // showCollapse: true
    }
  },
  computed: {
    showCollapse() {
      return this.$store.state.showCollapse;
    },
    showLogin() {
      return this.$store.state.showLogin;
    },
    userName() {
      return this.$store.state.user.mobile
    }
  },
  created() {

  },

  methods: {
    changeShowCollapse() {
      this.$store.commit('changeShowCollapse', { value: false })
    },
    gotoPage(value) {
      this.$store.commit('changeShowCollapse', { value: false });
      if (value == 3) {
        this.$router.push({ path: 'about' });
      } else if (value == 2) {
        this.$router.push({ path: 'solution' })
      } else if (value == 1) {
        this.$router.push({ path: '/' })
      } else if (value == 4) {
        this.$router.push({ path: 'myProject' })
      } else if (value == 5) {
        this.$router.push({ path: 'login' })
      }
    },
    logout() {
      this.$store.commit('changeShowLogin', { value: false });
      this.$store.commit('changeUser', {});

      // localStorage.removeItem('token', response.token);
    }
  }
}

</script>
<style scoped lang="sass">
.collapse {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 100;
  .meun-icon {
    width: 100%;
    padding: 36px 40px 0px;
  }
  .meun-group {
    font-size: 30px;
    width: 100%;
    color: #333;
    margin-top: 100px;
    .meun-item {
      text-align: center;
      line-height: 70px; // margin-bottom: 80px;
    }
  }
  .login-operation {
    width: 100%;
    position: absolute;
    bottom: 100px;
    font-size: 30px;
    color: #333;
    .login-item {
      text-align: center;
      line-height: 70px; // margin-bottom: 80px;
    }
  }
}

</style>
