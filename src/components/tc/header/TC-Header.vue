<template>
  <div class="tc-header" :style="getStyles()" :class="getClasses()">
    <div class="title" v-if="title">{{ title }}</div>
    <div class="titleSlot" v-else>
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
  @Prop({ default: false }) dark!: boolean;
  @Prop({ default: "fixed" }) variant!: "fixed" | "floating" | "sticky";
  @Prop({ default: "0" }) top!: string;

  getClasses() {
    return {
      dark: this.dark,
      light: !this.dark,
      fixed: !(this.variant == "floating" || this.variant == "sticky"),
      sticky: this.variant == "sticky",
      floating: this.variant == "floating"
    };
  }
  getStyles() {
    return {
      top: (this.variant == "floating" ? 40 : 0) + +this.top + "px"
    };
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/mixins";
@import "../../../scss/variables";

.tc-header {
  &.dark {
    @include backdrop-blur($color);
    color: #fff;
  }
  &.light {
    @include backdrop-blur($background);
    color: $color;
  }
  &.sticky {
    position: sticky;
    padding: 0 5vw;
  }
  &.fixed {
    position: fixed;
    padding: 0 5vw {
      top: env(safe-area-inset-top);
    }
  }
  &.floating {
    position: fixed;
    margin: 0 10vw;
    padding: 0 20px;
    border-radius: $border-radius;
  }
  box-shadow: $shadow;
  right: 0;
  left: 0;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  & > .title {
    font-weight: bold;
    font-size: 18px;
  }
  & > .tc-header--items {
    writing-mode: inherit;
  }
}
</style>
