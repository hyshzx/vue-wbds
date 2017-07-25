<template>
  <div class="app">
    <navbar></navbar>
    <div class="content">
      <div class="p-title">
        <h3>提交一个外包项目	</h3>
      </div>
      <div class="project-type">
        <h3>	您的项目是什么类型？</h3>
        <ul class="p-type-list">
          <li class="p-type" v-for="item in typeList" @click="chooseType(item.value)" :class="{'active':item.value==currentType}">{{item.label}} <img src="../../static/img/TICK.png" height="34" width="50" alt="" v-show="item.value==currentType"></li>
        </ul>
      </div>
      <div class="project-trade">
        <h3>	项目所属什么行业？</h3>
        <ul class="p-trade-list">
          <li class="p-trade" v-for="item in tradeList" @click="chooseTrade(item.value)" :class="{'active':item.value==currentTrade}">{{item.label}} <img src="../../static/img/TICK.png" height="34" width="50" alt="" v-show="item.value==currentTrade"></li>
        </ul>
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
      typeList: [{
        label: '网站开发',
        value: '网站开发'
      }, {
        label: '移动开发',
        value: '移动开发'
      }, {
        label: '微信开发',
        value: '微信开发'
      }, {
        label: '产品资讯',
        value: '产品资讯'
      }, {
        label: '其他类别',
        value: '其他类别'
      }],
      tradeList: [{
        label: '社交',
        value: '社交'
      }, {
        label: '电商',
        value: '电商'
      }, {
        label: '金融',
        value: '金融'
      }, {
        label: '工具',
        value: '工具'
      }, {
        label: '其他',
        value: '其他'
      }],
      currentType: null,
      currentTrade: null
    }
  },
  components: {
    navbar: navbar
  },
  created() {
    this.$store.commit('changeShowBtn', { value: false });

  },

  beforeRouteLeave(to, from, next) {
    console.log(to);
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    if (to.name != "projectPublish") {
      this.$store.commit('changeShowBtn', { value: true });
      next();
    } else {
      next();
    }
  },
  methods: {
    chooseType(value) {
      console.log(value);
      this.currentType = value;
      if (this.currentType && this.currentTrade) {
        this.$store.commit('changeProject', { type: this.currentType, trade: this.currentTrade });
        this.$router.push({
          path: 'projectPublish'
        });

      }
    },
    chooseTrade(value) {
      console.log(value);
      this.currentTrade = value;
      if (this.currentType && this.currentTrade) {
        this.$store.commit('changeProject', { type: this.currentType, trade: this.currentTrade });
        this.$router.push({
          path: 'projectPublish'
        })
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
  .project-type {
    width: 100%;
    h3 {
      padding: 0px 40px;
      color: #000;
      font-size: 36px;
      height: 120px;
      line-height: 120px;
      font-family: "SimHei";
    }
    .p-type-list {
      width: 100%;
      .p-type {
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
      .p-type.active {
        color: #1dc8ff;
        border-top: 1px solid #1dc8ff;
        border-bottom: 1px solid #1dc8ff;
      }
    }
  }
  .project-trade {
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
  }
  .company-code {
    background-color: #fff;
    padding-top: 100px;
  }
}

</style>
