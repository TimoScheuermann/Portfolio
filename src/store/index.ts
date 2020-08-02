/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    uno: {
      players: [],
      games: [],
      series: [],
    },
    repositories: [],
  },
  mutations: {
    addRepositories: (state: any, repos: any[]) => {
      state.repositories.push(...repos);
    },
  },
  getters: {
    repos: state => {
      return state.repositories.sort(
        (b: any, a: any) =>
          getLongFromDate(a.updated_at) - getLongFromDate(b.updated_at)
      );
    },
  },
});

function getLongFromDate(dateString: string): number {
  return new Date(dateString).getTime();
}

export default store;
