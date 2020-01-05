<template lang="html">

  <div id="app">
    <timo-nav></timo-nav>
    <timo-header></timo-header>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    "timo-nav": Navbar,
    "timo-header": Header
  }
};
</script>

<style lang="scss">
@import "variables.scss";
:root {
  --background: #fff;
  --background-rgb: 255, 255, 255;
  --paragraph: #f0f0f0;
  --paragraph-rgb: 240, 240, 240;
  --color: #111;
  --color-rgb: 17, 17, 17;
}
:roots {
  --background: #000;
  --paragraph: #0f0f0f;
  --paragraph-rgb: 15, 15, 15;
  --color: #fff;
}

:root {
  @supports (top: constant(safe-area-inset-top)) {
    --safe-area-inset-top: constant(safe-area-inset-top);
    --safe-area-inset-right: constant(safe-area-inset-right);
    --safe-area-inset-bottom: constant(safe-area-inset-bottom);
    --safe-area-inset-left: constant(safe-area-inset-left);
  }
  @supports (top: env(safe-area-inset-top)) {
    --safe-area-inset-top: env(safe-area-inset-top);
    --safe-area-inset-right: env(safe-area-inset-right);
    --safe-area-inset-bottom: env(safe-area-inset-bottom);
    --safe-area-inset-left: env(safe-area-inset-left);
  }
}

html {
  font-family: -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol;
  scroll-behavior: smooth;
}

body {
  background-color: var(--background);
  color: var(--color);
  margin: 0;
}
.view {
  padding: var(--safe-area-inset-top) var(--safe-area-inset-right)
    var(--safe-area-inset-bottom) var(--safe-area-inset-left);
}
@media only screen and(max-width: $mobile) {
  .view {
    padding-top: calc(50px + var(--safe-area-inset-top));
    padding-bottom: calc(50px + var(--safe-area-inset-bottom));
  }
}
</style>