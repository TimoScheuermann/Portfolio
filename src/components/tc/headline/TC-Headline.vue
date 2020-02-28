<template>
  <div class="tc-headline">
    <div class="title" v-if="title">
      <i v-if="icon" :class="'ti-' + icon"></i>{{ title }}
    </div>
    <div v-else>
      <slot name="title" />
    </div>
    <div class="tc-headline--items">
      <slot />
    </div>
    <div class="bar"></div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TCHeadline extends Vue {
  @Prop() title!: string;
  @Prop() icon!: string;
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.tc-headline {
  min-height: 35px;
  display: flex;
  padding: 0 20px;
  margin: 20px 0;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .bar {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 1px;
    background: currentColor;
    opacity: 0.3;
  }
  .title {
    font-weight: bold;
    font-size: 18px;
    opacity: 0.8;
    i {
      color: $primary;
      margin-right: 10px;
    }
  }
  &:hover {
    .title {
      opacity: 1;
    }
  }
  .tc-headline--items {
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
  }
}
</style>
