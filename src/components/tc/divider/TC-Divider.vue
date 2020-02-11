<template>
  <div class="tc-divider" :style="{ 'text-align': alignment }">
    <div class="bar"></div>
    <div class="content" v-if="icon || name">
      <i v-if="icon" :class="'ti-' + icon"></i>
      <span v-if="name" class="name">{{ name }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TCDivider extends Vue {
  @Prop() name!: string;
  @Prop() icon!: string;
  @Prop() position!: string;

  get alignment() {
    return this.position || "center";
  }
}
</script>
<style lang="scss" scoped>
.tc-divider {
  position: relative;
  margin: 5px 10px;
  min-height: 10px;
  .bar {
    position: absolute;
    background: #000;
    height: 1px;
    opacity: 0.3;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
  }
  .content {
    z-index: 2;
    background: #fff;
    padding: 0 5px;
    display: inline-block;

    .icon,
    .name {
      user-select: none;
      opacity: 0.8;
      padding: 0 3px;
    }
  }
}
</style>
