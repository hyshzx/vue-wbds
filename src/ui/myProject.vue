<template>
  <div class="app">
    <navbar></navbar>
    <div class="content">
      <h3>我发布的项目</h3>
      <div class="project-empty" v-if="showEmpty">
        <p><img src="../../static/img/project_empty.png" height="66" width="66" alt=""></p>
        <p>还没有提交过外包委托</p>
        <p>马上发布一个</p>
        <p><a class="p-publish" @click="gotoPage">发布外包</a></p>
      </div>
      <div class="project-my" v-else>
        <div class="project-item" v-for="item in projectList">
          <p>项目名称:{{item.name}}</p>
          <p>项目类型:{{item.type}}</p>
          <p>项目周期:{{item.period}}</p>
          <p>创建时间:{{item.createdTime}}</p>
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
export default {
  data() {
    return {
      showEmpty: false,
      projectList: [],
      typeList: [{
        label: '网站开发',
        value: '1'
      }, {
        label: '移动开发',
        value: '2'
      }, {
        label: '微信开发',
        value: '3'
      }, {
        label: '产品资讯',
        value: '4'
      }, {
        label: '其他类别',
        value: '5'
      }],
    }
  },
  components: {
    navbar: navbar
  },
  created() {
    Date.prototype.autoFormat = function() {
      var timestamp = this.getTime();
      var now = (new Date()).getTime();
      var gap = (now - timestamp) / 1000;
      var minute = 60;
      var hour = 60 * minute;
      var day = 24 * hour;

      if (gap > 0 && gap < hour) {
        var multiper = Math.floor(gap / minute);
        return multiper == 0 ? "刚刚" : (multiper + "分钟前");
      } else if (gap > 0 && gap < day) {
        var multiper = Math.floor(gap / hour);
        return multiper + "小时前";
      } else if (gap > 0 && gap < 2 * day) {
        return "昨天";
      } else if (gap > 0 && gap < 3 * day) {
        return "前天";
      }
      return this.format("yyyy-MM-dd");
    };
    let id = this.$store.state.user.id;
    var self = this;
    axios.get('/user/project?user_id=' + id).then((response) => {
      console.log(response);
      if (response.status == 200 && response.data.length != 0) {
        let listData = response.data;
        listData.forEach((item) => {
          let oneItem = {};
          oneItem.name = item.name;
          oneItem.period = item.period;
          self.typeList.forEach((_item) => {
            if (_item.value == item.type) {
              oneItem.type = _item.label;
            }
          });
          let time = new Date(item.create_at * 1000).autoFormat();
          oneItem.createdTime = time;
          self.projectList.push(oneItem);
        })
      } else {
        self.showEmpty = true;
      }
    })
  },
  methods: {
    gotoPage() {
      this.$router.push({ path: 'projectType' })
    }
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
  .project-my {
    width: 100%;
    .project-item {
      width: 100%;
      background-color: #fff;
      padding: 20px 40px;
      font-size: 28px;
      margin-bottom: 20px;
      box-shadow: 0 0 0px 2px #e6e6e6;
      p:nth-child(1) {
        font-size: 32px;
        font-weight: bold;
      }
      p {
        line-height: 1.3
      }
    }
  }
}

</style>
