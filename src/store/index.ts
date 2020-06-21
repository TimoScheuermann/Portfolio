import { IconIssue } from "@/models/Icons/IconIssue.model";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    designer: {
      component: ""
    },

    uno: {
      players: [],
      games: [],
      series: []
    },
    iconIssues: [] as IconIssue[]
  },
  getters: {
    designerComponent: state => {
      return state.designer.component;
    },
    iconIssues: state => {
      return state.iconIssues;
    },
    hasIconIssues: (state, getters) => {
      return getters.iconIssues.length > 0;
    },
    iconIssue: state => (number: number) => {
      return state.iconIssues.filter(x => x.number === number)[0];
    },
    isRouteLoading: state => {
      return state.routeLoading;
    }
  },
  mutations: {
    updateIconIssues(state, issues: IconIssue[]) {
      state.iconIssues = issues;
    },
    updateDesignerComponent(state, comp: string) {
      state.designer.component = comp;
    }
  }
});

export default store;
