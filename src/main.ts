import "es6-promise/auto";
import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import axios from "./axios";
import "./registerServiceWorker";
import router from "./router";

Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

const store = new Vuex.Store({
  state: {
    uno: {
      players: [],
      games: [],
      series: []
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
