<template lang="html">
  <div id="app">
    <p-navbar></p-navbar>
    <p-tabbar></p-tabbar>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PNavbar from "@/components/common/P-Navbar.vue";
import PTabbar from "./components/common/P-Tabbar.vue";

@Component({
  components: {
    "p-navbar": PNavbar,
    "p-tabbar": PTabbar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./scss/variables.scss";

html {
  font-family: -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol;
  scroll-behavior: smooth;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

body {
  background-color: $background;
  color: $color;
  margin: 0;
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: $primary;
}
</style>
