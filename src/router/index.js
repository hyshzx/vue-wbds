import Vue from 'vue'
import Router from 'vue-router'
import index from "../ui/index.vue"
import collapse from "../ui/collapse.vue"
import about from "../ui/about.vue"
import projectType from "../ui/projectType.vue"
import projectPublish from "../ui/projectPublish.vue"
import solution from "../ui/solution.vue"
import login from "../ui/login.vue"
import myProject from "../ui/myProject.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: function(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [{
      path: '/',
      name: 'index',
      components: {
        default: index,
        collapse: collapse
      }
    }, {
      path: '/about',
      name: 'about',
      components: {
        default: about,
        collapse: collapse
      }
    }, {
      path: '/projectType',
      name: 'projectType',
      components: {
        default: projectType,
        collapse: collapse
      }
    }, {
      path: '/projectPublish',
      name: 'projectPublish',
      components: {
        default: projectPublish,
        collapse: collapse
      }
    }, {
      path: '/solution',
      name: 'solution',
      components: {
        default: solution,
        collapse: collapse
      }
    }, {
      path: '/login',
      name: 'login',
      components: {
        default: login,
        collapse: collapse
      }
    }, {
      path: '/myProject',
      name: 'myProject',
      components: {
        default: myProject,
        collapse: collapse
      }
    },

  ]
})
