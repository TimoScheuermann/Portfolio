<template lang="html">
  <div id="timos-portfolio">
    <PSidebar />
    <PRouterView :nested="false" />
    <PDarkLightMode />
    <PTabbar />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import backend from '@/utils/backend';
import PRouterView from './components/PRouter.vue';
import PSidebar from './components/PSidebar.vue';
import PTabbar from './components/PTabbar.vue';
import PDarkLightMode from './components/PDarkLighMode.vue';

@Component({
  components: {
    PTabbar,
    PRouterView,
    PSidebar,
    PDarkLightMode,
  },
})
export default class App extends Vue {
  mounted() {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.$store.commit('darkmode', dark);
    if (!this.$store.getters.projects) {
      backend.get('project').then(res => {
        this.$store.commit('projects', res.data);
      });
    }
  }
}
</script>

<style lang="scss">
html {
  font-family: -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol;
  scroll-behavior: smooth;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}
html {
  background: $background;
  color: $color;
  &[dark='true'] {
    background: $background_dark;
    color: $color_dark;
  }

  overflow-x: hidden;
}

body {
  min-height: 100vh;
  margin: 0;
}

[center] {
  text-align: center;
}
[error] {
  color: $error;
}
[huge] {
  font-size: 40px;
}
[max-width] {
  max-width: 1000px;
  margin: 0 auto;
}
[content] {
  padding: 20px 5vw calc(20px + env(safe-area-inset-bottom));
  @media #{$isMobile} {
    padding-bottom: calc(70px + env(safe-area-inset-bottom));
  }
}
[line-break] {
  white-space: pre-line;
}
</style>
