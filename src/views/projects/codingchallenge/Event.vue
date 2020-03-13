<template>
  <div class="container" :style="getStyle()">
    <div class="inner">
      <div class="title">Sample Event</div>
      <div class="location">Sample Location</div>
    </div>
  </div>
</template>
<script lang="ts">
//
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Event extends Vue {
  @Prop() start!: number;
  @Prop() end!: number;

  gridCalc(n: number): number {
    return Math.round(n / 5);
  }
  getGridStart(): number {
    return this.gridCalc(this.start);
  }
  getGridEnd(): number {
    return this.gridCalc(this.end) + 1;
  }
  getStyle(): any {
    return {
      gridRowStart: this.getGridStart(),
      gridRowEnd: this.getGridEnd()
    };
  }
}
</script>
<style lang="scss" scoped>
.container {
  border-left: 3px solid #47c586;
  padding: 0 10px;
  background: #fff;
  white-space: nowrap;
  grid-column: 1 / -1;
  .inner {
    display: flex;
    flex-direction: column;
    .title,
    .location {
      height: fit-content;
      width: 100%;
      font-size: 14px;
    }
    .title {
      margin-bottom: 5px;
      color: #47c586;
      font-weight: bold;
    }
  }
}
</style>
