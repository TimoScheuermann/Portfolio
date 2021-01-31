/* eslint-disable */
import { IProject, IUser } from '@/utils/interfaces';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    darkmode: false,
    routeTransition: 'slide-left',
    user: {} as IUser,
    userValidated: false,
    projects: null,
    ghProfile: null,
    ghRepos: null,
    ghReposArchive: null,
  },
  getters: {
    darkmode: (state: any): boolean => {
      return state.darkmode;
    },
    routeTransition: (state: any): string => {
      return state.routeTransition;
    },
    valid: (state: any): boolean => {
      return state.userValidated;
    },
    user: (state: any): IUser => {
      return state.user;
    },
    projects(state: any): IProject[] | null {
      return state.projects;
    },
    ghProfile(state: any) {
      return state.ghProfile;
    },
    ghRepos(state: any): null | [] {
      return state.ghRepos;
    },
    ghReposArchive(state: any): null | [] {
      return state.ghReposArchive;
    },
  },
  mutations: {
    darkmode(state: any, darkmode: boolean): void {
      state.darkmode = darkmode;
      document.documentElement.setAttribute(
        'dark',
        darkmode ? 'true' : 'false'
      );
    },
    routeTransition(state: any, trans: string) {
      state.routeTransition = trans;
    },
    signOut(state: any) {
      state.userValidated = false;
      state.user = undefined;
    },
    signIn(state: any, user: IUser) {
      if (user && user.group === 'Admin') {
        state.user = user;
        state.userValidated = true;
      }
    },
    projects: (state: any, projects: IProject[]): void => {
      state.projects = projects;
    },
    ghProfile: (state: any, profile: any): void => {
      state.ghProfile = profile;
    },
    ghRepos: (state: any, repos: []): void => {
      state.ghRepos = repos;
    },
    ghReposArchive: (state: any, repos: []): void => {
      state.ghReposArchive = repos;
    },
  },
});

export default store;
