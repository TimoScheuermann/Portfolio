<template lang="html">
  <div id="app">
    <timo-nav></timo-nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    "timo-nav": Navbar
  }
};
</script>

<style lang="scss">
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

body {
  background-color: var(--background);
  color: var(--color);
  margin: 0;
}
</style>