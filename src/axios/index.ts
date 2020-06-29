/* eslint-disable */
import Axios from "axios";
import NProgress from "nprogress";

const axios = Axios.create();

axios.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

axios.interceptors.response.use((response) => {
  NProgress.done();
  return response;
});

export default axios;
