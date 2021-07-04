/* eslint-disable */
import App from '@/App.vue';
import PFooter from '@/components/PFooter.vue';
import PHeader from '@/components/PHeader.vue';
import PHeading from '@/components/PHeading.vue';
import '@/registerServiceWorker';
import router, { getTitle } from '@/router';
import store from '@/store';
import * as TCComponents from 'tccomponents_vue';
import 'tccomponents_vue/lib/tccomponents_vue.css';
import Vue from 'vue';
import { Route } from 'vue-router';
import { getDepth } from './utils/functions';

Vue.config.productionTip = false;

Vue.prototype.$newsIcon = 'https://newsroom.timos.design/pwa/maskIcon.svg';

for (const component in TCComponents) {
  Vue.component(component, TCComponents[component]);
}

Vue.component('PHeading', PHeading);
Vue.component('PHeader', PHeader);
Vue.component('PFooter', PFooter);

router.beforeEach((to: Route, from: Route, next) => {
  const toDepth = getDepth(to);
  const fromDepth = getDepth(from);
  const toPath = to.fullPath.split('/').slice(0, 2);
  const fromPath = from.fullPath.split('/').slice(0, 2);

  if (fromPath.join('/') !== toPath.join('/')) {
    store.commit('routeTransition', 'slide-bottom');
  } else {
    store.commit(
      'routeTransition',
      toDepth < fromDepth ? 'slide-right' : 'slide-left'
    );
  }

  const title = getTitle(to);
  document.title = title;

  const gt = document.querySelector('meta[name="title"]');
  if (gt) gt.setAttribute('content', title);

  const twitter = document.querySelector('meta[property="twitter:title"]');
  if (twitter) twitter.setAttribute('content', title);

  const og = document.querySelector('meta[property="og:title"]');
  if (og) og.setAttribute('content', title);

  next();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
