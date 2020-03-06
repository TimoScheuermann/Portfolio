<template>
  <div
    class="tc-progress-bar"
    v-if="type != 'ring'"
    :style="{ height: barHeight + 'px' }"
  >
    <div class="background"></div>
    <div class="bar" :style="{ width: percent + '%' }"></div>
  </div>
  <div v-else class="tc-progress-ring">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="ringSize"
      :height="ringSize"
      :viewBox="'0 0 ' + ringSize + ' ' + ringSize + ''"
    >
      <circle
        class="background"
        :style="{ 'stroke-width': ringWidth + 'px' }"
        :cx="ringSize / 2"
        :cy="ringSize / 2"
        :r="radius"
      />
      <circle
        :style="{
          'stroke-width': ringWidth + 'px',
          'stroke-dasharray': dasharray,
          'stroke-dashoffset': dashoffset
        }"
        :cx="ringSize / 2"
        :cy="ringSize / 2"
        :r="radius"
      />
    </svg>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TCProgress extends Vue {
  @Prop({ default: 0 }) percent!: number;
  @Prop({ default: 4 }) barHeight!: number;
  @Prop({ default: "bar" }) type!: string;
  @Prop({ default: 70 }) ringSize!: number;
  @Prop({ default: 8 }) ringWidth!: number;

  getCircumference(): number {
    return this.radius * 2 * Math.PI;
  }

  get radius(): number {
    return (this.ringSize - this.ringWidth) / 2;
  }

  get dashoffset(): number {
    return (
      this.getCircumference() - (this.percent / 100) * this.getCircumference()
    );
  }

  get dasharray(): string {
    return `${this.getCircumference()} ${this.getCircumference()}`;
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";

.tc-progress-ring {
  svg {
    transform: rotate(-90deg);
    circle {
      fill: none;
      stroke: $primary;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: 0.2s ease-in-out;
      &.background {
        stroke: $paragraph;
      }
    }
  }
}

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
    transition: 0.2s ease-in-out;
    background: $primary;
    border-radius: inherit;
    height: inherit;
  }
}
</style>
