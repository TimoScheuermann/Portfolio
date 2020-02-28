<template>
  <div class="tc-progress-bar" :style="{ height: height + 'px' }">
    <div class="background"></div>
    <div class="bar" :style="{ width: percent + '%' }"></div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TCProgressBar extends Vue {
  @Prop({ default: 0, type: Number }) percent!: number;
  @Prop({ default: 4, type: Number }) height!: number;
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.tc-progress-bar {
  border-radius: 10px;
  margin: 5px 0;
  position: relative;
  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    filter: brightness(50%);
    z-index: -1;
  }
  .bar,
  .background {
    background: $primary;
    border-radius: inherit;
    height: inherit;
  }
}
</style>
