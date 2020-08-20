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
    ghevents: [],
  },
  mutations: {
    addRepositories: (state: any, repos: any[]) => {
      state.repositories.push(...repos);
    },
    addGHEvents: (state: any, events: any[]) => {
      state.ghevents.push(...events);
    },
  },
  getters: {
    repos: state => {
      return state.repositories.sort(
        (b: any, a: any) =>
          getLongFromDate(a.updated_at) - getLongFromDate(b.updated_at)
      );
    },
    ghevents: state => {
      return state.ghevents;
    },
  },
});

function getLongFromDate(dateString: string): number {
  return new Date(dateString).getTime();
}

export default store;
