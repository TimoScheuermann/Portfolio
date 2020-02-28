<template>
  <div class="tc-tabbar">
    <div class="items">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class TCTabbar extends Vue {}
</script>
<style lang="scss" scoped>
@import "../../../scss/mixins";
@import "../../../scss/variables";

.tc-tabbar {
  @include backdrop-blur($background);
  position: fixed;
  box-shadow: $shadow;
  bottom: 0;
  right: 0;
  left: 0px;
  z-index: 999;
  padding: 0 2.5px {
    bottom: env(safe-area-inset-bottom);
  }
  .items {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
