import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    analysisData: null,
    themeList: null,
  },
  mutations: {},
  actions: {},
  modules: {}
});