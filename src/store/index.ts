/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    uno: {
      players: [],
      games: [],
      series: [],
    },
  },
});

export default store;
