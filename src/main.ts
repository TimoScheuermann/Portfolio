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
  document.title = title;

  const gt = document.querySelector('meta[name="title"]');
  if (gt) gt.setAttribute('content', title);

  const twitter = document.querySelector('meta[property="twitter:title"]');
  if (twitter) twitter.setAttribute('content', title);

  const og = document.querySelector('meta[property="og:title"]');
  if (og) og.setAttribute('content', title);

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
