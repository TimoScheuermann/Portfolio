<template>
  <div class="tabbar">
    <p>A</p>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class PTabbar extends Vue {}
</script>
<style lang="scss" scoped>
@import "../../scss/mixins";
@import "../../scss/variables";

.tabbar {
  @include backdrop-blur($background);

  @media #{$isDesktop} {
    display: none;
  }

  bottom: 0;
  position: fixed;
  height: 50px;
  padding-bottom: env(safe-area-inset-bottom);
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
