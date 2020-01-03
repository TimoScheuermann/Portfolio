import Axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

const axios = Axios.create();

axios.interceptors.response.use(
  (v: any) => v,
  (err: any) => err
);

Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
