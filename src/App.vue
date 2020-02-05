<template lang="html">

  <div id="app">
    <p-navbar></p-navbar>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PNavbar from "@/components/common/P-Navbar.vue";

@Component({
  components: {
    "p-navbar": PNavbar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./scss/_variables.scss";

html {
  font-family: -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol;
  scroll-behavior: smooth;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  background: red;
}

body {
  background-color: $background;
  background: orange;
  color: $color;
  margin: 0;
}

a {
  text-decoration: none;
  color: $primary;
}

.view {
  padding: $sa-top $sa-right $sa-bottom $sa-left;
}
@media only screen {
  .view {
    padding-top: #{50px + $sa-top};
    padding-bottom: #{50px + $sa-bottom};
  }
}
</style>
