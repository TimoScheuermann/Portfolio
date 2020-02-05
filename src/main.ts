import Axios from "axios";
import "es6-promise/auto";
import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.use(Vuex);
Vue.config.productionTip = false;

const axios = Axios.create();

axios.interceptors.response.use(
  (v: any) => v,
  (err: any) => err
);

Vue.prototype.$axios = axios;

const store = new Vuex.Store({});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
