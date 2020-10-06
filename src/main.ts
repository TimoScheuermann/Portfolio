/* eslint-disable */
import App from '@/App.vue';
import '@/registerServiceWorker';
import router from '@/router';
import store from '@/store';
import * as TCComponents from 'tccomponents_vue';
import 'tccomponents_vue/lib/tccomponents_vue.css';
import Vue from 'vue';
import { Route } from 'vue-router';

Vue.config.productionTip = false;

for (const component in TCComponents) {
  Vue.component(component, TCComponents[component]);
}

router.beforeEach((to: Route, from: Route, next) => {
  const title = to.meta.title || 'Timo Scheuermann | Portfolio';
  const description =
    to.meta.description ||
    "Portfolio about all my Projects I've done since May 2019";
  document.title = title;

  const gt = document.querySelector('meta[name="title"]');
  if (gt) gt.setAttribute('content', title);
  const gd = document.querySelector('meta[name="description"]');
  if (gd) gd.setAttribute('content', description);

  const twitterTitle = document.querySelector('meta[property="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute('content', title);
  const twitterDesc = document.querySelector(
    'meta[property="twitter:description"]'
  );
  if (twitterDesc) twitterDesc.setAttribute('content', description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
  window.scrollTo(0, 0);
  next();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
