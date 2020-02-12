<template>
  <div class="tc-header">
    <div class="title" v-if="title">{{ title }}</div>
    <div v-else>
      <slot name="title" />
    </div>
    <div class="tc-header--items">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TCHeader extends Vue {
  @Prop() title!: string;
}
</script>
<style lang="scss" scoped>
@import "../../../scss/mixins";
@import "../../../scss/variables";

.tc-header {
  @include backdrop-blur($background);
  position: fixed;
  box-shadow: $shadow;
  top: 0;
  right: 0;
  left: 45px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  z-index: 999;
  .title {
    font-weight: bold;
    font-size: 18px;
  }
  .tc-header--items {
    writing-mode: inherit;
  }
}
</style>
