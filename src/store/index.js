import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    analysisData: null,
    themeList: null,
    imgList: [],
    selectedDate: new Date().toISOString().substr(0, 10),
  },
  mutations: {},
  actions: {},
  modules: {}
});