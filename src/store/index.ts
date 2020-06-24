/* eslint-disable */
import IGitHubIssue from "@/models/GitHub/IGitHubIssue";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    designer: {
      component: "",
    },

    uno: {
      players: [],
      games: [],
      series: [],
    },
    iconIssues: [] as IGitHubIssue[],
  },
  getters: {
    designerComponent: (state: any) => {
      return state.designer.component;
    },
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
    updateDesignerComponent(state: any, comp: string) {
      state.designer.component = comp;
    },
  },
});

export default store;
