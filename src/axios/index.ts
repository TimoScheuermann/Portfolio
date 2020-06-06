import Axios from "axios";

const axios = Axios.create();

axios.interceptors.response.use(
  (v: any) => v,
  (err: any) => err
);

export default axios;
