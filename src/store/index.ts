/* eslint-disable */
import IGitHubIssue from "@/models/GitHub/IGitHubIssue";
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
    iconIssues: [] as IGitHubIssue[],
  },
  getters: {
    iconIssues: (state: any) => {
      return state.iconIssues;
    },
    hasIconIssues: (state: any, getters: any) => {
      return getters.iconIssues.length > 0;
    },
    iconIssue: (state: any) => (number: number) => {
      return state.iconIssues.filter(
        (x: IGitHubIssue) => x.number === number
      )[0];
    },
  },
  mutations: {
    updateIconIssues(state: any, issues: IGitHubIssue[]) {
      state.iconIssues = issues;
    },
  },
});

export default store;
