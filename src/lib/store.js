import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    showCollapse: false,
    showBtn: true,
    showLogin: false,
    project: {}
  },
  getters: {},
  mutations: {
    changeShowCollapse(state, payload) {
      state.showCollapse = payload.value;
    },
    changeShowBtn(state, payload) {
      state.showBtn = payload.value
    },
    changeShowLogin(state, payload) {
      state.showLogin = payload.value
    },
    changeProject(state, payload) {
      state.project = payload;
    }
  },
  actions: {

  }
});
export default store
